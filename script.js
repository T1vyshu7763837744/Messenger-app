// ========== DATA STORE ==========
const chatData = {
    1: {
        id: 1,
        name: 'John Doe',
        avatar: 'JD',
        online: true,
        status: 'Active now',
        messages: [
            { id: 1, sender: 'bot', text: 'Hey! How are you doing?', time: '2:15 PM' },
            { id: 2, sender: 'user', text: "I'm doing great, thanks for asking!", time: '2:16 PM' },
            { id: 3, sender: 'bot', text: 'Want to grab coffee tomorrow?', time: '2:18 PM' },
            { id: 4, sender: 'user', text: 'That sounds great!', time: '2:30 PM' }
        ],
        preview: 'That sounds great!'
    },
    2: {
        id: 2,
        name: 'Sarah Miller',
        avatar: 'SM',
        online: false,
        status: 'Last active 3 hours ago',
        messages: [
            { id: 1, sender: 'bot', text: 'Hi Sarah! How are you?', time: '1:20 PM' },
            { id: 2, sender: 'user', text: 'Good, you?', time: '1:22 PM' },
            { id: 3, sender: 'bot', text: 'Great! See you tomorrow', time: '1:25 PM' },
            { id: 4, sender: 'user', text: 'See you tomorrow', time: '5:30 PM' }
        ],
        preview: 'See you tomorrow'
    }
};

const autoResponses = [
    'That sounds great!',
    'I totally agree!',
    'Let me think about that...',
    'Sounds good to me!',
    'I appreciate that!',
    'Thanks for letting me know!',
    'Cool, talk soon!'
];

let currentChatId = 1;
let isTyping = false;

// ========== INITIALIZATION ==========
window.addEventListener('load', () => {
    initializeChat();
    updateUserStatus();
    setInterval(updateUserStatus, 5000);
});

function initializeChat() {
    selectChat(1);
}

// ========== CHAT SELECTION ==========
function selectChat(chatId) {
    currentChatId = chatId;
    
    // Update active state
    document.querySelectorAll('.chat-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-chat-id="${chatId}"]`).classList.add('active');
    
    // Update header
    const chat = chatData[chatId];
    const headerAvatar = document.querySelector('.header-avatar');
    const headerDetails = document.querySelector('.header-details');
    
    headerAvatar.textContent = chat.avatar;
    headerAvatar.classList.toggle('online', chat.online);
    headerDetails.innerHTML = `
        <div class="header-name">${chat.name}</div>
        <div class="header-status">
            <span class="status-dot" style="display: ${chat.online ? 'block' : 'none'}"></span>
            ${chat.status}
        </div>
    `;
    
    // Update info panel
    document.querySelector('.info-avatar-large').textContent = chat.avatar;
    document.querySelector('.info-name').textContent = chat.name;
    document.querySelector('.info-status').textContent = chat.status;
    
    // Render messages
    renderMessages();
}

// ========== MESSAGE RENDERING ==========
function renderMessages() {
    const container = document.getElementById('messagesContainer');
    const chat = chatData[currentChatId];
    
    container.innerHTML = '';
    
    chat.messages.forEach(msg => {
        const messageGroup = document.createElement('div');
        messageGroup.className = 'message-group';
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${msg.sender}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = msg.text;
        
        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = msg.time;
        
        contentDiv.appendChild(bubble);
        contentDiv.appendChild(timeDiv);
        messageDiv.appendChild(contentDiv);
        messageGroup.appendChild(messageDiv);
        
        container.appendChild(messageGroup);
    });
    
    // Scroll to bottom
    setTimeout(() => {
        container.scrollTop = container.scrollHeight;
    }, 0);
}

// ========== MESSAGE SENDING ==========
function sendMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    
    if (!text) return;
    
    const chat = chatData[currentChatId];
    
    // Add user message
    const currentTime = new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });
    
    chat.messages.push({
        id: chat.messages.length + 1,
        sender: 'user',
        text: text,
        time: currentTime
    });
    
    // Update preview
    chat.preview = text;
    updateChatPreview(currentChatId);
    
    // Clear input
    input.value = '';
    
    // Render messages
    renderMessages();
    
    // Auto response
    simulateTyping();
}

function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// ========== TYPING SIMULATION ==========
function simulateTyping() {
    if (isTyping) return;
    
    isTyping = true;
    
    // Show typing indicator
    const container = document.getElementById('messagesContainer');
    const typingGroup = document.createElement('div');
    typingGroup.className = 'message-group typing-indicator';
    typingGroup.id = 'typingIndicator';
    typingGroup.innerHTML = `
        <div class="message bot">
            <div class="typing-bubble">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    container.appendChild(typingGroup);
    container.scrollTop = container.scrollHeight;
    
    // Random delay 1-3 seconds
    const delay = Math.random() * 2000 + 1000;
    
    setTimeout(() => {
        // Remove typing indicator
        const indicator = document.getElementById('typingIndicator');
        if (indicator) indicator.remove();
        
        // Add auto response
        const chat = chatData[currentChatId];
        const randomResponse = autoResponses[Math.floor(Math.random() * autoResponses.length)];
        const currentTime = new Date().toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
        
        chat.messages.push({
            id: chat.messages.length + 1,
            sender: 'bot',
            text: randomResponse,
            time: currentTime
        });
        
        chat.preview = randomResponse;
        updateChatPreview(currentChatId);
        renderMessages();
        
        isTyping = false;
    }, delay);
}

// ========== UI HELPERS ==========
function updateChatPreview(chatId) {
    const chatItem = document.querySelector(`[data-chat-id="${chatId}"]`);
    const preview = chatItem.querySelector('.chat-preview');
    preview.textContent = chatData[chatId].preview;
}

function updateUserStatus() {
    // Simulate status changes
    const chat = chatData[currentChatId];
    const randomOnline = Math.random() > 0.3;
    
    if (chat.online !== randomOnline) {
        chat.online = randomOnline;
        chat.status = randomOnline ? 'Active now' : 'Last active 5 minutes ago';
        selectChat(currentChatId); // Refresh header
    }
}

function toggleEmojiPicker() {
    const picker = document.getElementById('emojiPicker');
    picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
}

function insertEmoji(emoji) {
    const input = document.getElementById('messageInput');
    input.value += emoji;
    input.focus();
    document.getElementById('emojiPicker').style.display = 'none';
}

function toggleInfoPanel() {
    const panel = document.getElementById('chatInfoPanel');
    panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
}

// ========== ACTION HANDLERS ==========
function addAttachment() {
    alert('📎 Attachment feature - File picker would open here');
}

function initiateCall(type) {
    const chat = chatData[currentChatId];
    alert(`${type === 'voice' ? '📞 Voice' : '📹 Video'} call initiated with ${chat.name}`);
}

function startNewChat() {
    alert('💬 New chat - Would show contact picker here');
}

function markAsSpam() {
    alert('⚠️ Chat marked as spam');
}

function blockUser() {
    const chat = chatData[currentChatId];
    if (confirm(`Block ${chat.name}?`)) {
        alert(`✓ ${chat.name} has been blocked`);
    }
}

function clearChat() {
    if (confirm('Clear all messages in this chat?')) {
        const chat = chatData[currentChatId];
        chat.messages = [];
        chat.preview = '';
        renderMessages();
        updateChatPreview(currentChatId);
        alert('✓ Chat cleared');
    }
}

// Close emoji picker when clicking outside
document.addEventListener('click', (e) => {
    const picker = document.getElementById('emojiPicker');
    const emojiBtn = document.querySelector('.emoji-btn');
    if (!picker.contains(e.target) && !emojiBtn.contains(e.target)) {
        picker.style.display = 'none';
    }
});
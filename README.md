# 💬 Messenger App - My First Project!

> A modern, fully functional real-time messenger app with chat for 2 active users. Built with vanilla HTML, CSS, and JavaScript.

![Messenger App](https://img.shields.io/badge/Status-Active-brightgreen) ![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow) ![HTML5](https://img.shields.io/badge/HTML5-Complete-orange) ![CSS3](https://img.shields.io/badge/CSS3-Responsive-blue)

## 🎯 Project Overview

This is my **first GitHub project** - a feature-rich messenger application that mimics real-world chat applications. It demonstrates modern web development practices with a clean, responsive UI and smooth user interactions.

**Live Demo**: [View Live App](https://htmlpreview.github.io/?https://github.com/T1vyshu7763837744/messenger-app/blob/main/index.html)

---

## ✨ Key Features

### 🎨 User Interface
- Modern messenger-style layout (Facebook Messenger inspired)
- Responsive design (Desktop, Tablet, Mobile)
- Smooth animations and transitions
- Clean, intuitive interface

### 💬 Chat Features
- **2 Active Users**: Switch between conversations
- **Message History**: View past conversations
- **Real-time Chat**: Send and receive messages instantly
- **Auto-Responses**: Other user responds automatically
- **Typing Indicators**: Animated bouncing dots animation

### 👤 User Management
- Online/offline status with green indicator
- Live status updates every 5 seconds
- User info panel with details
- Contact list with chat previews

### 🎁 Extra Features
- 😊 **Emoji Picker** - 8 emojis to choose from
- 📎 **Attachments** - File attachment simulation
- 📞 **Voice Call** - Call button with notification
- 📹 **Video Call** - Video call button with notification
- ℹ️ **User Info** - View user details and contact info
- 🔐 **Chat Management** - Block user, mark as spam, clear chat

### 📱 Responsive Design
- **Desktop**: Full 3-column layout
- **Tablet**: Optimized 2-column view
- **Mobile**: Full-width chat interface

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, flexbox
- **Vanilla JavaScript** - No frameworks or dependencies

**Total Size**: < 50KB | **Load Time**: < 1 second

---

## 📂 Project Structure

```
messenger-app/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling (1000+ lines)
├── script.js           # JavaScript functionality (500+ lines)
├── README.md           # This file
└── .gitignore          # Git ignore file
```

---

## 🚀 Quick Start

### Option 1: Run Locally
1. Clone the repository:
```bash
git clone https://github.com/T1vyshu7763837744/messenger-app.git
cd messenger-app
```

2. Open `index.html` in your browser:
   - Right-click → Open with Chrome/Firefox/Safari
   - Or use Live Server extension in VS Code

### Option 2: View Live Demo
Visit: [https://htmlpreview.github.io/?https://github.com/T1vyshu7763837744/messenger-app/blob/main/index.html](https://htmlpreview.github.io/?https://github.com/T1vyshu7763837744/messenger-app/blob/main/index.html)

---

## 💻 How to Use

### Sending Messages
1. Type your message in the input field
2. Press **Enter** or click the **➤** send button
3. Your message appears on the right side (blue)
4. Other user auto-responds after 1-3 seconds

### Switching Chats
- Click on different users in the left sidebar
- See their message history
- Status updates in real-time

### Using Features
- **Emoji**: Click 😊 button to open emoji picker
- **Call**: Click 📞 or 📹 for voice/video calls
- **Info**: Click ℹ️ to view user details
- **Options**: Click info panel buttons to block, spam, or clear

---

## 🎓 Code Highlights

### Message System
```javascript
// Add message to chat
chat.messages.push({
    id: chat.messages.length + 1,
    sender: 'user',
    text: text,
    time: currentTime
});
```

### Auto-Response with Typing Animation
```javascript
function simulateTyping() {
    // Show typing indicator
    // Random 1-3 second delay
    // Add auto-response message
    // Remove typing indicator
}
```

### Responsive Layout
- CSS Media Queries for different screen sizes
- Flexbox layout for flexibility
- Mobile-first approach

---

## 📊 Chat Data Structure

```javascript
const chatData = {
    1: {
        id: 1,
        name: 'John Doe',
        avatar: 'JD',
        online: true,
        status: 'Active now',
        messages: [
            { id: 1, sender: 'bot', text: 'Hey!', time: '2:15 PM' },
            { id: 2, sender: 'user', text: 'Hi!', time: '2:16 PM' }
        ],
        preview: 'Hi!'
    }
};
```

---

## 🎨 Customization

### Change Theme Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0084ff;      /* Chat bubble color */
    --secondary-color: #e5e5ea;    /* Message background */
    --bg-color: #fff;              /* Main background */
    --online-color: #31a24c;       /* Online indicator */
}
```

### Add More Users
Edit `chatData` in `script.js`:
```javascript
const chatData = {
    3: {
        id: 3,
        name: 'New User',
        avatar: 'NU',
        online: true,
        status: 'Active now',
        messages: []
    }
};
```

### Customize Auto-Responses
Modify the `autoResponses` array:
```javascript
const autoResponses = [
    'Your custom response 1',
    'Your custom response 2',
    'Your custom response 3'
];
```

---

## 🔧 Browser Support

| Browser | Support |
|---------|----------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile Browsers | ✅ iOS/Android |

---

## 📈 Features Breakdown

| Feature | Status | Details |
|---------|--------|----------|
| Real-time Chat | ✅ | Send/receive messages instantly |
| Message History | ✅ | View past conversations |
| Typing Indicator | ✅ | Animated bouncing dots |
| Online Status | ✅ | Updates every 5 seconds |
| Auto-Response | ✅ | 1-3 second delay |
| Emoji Picker | ✅ | 8 emojis available |
| Call Buttons | ✅ | Voice & Video |
| User Info | ✅ | Detailed user panel |
| Chat Management | ✅ | Block, spam, clear options |
| Responsive Design | ✅ | Mobile, tablet, desktop |

---

## 🚀 Future Enhancements

Potential features to add:
- [ ] WebSocket integration for real server communication
- [ ] Message persistence using localStorage
- [ ] Image upload and display
- [ ] Voice/Video call integration
- [ ] Group chat support
- [ ] Message search functionality
- [ ] User authentication
- [ ] Database backend
- [ ] Push notifications
- [ ] End-to-end encryption

---

## 📝 Learning Outcomes

Through this project, I learned:
- ✅ HTML5 semantic markup
- ✅ Advanced CSS (flexbox, gradients, animations)
- ✅ Vanilla JavaScript (DOM manipulation, event handling)
- ✅ Responsive web design
- ✅ UI/UX principles
- ✅ Data structure design
- ✅ Event-driven programming
- ✅ State management

---

## 🤝 Contributing

Have suggestions or improvements? Feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit (`git commit -m 'Add improvement'`)
5. Push to branch (`git push origin feature/improvement`)
6. Open a Pull Request

---

## 📧 Contact & Social

- **GitHub**: [@T1vyshu7763837744](https://github.com/T1vyshu7763837744)
- **Project**: [Messenger App](https://github.com/T1vyshu7763837744/messenger-app)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🎉 Project Stats

- **Lines of Code**: 1500+
- **Files**: 3 (HTML, CSS, JS)
- **Project Size**: < 50KB
- **Load Time**: < 1 second
- **Browser Support**: All modern browsers

---

## 📞 Support

If you encounter any issues or have questions:
1. Check the GitHub Issues section
2. Review the code comments
3. Test in different browsers
4. Check console for errors (F12)

---

## ⭐ If You Like This Project

Please give it a **⭐ Star** on GitHub!

---

**Created with ❤️ as my first GitHub project**

**Last Updated**: May 25, 2026

**Status**: ✅ Complete & Fully Functional
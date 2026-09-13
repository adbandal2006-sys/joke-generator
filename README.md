# 💬 Discord-Style Chat Room

A beautiful, real-time chat room application built with vanilla JavaScript, inspired by Discord's design. No backend required - everything runs locally in your browser!

## ✨ Features

- **Discord-Inspired UI** - Clean, modern dark theme design
- **Multiple Channels** - Create and manage different chat channels
- **Real-time Messaging** - Send and receive messages instantly
- **User Management** - Join with a username, see online users
- **Typing Indicators** - Know when someone is typing
- **Emoji Support** - Pick from 20+ emojis to use in messages
- **Message History** - Messages persist using localStorage
- **Responsive Design** - Works on desktop, tablet, and mobile
- **No Backend Required** - Everything runs in the browser

## 🎮 Channels

- **#general** - Main discussion channel
- **#random** - Off-topic conversations
- **#gaming** - Gaming discussions
- **#tech** - Technology topics
- **Create Custom Channels** - Add your own channels on the fly

## 🚀 Getting Started

### Method 1: GitHub Pages (Recommended)
1. The repository is already set up with GitHub Pages
2. Visit: `https://adbandal2006-sys.github.io/joke-generator/`
3. Open in your browser and start chatting!

### Method 2: Local Development
```bash
# Clone the repository
git clone https://github.com/adbandal2006-sys/joke-generator.git
cd joke-generator

# Start a local server
python -m http.server 8000
# or
npx http-server
# or
php -S localhost:8000

# Open http://localhost:8000 in your browser
```

## 📖 How to Use

1. **Join the Chat**
   - Enter your username (3-20 characters)
   - Click "Join Chat"

2. **Switch Channels**
   - Click on any channel in the left sidebar
   - Send messages specific to that channel

3. **Send Messages**
   - Type your message in the input box
   - Press Enter or click Send button
   - Messages appear in real-time

4. **Add Emojis**
   - Click the emoji button (😊)
   - Select an emoji to insert into your message

5. **Create New Channels**
   - Click the "+" button next to "Channels"
   - Enter channel name
   - Start chatting in your new channel

6. **View Online Users**
   - See all online users in the right section
   - Green dot indicates active users

## 🏗️ Project Structure

```
joke-generator/
├── index.html       # Main HTML with UI structure
├── style.css        # Discord-style CSS styling
├── script.js        # Chat functionality
└── README.md        # This file
```

## 🎨 Design Features

- **Dark Theme** - Easy on the eyes, Discord-like
- **Gradient Accents** - Beautiful blue-purple gradients
- **Smooth Animations** - Slide-in effects for messages
- **Interactive Elements** - Hover effects and transitions
- **Responsive Layout** - Adapts to all screen sizes

## 💾 Data Storage

All messages and channels are stored in your browser using **localStorage**:
- Messages persist even after closing the browser
- Data is stored locally on your device
- Clear browser data to reset the chat

## 🎯 Features Breakdown

### Messages
- Author name and timestamp
- Automatic scrolling to latest message
- User avatars (first letter of username)
- Message history for each channel

### Channels
- Pre-built channels (general, random, gaming, tech)
- Create unlimited custom channels
- Switch between channels instantly
- Separate message history per channel

### User Management
- Join with a custom username
- Online user list
- User avatars with initials
- Logout functionality

### Input Features
- Text input with emoji picker
- Typing indicators (visual feedback)
- Enter to send, Shift+Enter for new line
- File attachment button (UI ready)

## 🔒 Privacy & Security

- ✅ No data sent to servers
- ✅ No cookies or tracking
- ✅ All data stored locally
- ✅ Messages only visible to you (browser only)
- ✅ Open source code

## 🚀 Future Enhancements

- [ ] Multi-device sync (using Firebase)
- [ ] User authentication
- [ ] Private messaging
- [ ] Message reactions
- [ ] File sharing
- [ ] Voice/video chat
- [ ] User profiles
- [ ] Admin controls
- [ ] Message search
- [ ] Dark/light theme toggle

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients
- **Vanilla JavaScript** - No frameworks
- **localStorage API** - Data persistence
- **FontAwesome** - Icons

## 📱 Browser Support

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome  | ✅ Full | ✅ Full |
| Firefox | ✅ Full | ✅ Full |
| Safari  | ✅ Full | ✅ Full |
| Edge    | ✅ Full | ✅ Full |

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Enter | Send message |
| Shift+Enter | New line |
| Esc | Close modal |

## 🐛 Troubleshooting

### Messages Not Saving
- Check if localStorage is enabled in browser
- Clear browser cache and try again
- Check browser console for errors

### Emoji Not Showing
- Try refreshing the page
- Check if JavaScript is enabled

### Chat Not Loading
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Try different browser

## 📸 Screenshots

### Main Chat View
- Sidebar with channels and online users
- Message area with real-time updates
- Input box with emoji support
- User profile section

### Add Channel Modal
- Simple form to create new channels
- Channel name validation
- Quick channel creation

## 🎓 Learning Resources

- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [JavaScript Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [FontAwesome Icons](https://fontawesome.com/)

## 👤 Author

**adbandal2006-sys**
- GitHub: [@adbandal2006-sys](https://github.com/adbandal2006-sys)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by Discord's UI design
- FontAwesome for beautiful icons
- Community feedback and suggestions

## 💡 Tips

- Use descriptive usernames so others recognize you
- Organize channels by topic for better discussion
- Emojis make conversations more fun! 😊
- Each browser has its own separate chat storage

## 📞 Support

If you encounter any issues:
1. Check the Troubleshooting section
2. Clear browser cache and cookies
3. Try a different browser
4. Check browser console for error messages

---

**Built with ❤️ for everyone who loves chatting!**

A simple, fun, and feature-rich chat experience - No servers, no accounts, just pure chatting! 💬
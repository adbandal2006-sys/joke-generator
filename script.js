// Chat Room Application - Discord Style
// All functionality runs locally with localStorage

class ChatRoom {
    constructor() {
        this.currentUser = null;
        this.currentChannel = 'general';
        this.channels = {
            general: [],
            random: [],
            gaming: [],
            tech: []
        };
        this.onlineUsers = new Set();
        this.emojis = ['😀', '😂', '😍', '🤔', '😎', '🎉', '🚀', '💯', '👍', '❤️', '🔥', '⭐', '🎮', '🎨', '🎭', '🎪', '🎬', '🎤', '🎧', '🎸'];
        
        this.init();
    }

    init() {
        this.loadData();
        this.checkUser();
        this.setupEventListeners();
        this.displayEmojis();
    }

    loadData() {
        const saved = localStorage.getItem('chatRoomData');
        if (saved) {
            const data = JSON.parse(saved);
            this.channels = data.channels || this.channels;
        }
    }

    saveData() {
        localStorage.setItem('chatRoomData', JSON.stringify({
            channels: this.channels
        }));
    }

    checkUser() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = savedUser;
            this.loginUser();
        } else {
            this.showLoginModal();
        }
    }

    setupEventListeners() {
        // Channel switching
        document.querySelectorAll('.channel').forEach(el => {
            el.addEventListener('click', (e) => this.switchChannel(e.target.closest('.channel').dataset.channel));
        });

        // Message sending
        document.getElementById('sendBtn').addEventListener('click', () => this.sendMessage());
        document.getElementById('messageInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // User input with typing indicator
        document.getElementById('messageInput').addEventListener('input', () => {
            this.showTypingIndicator();
        });

        // Add channel
        document.getElementById('addChannelBtn').addEventListener('click', () => {
            this.showChannelModal();
        });

        document.getElementById('createChannelBtn').addEventListener('click', () => {
            this.createChannel();
        });

        document.getElementById('cancelChannelBtn').addEventListener('click', () => {
            this.closeChannelModal();
        });

        document.getElementById('closeChannelModal').addEventListener('click', () => {
            this.closeChannelModal();
        });

        // Login
        document.getElementById('joinBtn').addEventListener('click', () => this.joinChat());
        document.getElementById('usernameInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.joinChat();
        });

        // Emoji picker
        document.querySelector('.btn-emoji').addEventListener('click', () => {
            this.toggleEmojiModal();
        });

        document.getElementById('closeEmojiModal').addEventListener('click', () => {
            this.closeEmojiModal();
        });

        // Logout
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());
    }

    loginUser() {
        const loginModal = document.getElementById('loginModal');
        loginModal.classList.remove('active');
        
        document.getElementById('currentUsername').textContent = this.currentUser;
        this.onlineUsers.add(this.currentUser);
        this.updateUsersList();
        this.loadMessages();
    }

    joinChat() {
        const username = document.getElementById('usernameInput').value.trim();
        
        if (username.length < 3 || username.length > 20) {
            alert('Username must be 3-20 characters');
            return;
        }

        this.currentUser = username;
        localStorage.setItem('currentUser', username);
        this.loginUser();
    }

    showLoginModal() {
        const modal = document.getElementById('loginModal');
        modal.classList.add('active');
        document.getElementById('usernameInput').focus();
    }

    switchChannel(channelName) {
        this.currentChannel = channelName;
        
        // Update active channel highlight
        document.querySelectorAll('.channel').forEach(el => {
            el.classList.remove('active');
            if (el.dataset.channel === channelName) {
                el.classList.add('active');
            }
        });

        // Update header
        document.getElementById('currentChannelName').textContent = channelName;
        document.getElementById('messageInput').placeholder = `Message #${channelName}`;

        // Load messages
        this.loadMessages();
    }

    sendMessage() {
        const input = document.getElementById('messageInput');
        const text = input.value.trim();

        if (!text) return;

        const message = {
            id: Date.now(),
            author: this.currentUser,
            text: text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            avatar: this.getAvatar(this.currentUser)
        };

        this.channels[this.currentChannel].push(message);
        this.saveData();
        this.displayMessage(message);
        
        input.value = '';
        this.hideTypingIndicator();
        this.scrollToBottom();
    }

    displayMessage(message) {
        const messagesArea = document.getElementById('messagesArea');
        
        // Remove welcome message if first message
        const welcome = messagesArea.querySelector('.welcome-message');
        if (welcome) welcome.remove();

        const messageEl = document.createElement('div');
        messageEl.className = 'message';
        messageEl.innerHTML = `
            <div class="message-avatar">${message.avatar}</div>
            <div class="message-content">
                <div class="message-header">
                    <span class="message-author">${this.escapeHtml(message.author)}</span>
                    <span class="message-time">${message.timestamp}</span>
                </div>
                <div class="message-text">${this.escapeHtml(message.text)}</div>
            </div>
        `;

        messagesArea.appendChild(messageEl);
        this.scrollToBottom();
    }

    loadMessages() {
        const messagesArea = document.getElementById('messagesArea');
        messagesArea.innerHTML = '';

        const messages = this.channels[this.currentChannel];

        if (messages.length === 0) {
            messagesArea.innerHTML = `
                <div class="welcome-message">
                    <div class="welcome-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h2>Welcome to #${this.currentChannel}</h2>
                    <p>This is the start of the #${this.currentChannel} channel</p>
                </div>
            `;
        } else {
            messages.forEach(message => this.displayMessage(message));
        }

        this.scrollToBottom();
    }

    showTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        indicator.classList.add('active');
        document.getElementById('typingText').innerHTML = `
            <strong>${this.currentUser}</strong> is typing<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>
        `;
    }

    hideTypingIndicator() {
        document.getElementById('typingIndicator').classList.remove('active');
    }

    updateUsersList() {
        const usersList = document.getElementById('usersList');
        usersList.innerHTML = '';

        this.onlineUsers.forEach(user => {
            const userEl = document.createElement('div');
            userEl.className = 'user-item';
            userEl.innerHTML = `
                <div class="user-status"></div>
                <span>${this.escapeHtml(user)}</span>
            `;
            usersList.appendChild(userEl);
        });

        // Update count
        document.querySelector('.online-count').textContent = this.onlineUsers.size;
    }

    showChannelModal() {
        document.getElementById('channelModal').classList.add('active');
        document.getElementById('channelNameInput').focus();
    }

    closeChannelModal() {
        document.getElementById('channelModal').classList.remove('active');
    }

    createChannel() {
        const name = document.getElementById('channelNameInput').value.trim().toLowerCase().replace(/\s+/g, '-');

        if (!name || name.length < 3) {
            alert('Channel name must be at least 3 characters');
            return;
        }

        if (this.channels[name]) {
            alert('Channel already exists');
            return;
        }

        this.channels[name] = [];
        this.saveData();

        // Add to UI
        const channelsList = document.querySelector('.channels-list');
        const channelEl = document.createElement('div');
        channelEl.className = 'channel';
        channelEl.dataset.channel = name;
        channelEl.innerHTML = `<i class="fas fa-hashtag"></i><span>${name}</span>`;
        channelEl.addEventListener('click', () => this.switchChannel(name));
        channelsList.appendChild(channelEl);

        document.getElementById('channelNameInput').value = '';
        this.closeChannelModal();
    }

    displayEmojis() {
        const grid = document.getElementById('emojiGrid');
        this.emojis.forEach(emoji => {
            const el = document.createElement('div');
            el.className = 'emoji-item';
            el.textContent = emoji;
            el.addEventListener('click', () => {
                const input = document.getElementById('messageInput');
                input.value += emoji;
                input.focus();
                this.closeEmojiModal();
            });
            grid.appendChild(el);
        });
    }

    toggleEmojiModal() {
        const modal = document.getElementById('emojiModal');
        modal.classList.toggle('active');
    }

    closeEmojiModal() {
        document.getElementById('emojiModal').classList.remove('active');
    }

    getAvatar(username) {
        return username.charAt(0).toUpperCase();
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    scrollToBottom() {
        const messagesArea = document.getElementById('messagesArea');
        setTimeout(() => {
            messagesArea.scrollTop = messagesArea.scrollHeight;
        }, 0);
    }

    logout() {
        if (confirm('Are you sure you want to logout?')) {
            this.currentUser = null;
            this.onlineUsers.clear();
            localStorage.removeItem('currentUser');
            this.showLoginModal();
        }
    }
}

// Initialize chat room when page loads
window.addEventListener('DOMContentLoaded', () => {
    new ChatRoom();
});
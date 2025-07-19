📄 README.md
markdown
Copy
Edit
# 🎵 Song Manager App

A modern React + Redux web application for managing songs — add, edit, delete, and browse through a dynamic song list with pagination and toast notifications. Built with Emotion for styling and configured using a custom Webpack setup.

---

## 🚀 Features

- 🎶 Add, edit, and delete songs with form validation
- 🧭 Pagination for song browsing
- 🔄 Redux Toolkit + Redux Saga for state management
- 💅 Styled with Emotion + custom dark/light themes
- 🔔 Toast notifications with `react-toastify`
- 🌀 Loader spinner while fetching songs
- 🧪 Unit-tested with Jest and React Testing Library

---

## 📦 Tech Stack

- **Frontend**: React, Redux Toolkit, Redux Saga  
- **Styling**: Emotion CSS-in-JS  
- **Tooling**: Webpack, Babel, Jest, ESLint  
- **Notifications**: react-toastify  
- **Testing**: Jest + React Testing Library  
- **Bundling**: Custom Webpack configuration  

---

## 🛠️ Setup Instructions

### 1. Clone the repo
```bash
    git clone https://github.com/your-username/song-manager.git
    cd song-manager
### 2. Install dependencies
    bash
    Copy
    Edit
    npm install
### 3. Run the development server
    bash
    Copy
    Edit
    npm start
### 4. Run tests
    bash
    Copy
    Edit
    npm test
    Make sure you have Node.js and npm installed (preferably Node 18+)

---

## ⚙️ Webpack Configuration

### This project uses a custom Webpack setup, not Create React App.

Key Features:
babel-loader for JSX/ES6 support

style-loader and css-loader to import CSS files (e.g. react-toastify)

file-loader for image and asset support

HtmlWebpackPlugin for injecting index.html

webpack-dev-server with hot reloading

source-map support for easier debugging

Entry & Output
js
Copy
Edit
entry: './src/index.jsx',
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
},
🧠 AI Usage
This project does not use AI in its core logic.

However, AI tools such as GitHub Copilot and ChatGPT were used to:

Generate helper functions and form logic

Write initial unit test templates

Refactor Webpack and Jest configurations

Suggest Emotion styling patterns

All code was reviewed and adjusted manually.

📁 Project Structure
arduino
Copy
Edit
song-manager/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddSongForm.jsx
│   │   └── SongList.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── songs/
│   │       ├── songSlice.js
│   │       └── songSaga.js
│   ├── __tests__/
│   └── App.jsx
│   └── index.jsx
├── .babelrc
├── jest.config.js
├── webpack.config.js
└── README.md
🧪 Testing
Tests are written using:

@testing-library/react

@testing-library/jest-dom

babel-jest with JSX support

Redux store provided via <Provider>

Run tests with:

bash
Copy
Edit
npm test
📬 Contact
Made with ❤️ by [Henok]
For inquiries: [henokbirhanu1622@gmail.com]
GitHub: https://github.com/enoch-B


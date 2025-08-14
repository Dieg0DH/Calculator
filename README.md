# Desktop and Web Calculator

A sleek, responsive calculator web application built with vanilla JavaScript, HTML, and CSS, packaged with Electron for Windows desktop use.

## ✨ Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Advanced Features**:
  - Clear all functions
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Keyboard Support**: Full keyboard accessibility with shortcuts
- **Modern UI**: Clean, animated interface with theme support (light/dark)
- **Error Handling**: Graceful handling of edge cases (e.g., division by zero)

## 📸 Preview

<p align="center">
  <img src="Calculator/public/image.png" alt="Calculator App banner showing light and dark themes" />
</p>

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (LTS recommended)
- npm (comes with Node.js)

### Install & Run (Development)

```bash
git clone https://github.com/Dieg0DH/Calculator.git
cd Calculator
npm install
npm start
```

This launches the Electron app. You can also open public/calculator.html directly in a browser for the web version.
Build Desktop App (Production)

```Bash

npm run dist
```

The packaged executables (Windows .exe) will be generated in the dist/ folder.


🖥️ Usage Tips

🎹 Click buttons or use your keyboard for fast input.

- Use the number buttons (0-9) to input numbers
- Use `+`, `-`, `*`, `/` for basic arithmetic
- Press `=` or `Enter` to see the result
- Press `Backspace` to delete the last digit
- Press `AC` or `Escape` to clear all

🏗️ Project Structure

```
Calculator/
├── 📁 public/
│ ├── 📄 calculator.html
│ ├── 🖼️ favicon.ico
│ └── 🖼️ image.png
│
├── 📁 src/
│ ├── 📁 assets/
│ │ └── 📁 styles/
│ │ ├── 📄 reset.css
│ │ ├── 📄 calculator.css
│ │ └── 📄 theme.css
│ │
│ └── 📁 js/
│ ├── 📄 app.js
│ ├── 📄 calculator.js
│ ├── 📄 ui.js
│ ├── 📄 constants.js
│ ├── 📄 theme.js
│ └── 📁 utils/
│
├── 📄 .gitignore
├── 📄 main.js
├── 📄 package.json
└── 📄 README.md
```

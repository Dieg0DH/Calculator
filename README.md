# Desktop and Web Calculator

A sleek, responsive calculator web application built with vanilla JavaScript, HTML, and CSS, packaged with Electron for Windows desktop use.

## ✨ Features

- Basic operations: addition, subtraction, multiplication, division
- Features:
  - Clear all (AC)
  - Responsive design: works great on desktop and mobile
  - Full keyboard support
  - Modern UI: clean, animated interface
  - Error handling for edge cases (e.g., division by zero)
  - Theme support (light/dark)

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

This launches the Electron app. You can also open public/calculator.html directly in a browser for the web version.
Build Desktop App (Production)

Bash

npm run dist

The packaged executables (Windows .exe) will be generated in the dist/ folder.

🎹 Keyboard Shortcuts
Key(s)	Action
0–9	Input number
+, -, *, /	Operators
= or Enter	Equals
.	Decimal point
Escape	Clear (C)
A (or AC btn)	Clear all (AC)
s	Toggle sign (+/–)

🖥️ Usage Tips

    Click buttons or use your keyboard for fast input.


🏗️ Project Structure

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

🧪 Tech Stack

    Electron (desktop packaging)
    Vanilla JavaScript, HTML, CSS


🙏 Acknowledgments

    Built with <a href="https://www.electronjs.org/">Electron</a>
    Inspired by modern calculator UIs
```

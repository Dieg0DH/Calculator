# Modern Web Calculator

A sleek, responsive calculator web application built with vanilla JavaScript, HTML, and CSS, packaged with Electron for cross-platform desktop use.

## ✨ Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Advanced Features**:
  - Percentage calculations
  - Toggle between positive/negative numbers
  - Clear entry and clear all functions
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Keyboard Support**: Full keyboard accessibility
- **Modern UI**: Clean interface with smooth animations
- **Error Handling**: Graceful handling of edge cases (e.g., division by zero)

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Dieg0DH/Calculator.git
   cd Calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

### Building for Production

To create a distributable package:

```bash
npm run dist
```

## 🖥️ Usage

### Basic Operations

- Use the number buttons (0-9) to input numbers
- Use `+`, `-`, `*`, `/` for basic arithmetic
- Press `=` to see the result
- Press `C` to clear the current entry
- Press `AC` to clear all

### Keyboard Shortcuts

- Numbers: `0-9`
- Operators: `+`, `-`, `*`, `/`
- Equals: `=` or `Enter`
- Clear: `Escape`
- Decimal: `.`
- Toggle sign: `s`
- Percentage: `%`

## 🏗️ Project Structure

```
Calculator/
├── public/
│   ├── calculator.html
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── reset.css
│   │       ├── calculator.css
│   │       └── theme.css
│   │
│   └── js/
│       ├── app.js
│       ├── calculator.js
│       ├── ui.js
│       ├── constants.js
│       ├── theme.js
│       └── utils/
│           └── utils.js
│
├── main.js
├── package.json
└── README.md
```

## 🙏 Acknowledgments

- Built with [Electron](https://www.electronjs.org/)
- Inspired by modern calculator UIs

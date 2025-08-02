import { OPERATIONS } from "./constants.js";

export class CalculatorUI {
  constructor(calculator) {
    this.calculator = calculator;
    this.setupEventListeners();
    this.setupKeyboard();
  }

  setupEventListeners() {
    document.querySelectorAll("[data-number]").forEach((button) => {
      button.addEventListener("click", () => {
        this.calculator.appendNumber(button.innerText);
      });
    });

    document.querySelectorAll("[data-operation]").forEach((button) => {
      button.addEventListener("click", () => {
        this.calculator.setOperation(button.dataset.operation);
      });
    });

    document.querySelector("[data-equals]").addEventListener("click", () => {
      this.calculator.compute();
    });

    document.querySelector("[data-clear]").addEventListener("click", () => {
      this.calculator.clear();
    });

    document.querySelector("[data-delete]").addEventListener("click", () => {
      this.calculator.delete();
    });

    document.querySelector("[data-decimal]").addEventListener("click", () => {
      this.calculator.appendNumber(".");
    });
  }

  setupKeyboard() {
    document.addEventListener("keydown", (e) => {
      let button = null;

      if (e.key >= "0" && e.key <= "9") {
        button = Array.from(document.querySelectorAll("[data-number]")).find(
          (btn) => btn.innerText === e.key
        );
        this.calculator.appendNumber(e.key);
      } else {
        switch (e.key) {
          case ".":
            button = document.querySelector("[data-decimal]");
            this.calculator.appendNumber(".");
            break;
          case "+":
            button = document.querySelector('[data-operation="+"]');
            this.calculator.setOperation(OPERATIONS.ADD);
            break;
          case "-":
            button = document.querySelector('[data-operation="-"]');
            this.calculator.setOperation(OPERATIONS.SUBTRACT);
            break;
          case "*":
            button = document.querySelector('[data-operation="×"]');
            this.calculator.setOperation(OPERATIONS.MULTIPLY);
            break;
          case "/":
            e.preventDefault();
            button = document.querySelector('[data-operation="÷"]');
            this.calculator.setOperation(OPERATIONS.DIVIDE);
            break;
          case "Enter":
          case "=":
            e.preventDefault();
            button = document.querySelector("[data-equals]");
            this.calculator.compute();
            break;
          case "Backspace":
            button = document.querySelector("[data-delete]");
            this.calculator.delete();
            break;
          case "Escape":
            button = document.querySelector("[data-clear]");
            this.calculator.clear();
            break;
        }
      }

      // Active class
      if (button) {
        button.classList.add("active-by-keyboard");
      }
    });

    document.addEventListener("keyup", (e) => {
      let button = null;

      if (e.key >= "0" && e.key <= "9") {
        button = Array.from(document.querySelectorAll("[data-number]")).find(
          (btn) => btn.innerText === e.key
        );
      } else {
        switch (e.key) {
          case ".":
            button = document.querySelector("[data-decimal]");
            break;
          case "+":
            button = document.querySelector('[data-operation="+"]');
            break;
          case "-":
            button = document.querySelector('[data-operation="-"]');
            break;
          case "*":
            button = document.querySelector('[data-operation="×"]');
            break;
          case "/":
            button = document.querySelector('[data-operation="÷"]');
            break;
          case "Enter":
          case "=":
            button = document.querySelector("[data-equals]");
            break;
          case "Backspace":
            button = document.querySelector("[data-delete]");
            break;
          case "Escape":
            button = document.querySelector("[data-clear]");
            break;
        }
      }

      if (button) {
        button.classList.remove("active-by-keyboard");
      }
    });
  }
}

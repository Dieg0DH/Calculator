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
      if (e.key >= "0" && e.key <= "9") {
        this.calculator.appendNumber(e.key);
        return;
      }

      switch (e.key) {
        case ".":
          this.calculator.appendNumber(".");
          break;
        case "+":
          this.calculator.setOperation(OPERATIONS.ADD);
          break;
        case "-":
          this.calculator.setOperation(OPERATIONS.SUBTRACT);
          break;
        case "*":
          this.calculator.setOperation(OPERATIONS.MULTIPLY);
          break;
        case "/":
          e.preventDefault();
          this.calculator.setOperation(OPERATIONS.DIVIDE);
          break;
        case "Enter":
        case "=":
          e.preventDefault();
          this.calculator.compute();
          break;
        case "Backspace":
          this.calculator.delete();
          break;
        case "Escape":
          this.calculator.clear();
          break;
      }
    });
  }
}

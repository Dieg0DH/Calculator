import { Calculator } from "./calculator.js";
import { CalculatorUI } from "./ui.js";
import { ThemeManager } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  const themeManager = new ThemeManager();

  const previousOperandElement = document.querySelector(
    "[data-previous-operand]"
  );
  const currentOperandElement = document.querySelector(
    "[data-current-operand]"
  );

  const calculator = new Calculator(
    previousOperandElement,
    currentOperandElement
  );
  const ui = new CalculatorUI(calculator);

  calculator.updateDisplay();

  window.themeManager = themeManager;
});

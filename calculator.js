import { OPERATIONS, ERROR_MESSAGES } from "./constants.js";

export class Calculator {
  constructor(previousElement, currentElement) {
    this.previousElement = previousElement;
    this.currentElement = currentElement;
    this.clear();
    this.justComputed = false;
  }

  clear() {
    this.currentOperand = "0";
    this.previousOperand = "";
    this.operation = undefined;
    this.hasDecimal = false;
    this.justComputed = false;
    this.updateDisplay();
  }

  delete() {
    if (this.currentOperand === "0" || this.currentOperand.length === 1) {
      this.currentOperand = "0";
      this.hasDecimal = false;
    } else if (this.currentOperand.slice(-1) === ".") {
      this.hasDecimal = false;
      this.currentOperand = this.currentOperand.slice(0, -1);
    } else {
      this.currentOperand = this.currentOperand.slice(0, -1);
    }
    this.updateDisplay();
  }

  appendNumber(number) {
    if (this.justComputed) {
      this.currentOperand = number.toString();
      this.justComputed = false;
      this.updateDisplay();
      return;
    }

    if (number === "." && this.currentOperand.includes(".")) return;

    if (this.currentOperand === "0" && number !== ".") {
      this.currentOperand = number.toString();
    } else {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    this.updateDisplay();
  }

  setOperation(operation) {
    if (this.currentOperand === "") return;

    if (this.previousOperand !== "") {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "0";
    this.updateDisplay();
  }

  compute() {
    if (!this.operation || this.currentOperand === "") return;

    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    try {
      switch (this.operation) {
        case OPERATIONS.ADD:
          computation = prev + current;
          break;
        case OPERATIONS.SUBTRACT:
          computation = prev - current;
          break;
        case OPERATIONS.MULTIPLY:
          computation = prev * current;
          break;
        case OPERATIONS.DIVIDE:
          if (current === 0) {
            throw new Error(ERROR_MESSAGES.DIVISION_BY_ZERO);
          }
          computation = prev / current;
          break;
        default:
          return;
      }

      computation = parseFloat(computation.toFixed(10));
      this.currentOperand = computation.toString();
      this.operation = undefined;
      this.previousOperand = "";
      this.justComputed = true;
    } catch (error) {
      this.currentOperand = error.message;
      this.operation = undefined;
      this.previousOperand = "";
      this.justComputed = true;
    }

    this.updateDisplay();
  }

  getDisplayNumber(number) {
    if (
      typeof number === "string" &&
      (number === ERROR_MESSAGES.DIVISION_BY_ZERO ||
        number === ERROR_MESSAGES.INVALID_INPUT)
    ) {
      return number;
    }

    if (!number) return "0";

    const [integerPart, decimalPart] = number.toString().split(".");
    let display = "";

    if (integerPart) {
      const parsedInt = parseFloat(integerPart);
      if (!isNaN(parsedInt)) {
        display = parsedInt.toLocaleString("en");
      }
    }

    if (decimalPart != null) {
      return `${display || "0"}.${decimalPart}`;
    }

    return display || "0";
  }

  updateDisplay() {
    if (this.currentElement) {
      this.currentElement.innerText = this.getDisplayNumber(
        this.currentOperand
      );
    }

    if (this.currentOperand === ERROR_MESSAGES.DIVISION_BY_ZERO) {
      this.currentElement.classList.add("current-operand-error-message");
    } else {
      this.currentElement.classList.remove("current-operand-error-message");
    }

    if (this.previousElement) {
      if (this.operation != null) {
        this.previousElement.innerText = `${this.getDisplayNumber(
          this.previousOperand
        )} ${this.operation}`;
      } else {
        this.previousElement.innerText = "";
      }
    }
  }
}

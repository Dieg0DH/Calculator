import { OPERATIONS, ERROR_MESSAGES } from "./constants.js";
import { formatNumber } from "./utils/utils.js";

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
    this.justComputed = false;
    this.updateDisplay();
  }

  delete() {
    if (this.currentOperand.length <= 1) {
      this.currentOperand = "0";
    } else {
      this.currentOperand = this.currentOperand.slice(0, -1);
    }
    this.updateDisplay();
  }

  appendNumber(number) {
    number = number.toString();

    const digitCount = this.currentOperand.replace(/[^0-9]/g, "").length;
    if (digitCount >= 13 && number !== ".") return;

    if (this.justComputed) {
      this.currentOperand = number;
      this.justComputed = false;
    } else {
      if (number === "." && this.currentOperand.includes(".")) return;

      if (this.currentOperand === "0" && number !== ".") {
        this.currentOperand = number;
      } else {
        this.currentOperand += number;
      }
    }

    this.updateDisplay();
  }

  setOperation(operation) {
    if (
      this.currentOperand === "" ||
      this.currentOperand === ERROR_MESSAGES.DIVISION_BY_ZERO
    ) {
      if (this.previousOperand !== "") {
        this.operation = operation;
        this.updateDisplay();
      }
      return;
    }

    if (
      this.previousOperand !== "" &&
      this.currentOperand !== "" &&
      this.operation
    ) {
      this.compute();

      if (
        this.currentOperand !== "" &&
        this.currentOperand !== ERROR_MESSAGES.DIVISION_BY_ZERO
      ) {
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
      }
    } else if (this.previousOperand === "" || this.currentOperand !== "") {
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
    }

    this.operation = operation;
    this.updateDisplay();
  }

  compute() {
    if (!this.operation || this.currentOperand === "") return;

    const fullOperation = `${this.getDisplayNumber(this.previousOperand)} ${
      this.operation
    } ${this.getDisplayNumber(this.currentOperand)}`;

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
      this.previousOperand = fullOperation;
      this.operation = "=";
      this.justComputed = true;
    } catch (error) {
      this.currentOperand = error.message;
      this.operation = undefined;
      this.previousOperand = fullOperation;
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

    return formatNumber(number);
  }

  updateDisplay() {
    if (this.currentElement) {
      const displayText = this.getDisplayNumber(this.currentOperand);
      this.currentElement.innerText = displayText;

      const sizeClasses = [
        { threshold: 15, className: "very-small-text" },
        { threshold: 10, className: "small-text" },
      ];

      this.currentElement.classList.remove(
        ...sizeClasses.map((s) => s.className)
      );

      const digitCount = displayText.replace(/[^0-9]/g, "").length;
      const sizeClass = sizeClasses.find((s) => digitCount > s.threshold);
      if (sizeClass) {
        this.currentElement.classList.add(sizeClass.className);
      }

      this.currentElement.classList.toggle(
        "current-operand-error-message",
        this.currentOperand === ERROR_MESSAGES.DIVISION_BY_ZERO
      );
    }

    if (this.previousElement) {
      if (this.operation === "=") {
        this.previousElement.innerText = `${this.previousOperand} =`;
      } else if (this.operation != null) {
        this.previousElement.innerText = `${this.getDisplayNumber(
          this.previousOperand
        )} ${this.operation}`;
      } else {
        this.previousElement.innerText = "";
      }
    }
  }
}

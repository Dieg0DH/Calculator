class Calculator {
  constructor(previousElement, currentElement) {
    this.previousElement = previousElement;
    this.currentElement = currentElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "0";
    this.previousOperand = "";
    this.operation = undefined;
    this.hasDecimal = false;
  }

  delete() {
    if (this.currentOperand === "0" || this.currentOperand === 1) {
      this.currentOperand = "0";
      this.hasDecimal = false;
      return;
    }

    if (this.currentOperand.slice(-1) === ".") {
      this.hasDecimal = false;
    }

    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  appendNumber(number) {
    if (number === "0" && this.currentOperand === "0") return;

    if (this.currentOperand === "0" && number !== ".") {
      this.currentOperand = number;
      return;
    }
  }
}

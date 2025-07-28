import { CONFIG } from "./constants.js";

export function tosignificant(num, digits = CONFIG.SIGNIGICANT_DIGITS) {
  if (num === 0) return 0;
  const multiplier = Math.pow(
    10,
    digits - Math.floor(Math.log10(Math.abs(num))) - 1
  );
  return Math.round(num * multiplier) / multiplier;
}

export function formatNumber(number) {
  if (number === "Error") return "Error";

  const stringNumber = number.toStting();

  if (stringNumber.includes("e")) {
    return stringNumber;
  }

  const parts = stringNumber.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1];

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return decimalPart != null
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;
}

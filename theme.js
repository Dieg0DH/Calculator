export class ThemeManager {
  constructor() {
    this.themeToggle = document.querySelector(".theme-toggle");
    this.htmlElement = document.documentElement;
    this.theme = localStorage.getItem("calculator-theme") || "dark";

    this.init();
  }

  init() {
    this.setTheme(this.theme);

    this.themeToggle?.addEventListener("click", () => this.toggleTheme());

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (localStorage.getItem("calculator-theme") === null) {
          this.setTheme(e.matches ? "dark" : "light");
        }
      });
  }

  setTheme(theme) {
    this.theme = theme;
    this.htmlElement.setAttribute("data-theme", theme);

    if (theme === "dark") {
      localStorage.setItem("calculator-theme", "dark");
    } else {
      localStorage.setItem("calculator-theme", "light");
    }

    this.updateButtonIcon();
  }

  toggleTheme() {
    this.setTheme(this.theme === "dark" ? "light" : "dark");
  }

  updateButtonIcon() {
    const moonIcon = this.themeToggle?.querySelector(".fa-moon");
    const sunIcon = this.themeToggle?.querySelector(".fa-sun");

    if (!moonIcon || !sunIcon) return;

    if (this.theme === "dark") {
      moonIcon.style.display = "block";
      sunIcon.style.display = "none";
    } else {
      moonIcon.style.display = "none";
      sunIcon.style.display = "block";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const themeManager = new ThemeManager();

  window.themeManager = themeManager;
});

(function () {
  const storageKey = "toolbox-theme";
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function getPreferredTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") return saved;
    return media.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const isDark = theme === "dark";
      button.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
      button.setAttribute("aria-pressed", String(isDark));
    });
  }

  function setTheme(theme) {
    localStorage.setItem(storageKey, theme);
    applyTheme(theme);
  }

  applyTheme(getPreferredTheme());

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(getPreferredTheme());

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
      });
    });
  });

  media.addEventListener("change", (event) => {
    if (localStorage.getItem(storageKey)) return;
    applyTheme(event.matches ? "dark" : "light");
  });
})();

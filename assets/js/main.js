/* OzzyDev — theme toggle, mobile nav, tiny niceties */
(function () {
  "use strict";

  // ---- Theme (persisted, respects system preference on first visit) ----
  var root = document.documentElement;
  var stored = localStorage.getItem("ozzy-theme");
  var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  var theme = stored || (prefersLight ? "light" : "dark");
  root.setAttribute("data-theme", theme);

  function setToggleIcon() {
    var btn = document.querySelector(".theme-toggle");
    if (btn) btn.textContent = root.getAttribute("data-theme") === "light" ? "🌙" : "☀️";
  }

  document.addEventListener("DOMContentLoaded", function () {
    setToggleIcon();

    var toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        root.setAttribute("data-theme", next);
        localStorage.setItem("ozzy-theme", next);
        setToggleIcon();
      });
    }

    // ---- Mobile nav ----
    var navToggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav-links");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");
      });
    }

    // ---- Mark current nav link active ----
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
    });

    // ---- Fake form handlers (static demo) ----
    document.querySelectorAll("form[data-demo]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var note = form.querySelector("[data-msg]");
        if (note) {
          note.textContent = "✅ Thanks! This is a static demo — no data was actually sent.";
          note.style.color = "var(--accent)";
        }
        form.reset();
      });
    });

    // ---- Stamp current year in footer ----
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();

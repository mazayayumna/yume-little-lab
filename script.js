// Tiny interactions for little things lab.
// This file is loaded with "defer", so the HTML is ready before it runs.

const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");
const themeIcon = document.querySelector(".theme-icon");
const messageButton = document.querySelector("#message-button");
const messageOutput = document.querySelector("#message-output");
const clock = document.querySelector("#clock");
const year = document.querySelector("#year");
//test
// A list is an easy way to store a few possible messages.
const tinyReminders = [
  "you don't have to know everything to begin.",
  "small progress is still progress. 🌱",
  "make it work, then make it lovely.",
  "curiosity counts as a very good reason.",
  "it's okay to learn one tiny thing today. ♡",
  "your first draft is allowed to be a little messy.",
  "you might get overwhelmed, but you will learn from them"
];

// Pick one reminder at random whenever the button is clicked.
messageButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * tinyReminders.length);
  messageOutput.textContent = tinyReminders[randomIndex];
});

// Switch between the default cream palette and the dark palette.
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");

  // Update the accessible state and the button's visible label.
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeLabel.textContent = isDark ? "day mode" : "night mode";
  themeIcon.textContent = isDark ? "☀" : "☾";
});

// Show the visitor's local time. This runs on their device, not a server.
function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

updateClock();
setInterval(updateClock, 60_000);

// Keep the footer year up to date automatically.
year.textContent = new Date().getFullYear();

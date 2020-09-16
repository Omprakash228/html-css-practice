const theme = localStorage.getItem("IsDarkTheme");
const toggle = document.getElementById("theme-switch");

toggle.checked = Boolean(Number(theme)) || window.matchMedia('(prefers-color-scheme: dark)').matches;
switchTheme();

function switchTheme() {
  const bodyElement = document.getElementsByTagName("body")[0];
  
  if (!toggle.checked) {
    bodyElement.removeAttribute("data-theme");
    localStorage.setItem("IsDarkTheme", 0);
  } else {
    bodyElement.setAttribute("data-theme", "dark");
    localStorage.setItem("IsDarkTheme", 1);
  }
}

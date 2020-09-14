function switchTheme() {
  const bodyElement = document.getElementsByTagName("body")[0];
  const toggle = document.getElementById("theme-switch");
  if (!toggle.checked) {
    bodyElement.removeAttribute("data-theme");
  } else {
    bodyElement.setAttribute("data-theme", "dark");
  }
}

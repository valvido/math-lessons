const cssModule = await import("./style.css", {
  assert: { type: "css" },
});
document.adoptedStyleSheets = [cssModule.default];

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navbar__menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

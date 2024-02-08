const toggleThemeBtn = document.querySelector(".header__theme-button");

document.onload = setInitialTheme(localStorage.getItem("theme"));
function setInitialTheme(themeKey) {
  if (themeKey === "light") {
    document.documentElement.classList.add("lightTheme");
  } else {
    document.documentElement.classList.remove("lightTheme");
  }
}
toggleThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("lightTheme");
  if (document.documentElement.classList.contains("lightTheme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

const navbar = document.querySelector(".navbar");
function scrollEvent() {
  document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 0) {
      navbar.classList.add("navbar-transparent");
    } else {
      navbar.classList.remove("navbar-transparent");
    }
  });
}

document.addEventListener("scroll", scrollEvent);

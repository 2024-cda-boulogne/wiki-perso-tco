const navbar = document.getElementById("navbar");

function navBarState() {
  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
}

function setDarkMode() {
  document.querySelector("body").classList.add("dark");
  document.getElementById("theme-icon").src = "/icons/sun.svg";

  if (localStorage.getItem("theme") === "dark") {
    document.querySelector("body").classList.remove("dark");
    document.getElementById("theme-icon").src = "/icons/moon.svg";
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

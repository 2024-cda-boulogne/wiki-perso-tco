const navbar = document.getElementById("navbar");

function navBarState() {
  if (navbar.style.width === "0px" || navbar.style.width === "") {
    navbar.style.width = "250px"; // Ouvre la barre de navigation
  } else {
    navbar.style.width = "0"; // Ferme la barre de navigation
  }
}

function setDarkMode() {
  document.querySelector("body").classList.add("dark");

  if (localStorage.getItem("theme") === "dark") {
    document.querySelector("body").classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

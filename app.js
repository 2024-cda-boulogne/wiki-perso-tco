const navbar = document.getElementById("navbar");

function navBarState() {
  if (navbar.style.width === "0px" || navbar.style.width === "") {
    navbar.style.width = "250px"; // Ouvre la barre de navigation
  } else {
    navbar.style.width = "0"; // Ferme la barre de navigation
  }
}

function setDarkMode() {
  const body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

document
  .getElementById("navbar-closing")
  .addEventListener("click", function (e) {
    if (e.target !== navbar && navbar.style.width === "250px")
      navbar.style.width = "0";
  });

function openPopUp() {
  if (navbar.style.width === "250px") navbar.style.width = "0";
  document.getElementById("about-popup").classList.add("active");
}
function closePopUp() {
  // if (navbar.style.width === "250px") navbar.style.width = "0";
  document.getElementById("about-popup").classList.remove("active");
}

// Vérifie si le thème est stocké en local et applique-le au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
  }
});

const toggleButton = document.getElementsByClassName("toggle-button")[0]; // this returns an array so we just want to get the first element in that array, hence the [0]
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  nabvBarLinks.classList.toggle("active");
});

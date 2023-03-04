const toggleButton = document.querySelector(".toggle-button"); // this returns an array so we just want to get the first element in that array, hence the [0]
const navBarLinks = document.querySelector(".navbar-links");

console.log(toggleButton);
console.log(navBarLinks);

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

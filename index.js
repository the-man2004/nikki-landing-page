const nav = document.querySelector("nav");
const btnLinks = document.querySelectorAll(".btn-link");

nav.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("btn-link")) {
    btnLinks.forEach((link) => link.classList.remove("active"));

    target.classList.add("active");
  }
});

const btnNavEl = document.querySelector(".intro-mobile-button");
const headerEl = document.querySelector(".intro-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("mobile-nav-open");
});

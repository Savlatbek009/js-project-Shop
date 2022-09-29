window.addEventListener("DOMContentLoaded", function () {
  const loader = this.document.querySelector(".boxOfLoader");
  const main = this.document.querySelector(".mainOfSite");
  setTimeout(() => {
    loader.style.display = "none";
    main.classList.add("d-block");
    main.classList.remove("d-none");
  }, 1000);
});

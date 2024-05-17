document.addEventListener("DOMContentLoaded", function () {
  const projectImages = document.querySelector(".project-images");
  const indicators = document.querySelectorAll(".indicator");
  let currentIndex = 0;

  function showProject(index) {
    projectImages.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator) => indicator.classList.remove("active"));
    indicators[index].classList.add("active");
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      showProject(index);
    });
  });

  function nextProject() {
    currentIndex = (currentIndex + 1) % indicators.length;
    showProject(currentIndex);
  }

  setInterval(nextProject, 5000);
});

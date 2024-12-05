export const initObserver = () => {
  const heroImage = document.querySelector(".hero-image img");
  const projectsSection = document.querySelector("#projects");
  const heroContainer = document.querySelector(".hero-container");

  if (!heroImage || !projectsSection || !heroContainer) {
      console.error("Uno o más elementos no se encontraron en el DOM.");
      return;
  }

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  heroContainer.classList.remove("blur");
                  const ratio = entry.intersectionRatio;
                  const blurAmount = Math.min(4, Math.pow((1 - ratio), 2) * 4);

                  heroImage.style.filter = `blur(${blurAmount}px)`;
              } else {
                  heroContainer.classList.add("blur");
                  heroImage.style.filter = "blur(0)";
              }
          });
      },
      {
          threshold: 0.1,
      }
  );

  observer.observe(projectsSection);
};

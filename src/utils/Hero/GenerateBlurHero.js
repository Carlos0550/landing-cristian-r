const heroImage = document.querySelector(".hero-image img");
const projectsSection = document.querySelector("#projects");
const heroCointainer = document.querySelector(".hero-container");

export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        heroCointainer.classList.remove("blur")
        const ratio = entry.intersectionRatio;
        const blurAmount = Math.min(10, Math.pow((1 - ratio), 2) * 10);
        
        if (heroImage) {
          heroImage.style.filter = `blur(${blurAmount}px)`;
        }
      } else {
        heroCointainer.classList.add("blur")
        if (heroImage) {
          heroImage.style.filter = "blur(0)";
          
        }
      }
    });
  },
  {
    threshold: 0.1
  }
);

if (projectsSection) {
  observer.observe(projectsSection);
} else {
  console.warn('Elemento con ID "projects" no encontrado');
}

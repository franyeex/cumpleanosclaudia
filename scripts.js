document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll para enlaces del índice
  document.querySelectorAll(".sidebar a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Aparecer la sección cuando esté visible
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => observer.observe(section));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
      });
  });
});

// JavaScript for active section highlighting
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar ul li a");

  let currentSectionId = "";

  // Determine which section is in the viewport
  sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSectionId = section.getAttribute("id");
      }
  });

  // Remove active class from all links, then add to the current section's link
  navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSectionId)) {
          link.classList.add("active");
      }
  });
});

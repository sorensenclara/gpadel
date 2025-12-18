// ===============================
// MENU HAMBURGUESA (MOBILE)
// ===============================
(function () {
  const toggle = document.getElementById("gpMenuToggle");
  const mobileNav = document.getElementById("gpMobileNav");

  if (!toggle || !mobileNav) return;

  toggle.addEventListener("click", function () {
    const isOpen = mobileNav.classList.toggle("gp-nav-mobile--open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.classList.toggle("is-open", isOpen);
  });
})();

// ===============================
// CARROUSEL DE TESTIMONIOS
// ===============================
(function () {
  const testimonials = [
    {
      text: "“Súper práctico para organizar partidos y no perder el score.”",
      name: "Juan Pérez",
      cat: "Categoría 8va",
      stars: 5
    },
    {
      text: "“Reservé turno en minutos. Muy clara la experiencia.”",
      name: "María Gómez",
      cat: "Categoría 6ta",
      stars: 5
    },
    {
      text: "“Me encantó poder guardar estadísticas del partido.”",
      name: "Lucas Fernández",
      cat: "Categoría 4ta",
      stars: 4
    }
  ];

  const textEl = document.getElementById("gpTestText");
  const nameEl = document.getElementById("gpTestName");
  const catEl = document.getElementById("gpTestCat");
  const starsEl = document.getElementById("gpTestStars");
  const prevBtn = document.getElementById("gpTestPrev");
  const nextBtn = document.getElementById("gpTestNext");

  if (!textEl || !nameEl || !catEl || !starsEl || !prevBtn || !nextBtn) return;

  let current = 0;

  function renderTestimonial() {
    const t = testimonials[current];
    textEl.textContent = t.text;
    nameEl.textContent = t.name;
    catEl.textContent = t.cat;
    starsEl.textContent = "★★★★★".slice(0, t.stars);
  }

  prevBtn.addEventListener("click", function () {
    current = (current - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
  });

  nextBtn.addEventListener("click", function () {
    current = (current + 1) % testimonials.length;
    renderTestimonial();
  });

  renderTestimonial(); // inicial
})();

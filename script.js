// ===== ANIMACIÓN NEÓN SOLO EN SCROLL =====
const elementos = document.querySelectorAll('.neon-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('activo');
    }
  });
}, {
  threshold: 0.25
});

elementos.forEach(el => observer.observe(el));

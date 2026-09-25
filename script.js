// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Nav intensifies after scrolling
const nav = document.getElementById('nav');
const onScrollNav = () => nav.classList.toggle('scrolled', window.scrollY > 12);
window.addEventListener('scroll', onScrollNav, { passive: true });
onScrollNav();

// Reveal sections as they enter the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Gentle parallax on the hero stage
const stage = document.querySelector('.hero-stage');
let ticking = false;
window.addEventListener(
  'scroll',
  () => {
    if (!stage || ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        stage.style.transform = `translateY(${y * 0.12}px)`;
      }
      ticking = false;
    });
  },
  { passive: true }
);

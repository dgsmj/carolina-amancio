const revealTargets = document.querySelectorAll(
  ".hero__text, .hero__photo, .card, .timeline__step, .info-strip, .sobre__inner > *, .faq__item, .cta__inner"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);

revealTargets.forEach((el) => observer.observe(el));

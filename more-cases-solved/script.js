const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        if (e.target.classList.contains('chart-card')) {
          e.target.querySelectorAll('.bar').forEach((bar) => {
            bar.style.height = bar.dataset.h + '%';
          });
        }
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 0.1 + 's';
    obs.observe(el);
  });
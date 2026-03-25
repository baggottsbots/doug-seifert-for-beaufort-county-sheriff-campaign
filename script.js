// Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Forms
  function handleSignup(btn) {
    btn.textContent = '✓ You\'re In!';
    btn.style.background = 'var(--gold)';
    btn.style.color = 'var(--navy)';
    btn.style.borderColor = 'var(--gold)';
  }
  function handleVolunteer(btn) {
    btn.textContent = '✓ Request Received!';
    btn.style.background = 'var(--gold)';
    btn.style.color = 'var(--navy)';
    btn.style.borderColor = 'var(--gold)';
  }
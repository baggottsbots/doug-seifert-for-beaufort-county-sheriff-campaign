// Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));// Form handlers
function handleSignup(btn) {
btn.textContent = ‘\u2713 You\u2019re In!’;
btn.style.background = ‘var(–gold)’;
btn.style.color = ‘var(–navy)’;
btn.style.borderColor = ‘var(–gold)’;
btn.disabled = true;
}
function handleVolunteer(btn) {
btn.textContent = ‘\u2713 Request Received!’;
btn.style.background = ‘var(–gold)’;
btn.style.color = ‘var(–navy)’;
btn.style.borderColor = ‘var(–gold)’;
btn.disabled = true;
}
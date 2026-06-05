// ===== COUNTDOWN BANNER =====
    // Purpose: Replace the date label with a live countdown to June 9, 2026.
    function updateCountdown() {
      const target = new Date('2026-06-09T00:00:00').getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      document.getElementById('countdown-text').textContent = days + ' Days to June 9';
    }
    updateCountdown();
    setInterval(updateCountdown, 60000);

    // ===== MOBILE MENU TOGGLE =====
    // Purpose: Open and close the mobile navigation drawer.
    const toggleBtn = document.querySelector('.nav-menu-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    toggleBtn.addEventListener('click', function () {
      const isOpen = !drawer.classList.contains('hidden');
      drawer.classList.toggle('hidden');
      toggleBtn.setAttribute('aria-expanded', String(!isOpen));
      toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-bars"></i>' : '<i class="fa-solid fa-xmark"></i>';
    });
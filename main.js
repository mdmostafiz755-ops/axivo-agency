/* ─── MAIN.JS — VORTEX STUDIO ─── */

document.addEventListener('DOMContentLoaded', () => {

  // ─── PAGE LOADER ───
  const loader = document.getElementById('pageLoader');
  if (loader) {
    setTimeout(() => { loader.classList.add('done'); }, 1400);
  }

  // ─── CUSTOM CURSOR ───
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (cursor && follower) {
    let mx = 0, my = 0, fx = 0, fy = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });
    const followCursor = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
      requestAnimationFrame(followCursor);
    };
    followCursor();
    document.querySelectorAll('a, button, .project-card, .service-card, .pricing-card').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // ─── NAV SCROLL ───
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('nav-scrolled', window.scrollY > 50);
    });
  }

  // ─── MOBILE MENU ───
  const toggle = document.getElementById('menuToggle');
  const close = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('mobileMenu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('open');
    });
    close?.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ─── SCROLL REVEAL ───
  const reveals = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = parseFloat(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('visible'), delay * 1000);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  reveals.forEach(el => observer.observe(el));

  // ─── COUNTER ANIMATION ───
  const counters = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = el.textContent;
        const num = parseFloat(target.replace(/[^0-9.]/g, ''));
        const suffix = target.replace(/[0-9.]/g, '');
        let start = 0;
        const dur = 1800;
        const step = 16;
        const inc = num / (dur / step);
        const timer = setInterval(() => {
          start += inc;
          if (start >= num) { start = num; clearInterval(timer); }
          el.textContent = (Number.isInteger(num) ? Math.floor(start) : start.toFixed(1)) + suffix;
        }, step);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  // ─── ACTIVE NAV LINK ───
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ─── PAGE TRANSITION ───
  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http')) return;
      // Let it navigate normally (same tab)
    });
  });

  // ─── STAGGER SCROLL REVEAL ───
  document.querySelectorAll('[data-delay]').forEach(el => {
    el.style.transitionDelay = el.dataset.delay + 's';
  });

  console.log('🔴 VORTEX Studio loaded');
});

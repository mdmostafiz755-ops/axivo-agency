/**
 * ============================================================
 *  VORTEX STUDIO — MAIN.JS
 *  All site functionality + dynamic rendering from config.js
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  const C = window.SITE_CONFIG;

  // ─── PAGE LOADER ───────────────────────────────────────
  const loader = document.getElementById('pageLoader');
  if (loader) {
    renderLoaderLogo();
    setTimeout(() => loader.classList.add('done'), 1500);
  }

  // ─── RENDER LOGO EVERYWHERE ────────────────────────────
  renderAllLogos();

  // ─── CUSTOM CURSOR ─────────────────────────────────────
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (cursor && follower) {
    let mx = 0, my = 0, fx = 0, fy = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });
    const followCursor = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.left = fx + 'px';
      follower.style.top  = fy + 'px';
      requestAnimationFrame(followCursor);
    };
    followCursor();
    document.querySelectorAll('a, button, .project-card, .service-card, .pricing-card').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // ─── NAV SCROLL ────────────────────────────────────────
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('nav-scrolled', window.scrollY > 50);
    });
  }

  // ─── MOBILE MENU ───────────────────────────────────────
  const toggle     = document.getElementById('menuToggle');
  const closeBtn   = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('mobileMenu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    closeBtn && closeBtn.addEventListener('click', closeMobileMenu);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
  }
  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ─── ACTIVE NAV LINK ───────────────────────────────────
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
  });

  // ─── SCROLL REVEAL ─────────────────────────────────────
  initScrollReveal();

  // ─── COUNTER ANIMATION ─────────────────────────────────
  document.querySelectorAll('.stat-num').forEach(el => {
    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const raw    = el.textContent;
        const num    = parseFloat(raw.replace(/[^0-9.]/g, ''));
        const suffix = raw.replace(/[0-9.]/g, '');
        if (isNaN(num)) return;
        let start = 0;
        const timer = setInterval(() => {
          start += num / (1800 / 16);
          if (start >= num) { start = num; clearInterval(timer); }
          el.textContent = (Number.isInteger(num) ? Math.floor(start) : start.toFixed(1)) + suffix;
        }, 16);
        counterObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counterObs.observe(el);
  });

  // ─── PAGE-SPECIFIC RENDERS ─────────────────────────────
  if (document.getElementById('heroProjects'))     renderHomePage();
  if (document.getElementById('servicesGrid'))     renderServicesPage();
  if (document.getElementById('testimonialsGrid')) renderTestimonialsPage();
  if (document.getElementById('pricingGrid'))      renderPricingPage();
  if (document.getElementById('projectDetail'))    renderProjectDetailPage();

  // ─── CONTACT FORM ──────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) initContactForm();

  // ─── COOKIE BANNER ─────────────────────────────────────
  initCookieBanner();

  // ─── BACK TO TOP ───────────────────────────────────────
  initBackToTop();

  // ─── FAQ ACCORDION ─────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  console.log('VORTEX loaded');
});

/* ══════════════════════════════════════════════════════════
   LOGO RENDERING
══════════════════════════════════════════════════════════ */
function renderLoaderLogo() {
  const C = window.SITE_CONFIG;
  const loaderLogoEl = document.getElementById('loaderLogo');
  if (!loaderLogoEl) return;
  if (C.logo.useLogo) {
    loaderLogoEl.innerHTML = `<img src="${C.logo.loaderLogoFile}" alt="${C.brand.name}" style="height:${C.logo.loaderLogoHeight};object-fit:contain;" />`;
  } else {
    const [a, b] = splitBrandName(C.brand.name);
    loaderLogoEl.innerHTML = `<span class="loader-text-white">${a}</span><span class="loader-text-red">${b}</span>`;
  }
}

function renderAllLogos() {
  const C = window.SITE_CONFIG;
  document.querySelectorAll('.brand-logo').forEach(el => {
    if (C.logo.useLogo) {
      const h = el.dataset.context === 'footer' ? '36px' : C.logo.logoHeight;
      el.innerHTML = `<img src="${C.logo.logoFile}" alt="${C.brand.name}" style="height:${h};object-fit:contain;" />`;
      el.classList.add('has-img');
    } else {
      el.textContent = C.brand.name;
    }
  });
  document.querySelectorAll('.brand-tagline').forEach(el => el.textContent = C.brand.tagline);
  document.querySelectorAll('[data-contact="email"]').forEach(el => {
    el.textContent = C.contact.email;
    if (el.tagName === 'A') el.href = 'mailto:' + C.contact.email;
  });
  document.querySelectorAll('[data-contact="phone"]').forEach(el => {
    el.textContent = C.contact.phone;
    if (el.tagName === 'A') el.href = 'tel:' + C.contact.phone.replace(/\D/g,'');
  });
  document.querySelectorAll('[data-contact="address"]').forEach(el => el.textContent = C.contact.address);
  document.querySelectorAll('[data-contact="hours"]').forEach(el => el.textContent = C.contact.hours);
  document.querySelectorAll('[data-social="linkedin"]').forEach(el => el.href = C.social.linkedin);
  document.querySelectorAll('[data-social="twitter"]').forEach(el => el.href = C.social.twitter);
  document.querySelectorAll('[data-social="dribbble"]').forEach(el => el.href = C.social.dribbble);
  document.querySelectorAll('[data-social="behance"]').forEach(el => el.href = C.social.behance);
}

function splitBrandName(name) {
  const mid = Math.ceil(name.length / 2);
  return [name.slice(0, mid), name.slice(mid)];
}

/* ══════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════ */
function renderHomePage() {
  const C = window.SITE_CONFIG;
  const statsEl = document.getElementById('heroStats');
  if (statsEl) {
    statsEl.innerHTML = C.stats.map(s => `
      <div class="stat-card">
        <span class="stat-num">${s.num}</span>
        <span class="stat-label">${s.label}</span>
      </div>`).join('');
  }
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('heroLine1', C.brand.heroLine1);
  set('heroLine2', C.brand.heroLine2);
  set('heroLine3', C.brand.heroLine3);
  set('heroLine4', C.brand.heroLine4);
  set('heroSubtext', C.brand.heroSubtext);
  set('heroEyebrow', C.brand.eyebrow);

  const grid = document.getElementById('heroProjects');
  const featured = C.projects.filter(p => p.featured).slice(0, 4);
  grid.innerHTML = featured.map((p, i) => projectCardHTML(p, i * 0.1)).join('');
  initScrollReveal();
}

/* ══════════════════════════════════════════════════════════
   SERVICES PAGE
══════════════════════════════════════════════════════════ */
function renderServicesPage() {
  const C = window.SITE_CONFIG;
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = C.services.map((s, i) => `
    <div class="service-card ${s.highlight ? 'service-highlight' : ''} scroll-reveal" style="transition-delay:${(i%3)*0.07}s">
      <div class="flex items-start justify-between mb-5">
        <span class="service-num">${s.num}</span>
        <span class="service-icon-badge">${s.icon}</span>
      </div>
      <h3 class="service-name">${s.name}</h3>
      <p class="service-desc">${s.desc}</p>
      <div class="flex flex-wrap gap-2 mt-5">
        ${s.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
      </div>
    </div>`).join('');

  const projGrid = document.getElementById('servicesProjects');
  if (projGrid) {
    projGrid.innerHTML = C.projects.map((p, i) => projectCardHTML(p, i * 0.1)).join('');
  }
  initScrollReveal();
}

/* ══════════════════════════════════════════════════════════
   TESTIMONIALS PAGE
══════════════════════════════════════════════════════════ */
function renderTestimonialsPage() {
  const C = window.SITE_CONFIG;
  const featured = C.testimonials[0];
  const featEl = document.getElementById('featuredTestimonial');
  if (featEl && featured) {
    featEl.innerHTML = `
      <p class="text-4xl md:text-6xl font-light barlow italic text-white leading-tight mb-10">"${featured.text}"</p>
      <div class="flex items-center justify-center gap-4">
        <div class="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center logo-text text-lg">${featured.avatar}</div>
        <div class="text-left">
          <p class="font-semibold barlow text-white">${featured.author}</p>
          <p class="mono text-xs text-red-500 tracking-widest">${featured.company}</p>
        </div>
      </div>`;
  }
  const grid = document.getElementById('testimonialsGrid');
  grid.innerHTML = C.testimonials.map((t, i) => `
    <div class="testimonial-card scroll-reveal" style="transition-delay:${(i%3)*0.08}s">
      <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="flex items-center gap-3 mt-4">
        <div class="w-9 h-9 rounded-full bg-red-900/50 flex items-center justify-center mono text-xs text-red-400">${t.avatar}</div>
        <div>
          <p class="testimonial-author">${t.author}</p>
          <p class="testimonial-company">${t.company}</p>
        </div>
      </div>
    </div>`).join('');
  const statsEl = document.getElementById('testimonialsStats');
  if (statsEl) {
    statsEl.innerHTML = C.stats.map(s => `
      <div class="text-center scroll-reveal">
        <p class="stat-num text-5xl md:text-6xl">${s.num}</p>
        <p class="stat-label mt-2">${s.label}</p>
      </div>`).join('');
  }
  initScrollReveal();
}

/* ══════════════════════════════════════════════════════════
   PRICING PAGE
══════════════════════════════════════════════════════════ */
function renderPricingPage() {
  const C = window.SITE_CONFIG;
  const grid = document.getElementById('pricingGrid');
  grid.innerHTML = C.pricing.map((p, i) => `
    <div class="pricing-card ${p.featured ? 'featured' : ''} scroll-reveal" style="transition-delay:${i*0.1}s">
      ${p.badge ? `<div class="pricing-badge">${p.badge}</div>` : ''}
      <p class="pricing-plan">${p.plan}</p>
      <div class="flex items-end gap-2 mt-4 mb-2">
        <span class="pricing-price">${p.price}</span>
      </div>
      <p class="pricing-period barlow text-gray-500">${p.period}</p>
      <div class="my-6 h-px bg-red-900/20"></div>
      <ul class="pricing-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <a href="contact.html" class="${p.featured ? 'btn-primary' : 'btn-outline'} w-full text-center mt-8 block">${p.cta}</a>
    </div>`).join('');
  initScrollReveal();
}

/* ══════════════════════════════════════════════════════════
   PROJECT DETAIL PAGE
══════════════════════════════════════════════════════════ */
function renderProjectDetailPage() {
  const C      = window.SITE_CONFIG;
  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'));
  const p      = C.projects.find(x => x.id === id);
  if (!p) { window.location.href = 'services.html'; return; }

  document.title = p.title + ' — ' + C.brand.name + ' Studio';
  const set = (sel, val) => { const el = document.querySelector(sel); if (el) el.innerHTML = val; };
  set('#pdTag',      p.tag);
  set('#pdTitle',    p.title);
  set('#pdBody',     p.body);
  set('#pdClient',   p.client);
  set('#pdYear',     p.year);
  set('#pdDuration', p.duration);
  set('#pdResult',   p.result);
  set('#pdServices', p.services.map(s => `<span class="sidebar-tag">${s}</span>`).join(''));

  const heroEl = document.getElementById('pdHero');
  if (heroEl) {
    if (p.useImage && p.image) {
      heroEl.style.backgroundImage    = `url('${p.image}')`;
      heroEl.style.backgroundSize     = 'cover';
      heroEl.style.backgroundPosition = 'center';
    } else {
      heroEl.style.background = p.gradient;
    }
    heroEl.innerHTML = `<div style="position:absolute;inset:0;background:repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(255,255,255,0.015) 30px,rgba(255,255,255,0.015) 31px);"></div>`;
  }

  const galleryEl = document.getElementById('pdGallery');
  if (galleryEl && p.gallery) {
    galleryEl.innerHTML = p.gallery.map((g, i) => {
      const bg = g.useImage && g.image ? `url('${g.image}') center/cover` : g.gradient;
      return `
        <div class="gallery-img scroll-reveal" style="transition-delay:${i*0.1}s">
          <div class="gallery-img-inner" style="background:${bg};position:relative;">
            <div style="position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent,transparent 20px,rgba(255,255,255,0.01) 20px,rgba(255,255,255,0.01) 21px);"></div>
          </div>
        </div>`;
    }).join('');
  }

  const moreEl = document.getElementById('pdMore');
  if (moreEl) {
    const others = C.projects.filter(x => x.id !== id).slice(0, 2);
    moreEl.innerHTML = others.map((proj, i) => projectCardHTML(proj, i * 0.1)).join('');
  }
  setTimeout(initScrollReveal, 300);
}

/* ══════════════════════════════════════════════════════════
   PROJECT CARD HTML
══════════════════════════════════════════════════════════ */
function projectCardHTML(p, delay) {
  delay = delay || 0;
  const bgStyle = p.useImage && p.image
    ? `background:url('${p.image}') center/cover no-repeat;`
    : `background:${p.gradient};`;
  return `
    <a href="project-detail.html?id=${p.id}" class="project-card group scroll-reveal" style="transition-delay:${delay}s">
      <div class="project-img-wrap">
        <div class="project-img" style="${bgStyle}">
          <div class="project-overlay-pattern"></div>
        </div>
        <div class="project-overlay">
          <span class="project-cta">View Project →</span>
        </div>
        <div class="project-number-badge">${String(p.id).padStart(2,'0')}</div>
      </div>
      <div class="project-info">
        <span class="project-tag">${p.tag}</span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="project-meta">
          <span class="project-year">${p.year}</span>
          <span class="project-result">${p.result}</span>
        </div>
      </div>
    </a>`;
}

/* ══════════════════════════════════════════════════════════
   CONTACT FORM → GOOGLE SHEETS
══════════════════════════════════════════════════════════ */
function initContactForm() {
  const form       = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMsg');
  const submitBtn  = document.getElementById('submitBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      firstName: form.querySelector('[name="firstName"]').value,
      lastName:  form.querySelector('[name="lastName"]').value,
      email:     form.querySelector('[name="email"]').value,
      company:   form.querySelector('[name="company"]').value,
      service:   form.querySelector('[name="service"]').value,
      budget:    form.querySelector('[name="budget"]').value,
      message:   form.querySelector('[name="message"]').value,
    };
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled    = true;
    submitBtn.style.opacity = '0.7';

    const url = window.SITE_CONFIG.googleSheetsUrl;
    if (!url || url === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
      showFormSuccess(form, successMsg);
      console.warn('Google Sheets URL not set. See config.js');
      return;
    }
    try {
      await fetch(url, {
        method:  'POST',
        mode:    'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });
      showFormSuccess(form, successMsg);
    } catch (err) {
      console.error('Form error:', err);
      submitBtn.textContent  = 'Error — Try Again';
      submitBtn.disabled     = false;
      submitBtn.style.opacity = '1';
    }
  });
}

function showFormSuccess(form, successMsg) {
  form.style.opacity   = '0';
  form.style.transform = 'translateY(-20px)';
  form.style.transition = 'opacity 0.4s, transform 0.4s';
  setTimeout(() => {
    form.style.display = 'none';
    successMsg.classList.remove('hidden');
  }, 400);
}

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.scroll-reveal:not(.visible)');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════════════════════
   COOKIE BANNER
══════════════════════════════════════════════════════════ */
function initCookieBanner() {
  if (localStorage.getItem('vx_cookies')) return;
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  setTimeout(() => banner.classList.add('visible'), 2500);
  document.getElementById('cookieAccept') && document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem('vx_cookies', '1');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
  });
  document.getElementById('cookieDecline') && document.getElementById('cookieDecline').addEventListener('click', () => {
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
  });
}

/* ══════════════════════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 600));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

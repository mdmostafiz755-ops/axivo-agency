/**
 * ╔══════════════════════════════════════════════════════════╗
 *  VORTEX STUDIO — MAIN.JS
 *  ─────────────────────────────────────────────────────────
 *  Handles: logo rendering, scroll reveal, counters,
 *  all page dynamic renders, contact form → Google Sheets,
 *  lightbox gallery, cookie banner, back-to-top.
 *
 *  NOTE: Mobile hamburger menu is wired in components.js,
 *  NOT here — that fixes the race condition where buttons
 *  didn't exist in the DOM when this script ran.
 * ╚══════════════════════════════════════════════════════════╝
 */

document.addEventListener('DOMContentLoaded', () => {

  const C = window.SITE_CONFIG;
  if (!C) { console.error('VORTEX: config.js not loaded!'); return; }

  // ─── PAGE LOADER ───────────────────────────────────────
  const loader = document.getElementById('pageLoader');
  if (loader) {
    renderLoaderLogo();
    setTimeout(() => loader.classList.add('done'), 1500);
  }

  // ─── LOGOS (nav + footer) ──────────────────────────────
  renderAllLogos();

  // ─── CUSTOM CURSOR ─────────────────────────────────────
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (cursor && follower) {
    let mx = 0, my = 0, fx = 0, fy = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    });
    (function tick() {
      fx += (mx - fx) * 0.12; fy += (my - fy) * 0.12;
      follower.style.left = fx + 'px'; follower.style.top = fy + 'px';
      requestAnimationFrame(tick);
    })();
    document.querySelectorAll('a,button,.project-card,.service-card,.pricing-card').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // ─── NAV SCROLL EFFECT ─────────────────────────────────
  const nav = document.querySelector('nav');
  if (nav) window.addEventListener('scroll', () => nav.classList.toggle('nav-scrolled', window.scrollY > 50));

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
    new IntersectionObserver((entries, obs) => {
      if (!entries[0].isIntersecting) return;
      const raw = el.textContent, num = parseFloat(raw.replace(/[^0-9.]/g,'')), suf = raw.replace(/[0-9.]/g,'');
      if (isNaN(num)) return;
      let v = 0;
      const t = setInterval(() => {
        v += num / (1800/16);
        if (v >= num) { v = num; clearInterval(t); }
        el.textContent = (Number.isInteger(num) ? Math.floor(v) : v.toFixed(1)) + suf;
      }, 16);
      obs.disconnect();
    }, { threshold: 0.5 }).observe(el);
  });

  // ─── FAQ ACCORDION ─────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement, wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // ─── PAGE-SPECIFIC RENDERS ─────────────────────────────
  if (document.getElementById('heroProjects'))     renderHomePage();
  if (document.getElementById('servicesGrid'))     renderServicesPage();
  if (document.getElementById('testimonialsGrid')) renderTestimonialsPage();
  if (document.getElementById('pricingGrid'))      renderPricingPage();
  if (document.getElementById('projectDetail'))    renderProjectDetailPage();

  // ─── CONTACT FORM ──────────────────────────────────────
  if (document.getElementById('contactForm'))      initContactForm();

  // ─── LIGHTBOX ──────────────────────────────────────────
  initLightbox();

  // ─── GLOBAL WIDGETS ────────────────────────────────────
  initCookieBanner();
  initBackToTop();
});

/* ══════════════════════════════════════════════════════════
   LOGO — GitHub Pages safe path resolution
══════════════════════════════════════════════════════════ */
function resolveLogoPath(filePath) {
  if (!filePath) return '';
  if (/^(https?:|data:|\/\/)/.test(filePath) || filePath.startsWith('/')) return filePath;
  const clean = filePath.replace(/^\.\//, '');
  try {
    const base = window.location.href.split('?')[0].split('#')[0];
    const dir  = base.substring(0, base.lastIndexOf('/') + 1);
    return dir + clean;
  } catch(e) { return filePath; }
}

function makeLogoImg(filePath, alt, height, fallback) {
  const src = resolveLogoPath(filePath);
  const img = document.createElement('img');
  img.src = src; img.alt = alt || ''; img.loading = 'eager';
  img.style.cssText = `height:${height||'40px'};object-fit:contain;display:block;`;
  img.onerror = function() {
    console.warn('[VORTEX] Logo not found:', src, '— using text fallback.');
    const span = document.createElement('span');
    span.textContent = fallback || alt || '';
    span.style.cssText = `font-family:'Bebas Neue',cursive;font-size:${height||'40px'};letter-spacing:.1em;color:white;`;
    if (img.parentNode) img.parentNode.replaceChild(span, img);
  };
  return img;
}

function renderLoaderLogo() {
  const C = window.SITE_CONFIG, el = document.getElementById('loaderLogo');
  if (!el) return;
  if (C.logo.useLogo) {
    el.innerHTML = '';
    el.appendChild(makeLogoImg(C.logo.loaderLogoFile, C.brand.name, C.logo.loaderLogoHeight||'80px', C.brand.name));
  } else {
    const [a,b] = [C.brand.name.slice(0, Math.ceil(C.brand.name.length/2)), C.brand.name.slice(Math.ceil(C.brand.name.length/2))];
    el.innerHTML = `<span class="loader-text-white">${a}</span><span class="loader-text-red">${b}</span>`;
  }
}

function renderAllLogos() {
  const C = window.SITE_CONFIG;
  document.querySelectorAll('.brand-logo').forEach(el => {
    if (C.logo.useLogo) {
      const h = el.dataset.context === 'footer' ? (C.logo.logoHeightFooter||'36px') : (C.logo.logoHeight||'40px');
      el.innerHTML = ''; el.appendChild(makeLogoImg(C.logo.logoFile, C.brand.name, h, C.brand.name));
      el.classList.add('has-img');
    } else {
      el.textContent = C.brand.name; el.classList.remove('has-img');
    }
  });
  document.querySelectorAll('.brand-tagline').forEach(el => el.textContent = C.brand.tagline);
  document.querySelectorAll('[data-contact="email"]').forEach(el => { el.textContent = C.contact.email; if (el.tagName==='A') el.href = 'mailto:'+C.contact.email; });
  document.querySelectorAll('[data-contact="phone"]').forEach(el => { el.textContent = C.contact.phone; if (el.tagName==='A') el.href = 'tel:'+C.contact.phone.replace(/\D/g,''); });
  document.querySelectorAll('[data-contact="address"]').forEach(el => el.textContent = C.contact.address);
  document.querySelectorAll('[data-contact="hours"]').forEach(el => el.textContent = C.contact.hours);
  document.querySelectorAll('[data-social="linkedin"]').forEach(el => el.href = C.social.linkedin);
  document.querySelectorAll('[data-social="twitter"]').forEach(el => el.href = C.social.twitter);
  document.querySelectorAll('[data-social="dribbble"]').forEach(el => el.href = C.social.dribbble);
  document.querySelectorAll('[data-social="behance"]').forEach(el => el.href = C.social.behance);
}

/* ══════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════ */
function renderHomePage() {
  const C = window.SITE_CONFIG;
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('heroEyebrow', C.brand.eyebrow);
  set('heroLine1',   C.brand.heroLine1);
  set('heroLine2',   C.brand.heroLine2);
  set('heroLine3',   C.brand.heroLine3);
  set('heroLine4',   C.brand.heroLine4);
  set('heroSubtext', C.brand.heroSubtext);

  const statsEl = document.getElementById('heroStats');
  if (statsEl) statsEl.innerHTML = C.stats.map(s => `<div class="stat-card"><span class="stat-num">${s.num}</span><span class="stat-label">${s.label}</span></div>`).join('');

  const grid = document.getElementById('heroProjects');
  grid.innerHTML = C.projects.filter(p => p.featured).slice(0,4).map((p,i) => projectCardHTML(p, i*0.1)).join('');
  initScrollReveal();
}

/* ══════════════════════════════════════════════════════════
   SERVICES PAGE
══════════════════════════════════════════════════════════ */
function renderServicesPage() {
  const C = window.SITE_CONFIG;
  document.getElementById('servicesGrid').innerHTML = C.services.map((s,i) => `
    <div class="service-card ${s.highlight?'service-highlight':''} scroll-reveal" style="transition-delay:${(i%3)*0.07}s">
      <div class="flex items-start justify-between mb-5">
        <span class="service-num">${s.num}</span>
        <span class="service-icon-badge">${s.icon}</span>
      </div>
      <h3 class="service-name">${s.name}</h3>
      <p class="service-desc">${s.desc}</p>
      <div class="flex flex-wrap gap-2 mt-5">${s.tags.map(t=>`<span class="service-tag">${t}</span>`).join('')}</div>
    </div>`).join('');
  const pp = document.getElementById('servicesProjects');
  if (pp) pp.innerHTML = C.projects.map((p,i) => projectCardHTML(p, i*0.1)).join('');
  initScrollReveal();
}

/* ══════════════════════════════════════════════════════════
   TESTIMONIALS PAGE
══════════════════════════════════════════════════════════ */
function renderTestimonialsPage() {
  const C = window.SITE_CONFIG;
  const featured = C.testimonials[0];
  const featEl = document.getElementById('featuredTestimonial');
  if (featEl && featured) featEl.innerHTML = `
    <p class="text-4xl md:text-6xl font-light barlow italic text-white leading-tight mb-10">"${featured.text}"</p>
    <div class="flex items-center justify-center gap-4">
      <div class="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center logo-text text-lg">${featured.avatar}</div>
      <div class="text-left"><p class="font-semibold barlow text-white">${featured.author}</p><p class="mono text-xs text-red-500 tracking-widest">${featured.company}</p></div>
    </div>`;
  document.getElementById('testimonialsGrid').innerHTML = C.testimonials.map((t,i) => `
    <div class="testimonial-card scroll-reveal" style="transition-delay:${(i%3)*0.08}s">
      <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="flex items-center gap-3 mt-4">
        <div class="w-9 h-9 rounded-full bg-red-900/50 flex items-center justify-center mono text-xs text-red-400">${t.avatar}</div>
        <div><p class="testimonial-author">${t.author}</p><p class="testimonial-company">${t.company}</p></div>
      </div>
    </div>`).join('');
  const se = document.getElementById('testimonialsStats');
  if (se) se.innerHTML = C.stats.map(s=>`<div class="text-center scroll-reveal"><p class="stat-num text-5xl md:text-6xl">${s.num}</p><p class="stat-label mt-2">${s.label}</p></div>`).join('');
  initScrollReveal();
}

/* ══════════════════════════════════════════════════════════
   PRICING PAGE
══════════════════════════════════════════════════════════ */
function renderPricingPage() {
  const C = window.SITE_CONFIG;
  document.getElementById('pricingGrid').innerHTML = C.pricing.map((p,i) => `
    <div class="pricing-card ${p.featured?'featured':''} scroll-reveal" style="transition-delay:${i*0.1}s">
      ${p.badge?`<div class="pricing-badge">${p.badge}</div>`:''}
      <p class="pricing-plan">${p.plan}</p>
      <div class="flex items-end gap-2 mt-4 mb-2"><span class="pricing-price">${p.price}</span></div>
      <p class="pricing-period barlow text-gray-500">${p.period}</p>
      <div class="my-6 h-px bg-red-900/20"></div>
      <ul class="pricing-features">${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
      <a href="contact.html" class="${p.featured?'btn-primary':'btn-outline'} w-full text-center mt-8 block">${p.cta}</a>
    </div>`).join('');
  initScrollReveal();
}

/* ══════════════════════════════════════════════════════════
   PROJECT DETAIL PAGE — editorial 20-image gallery
══════════════════════════════════════════════════════════ */
function renderProjectDetailPage() {
  const C = window.SITE_CONFIG;
  const id = parseInt(new URLSearchParams(window.location.search).get('id'));
  const p  = C.projects.find(x => x.id === id);
  if (!p) { window.location.href = 'services.html'; return; }

  document.title = p.title + ' — ' + C.brand.name;
  const set = (sel, val) => { const el = document.querySelector(sel); if (el) el.innerHTML = val; };
  set('#pdTag',      p.tag);
  set('#pdTitle',    p.title);
  set('#pdBody',     p.body || '');
  set('#pdClient',   p.client);
  set('#pdYear',     p.year);
  set('#pdDuration', p.duration);
  set('#pdResult',   p.result);
  set('#pdServices', (p.services||[]).map(s=>`<span class="sidebar-tag">${s}</span>`).join(''));

  // ── Hero image ──
  const heroEl = document.getElementById('pdHero');
  if (heroEl) {
    if (p.useImage && p.image) {
      heroEl.style.backgroundImage    = `url('${resolveLogoPath(p.image)}')`;
      heroEl.style.backgroundSize     = 'cover';
      heroEl.style.backgroundPosition = 'center';
    } else {
      heroEl.style.background = p.gradient || '#111';
    }
    heroEl.innerHTML = `<div style="position:absolute;inset:0;background:repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(255,255,255,.015) 30px,rgba(255,255,255,.015) 31px);pointer-events:none;"></div>`;
  }

  // ── 20-image editorial gallery ──
  const galleryEl = document.getElementById('pdGallery');
  if (galleryEl && p.gallery && p.gallery.length) {
    galleryEl.innerHTML = p.gallery.map((g, i) => buildGalleryItem(g, i, p.id)).join('');
  }

  // ── More projects ──
  const moreEl = document.getElementById('pdMore');
  if (moreEl) {
    moreEl.innerHTML = C.projects.filter(x => x.id !== id).slice(0,2).map((proj,i) => projectCardHTML(proj, i*0.1)).join('');
  }

  setTimeout(initScrollReveal, 300);
}

/**
 * Builds a single gallery item — handles both image and gradient,
 * respects the span layout, and wires up lightbox click.
 *
 * span values:
 *   "wide"   → full width (colspan 2)
 *   "normal" → half width (colspan 1)
 *   "tall"   → half width, taller aspect ratio
 */
function buildGalleryItem(g, index, projectId) {
  const span      = g.span || 'normal';
  const colClass  = span === 'wide'  ? 'gallery-item-wide'
                  : span === 'tall'  ? 'gallery-item-tall'
                  : 'gallery-item-normal';
  const delay     = (index * 0.06).toFixed(2);

  // ── Background style ──
  let innerStyle, imgTag = '';
  if (g.useImage && g.image) {
    // YOUR IMAGE
    const src = resolveLogoPath(g.image);
    innerStyle = `background:#111;`;
    imgTag = `<img
      src="${src}"
      alt="${g.alt || ''}"
      loading="lazy"
      decoding="async"
      class="gallery-real-img"
      onerror="this.parentElement.style.background='linear-gradient(135deg,#1a0000,#8b0000)';this.remove();"
    />`;
  } else {
    // GRADIENT PLACEHOLDER
    innerStyle = `background:${g.gradient || '#111'};`;
    imgTag = `
      <!-- ✏️ PLACEHOLDER SLOT ${index+1}
           To replace with your image:
           1. In config.js, find this gallery item (index ${index})
           2. Set  useImage: true
           3. Set  image: "assets/projects/your-folder/filename.jpg"
           4. Update  alt  and  caption  fields
           Recommended size: ${span === 'wide' ? '1600×600px' : span === 'tall' ? '800×1067px' : '800×600px'}
      -->
      <div class="gallery-placeholder-text">
        <span class="gallery-slot-num">${String(index+1).padStart(2,'0')}</span>
        <span class="gallery-add-icon">＋</span>
        <span class="gallery-add-label">Add Image</span>
      </div>`;
  }

  // ── Caption ──
  const caption = g.caption || g.alt || '';
  const captionHtml = caption
    ? `<div class="gallery-caption"><span>${caption}</span></div>`
    : '';

  return `
    <div
      class="gallery-item ${colClass} scroll-reveal"
      style="transition-delay:${delay}s"
      data-gallery-index="${index}"
      data-project-id="${projectId}"
      role="button"
      tabindex="0"
      aria-label="View image ${index+1}${g.alt ? ': '+g.alt : ''}"
    >
      <div class="gallery-item-inner" style="${innerStyle}">
        ${imgTag}
        <div class="gallery-item-overlay">
          <span class="gallery-zoom-icon">⤢</span>
        </div>
      </div>
      ${captionHtml}
    </div>`;
}

/* ══════════════════════════════════════════════════════════
   LIGHTBOX — click any gallery image to open full-screen
══════════════════════════════════════════════════════════ */
function initLightbox() {
  // Create the lightbox DOM once
  if (document.getElementById('vxLightbox')) return;
  const lb = document.createElement('div');
  lb.id = 'vxLightbox';
  lb.innerHTML = `
    <div class="lb-backdrop"></div>
    <div class="lb-panel">
      <button class="lb-close" aria-label="Close">✕</button>
      <button class="lb-prev"  aria-label="Previous">‹</button>
      <button class="lb-next"  aria-label="Next">›</button>
      <div class="lb-content">
        <div class="lb-img-wrap">
          <img class="lb-img" src="" alt="" />
          <div class="lb-gradient lb-gradient-placeholder" style="display:none;"></div>
        </div>
        <div class="lb-footer">
          <span class="lb-caption"></span>
          <span class="lb-counter"></span>
        </div>
      </div>
    </div>`;
  document.body.appendChild(lb);

  let currentItems = [], currentIdx = 0;

  // Open lightbox when a gallery item is clicked
  document.addEventListener('click', function(e) {
    const item = e.target.closest('.gallery-item[data-gallery-index]');
    if (!item) return;
    const projectId = parseInt(item.dataset.projectId);
    const idx       = parseInt(item.dataset.galleryIndex);
    const C         = window.SITE_CONFIG;
    const project   = C && C.projects.find(p => p.id === projectId);
    if (!project || !project.gallery) return;
    currentItems = project.gallery;
    openAt(idx);
  });

  // Keyboard support on gallery items
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const item = document.activeElement && document.activeElement.closest && document.activeElement.closest('.gallery-item');
      if (item) item.click();
    }
  });

  function openAt(idx) {
    currentIdx = Math.max(0, Math.min(idx, currentItems.length - 1));
    showItem(currentIdx);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showItem(idx) {
    const g       = currentItems[idx];
    const imgEl   = lb.querySelector('.lb-img');
    const gradEl  = lb.querySelector('.lb-gradient-placeholder');
    const caption = lb.querySelector('.lb-caption');
    const counter = lb.querySelector('.lb-counter');

    caption.textContent = g.caption || g.alt || '';
    counter.textContent = `${idx+1} / ${currentItems.length}`;

    // Update prev/next buttons
    lb.querySelector('.lb-prev').style.opacity = idx === 0 ? '0.3' : '1';
    lb.querySelector('.lb-next').style.opacity = idx === currentItems.length-1 ? '0.3' : '1';

    if (g.useImage && g.image) {
      imgEl.src   = resolveLogoPath(g.image);
      imgEl.alt   = g.alt || '';
      imgEl.style.display  = 'block';
      gradEl.style.display = 'none';
    } else {
      imgEl.style.display  = 'none';
      gradEl.style.display = 'block';
      gradEl.style.background = g.gradient || '#111';
    }
  }

  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-backdrop').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', () => { if (currentIdx > 0) showItem(--currentIdx); });
  lb.querySelector('.lb-next').addEventListener('click', () => { if (currentIdx < currentItems.length-1) showItem(++currentIdx); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  lb.querySelector('.lb-prev').click();
    if (e.key === 'ArrowRight') lb.querySelector('.lb-next').click();
    if (e.key === 'Escape')     close();
  });

  // Swipe support on mobile
  let touchStartX = 0;
  lb.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive:true });
  lb.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) lb.querySelector('.lb-next').click();
    else        lb.querySelector('.lb-prev').click();
  });
}

/* ══════════════════════════════════════════════════════════
   PROJECT CARD HTML (shared)
══════════════════════════════════════════════════════════ */
function projectCardHTML(p, delay) {
  delay = delay || 0;
  const bgStyle = p.useImage && p.image
    ? `background:url('${resolveLogoPath(p.image)}') center/cover no-repeat;`
    : `background:${p.gradient||'#111'};`;
  return `
    <a href="project-detail.html?id=${p.id}" class="project-card group scroll-reveal" style="transition-delay:${delay}s">
      <div class="project-img-wrap">
        <div class="project-img" style="${bgStyle}">
          <div class="project-overlay-pattern"></div>
        </div>
        <div class="project-overlay"><span class="project-cta">View Project →</span></div>
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
  const form = document.getElementById('contactForm');
  const succ = document.getElementById('successMsg');
  const btn  = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = {
      firstName: form.querySelector('[name="firstName"]')?.value || '',
      lastName:  form.querySelector('[name="lastName"]')?.value  || '',
      email:     form.querySelector('[name="email"]')?.value     || '',
      company:   form.querySelector('[name="company"]')?.value   || '',
      service:   form.querySelector('[name="service"]')?.value   || '',
      budget:    form.querySelector('[name="budget"]')?.value    || '',
      message:   form.querySelector('[name="message"]')?.value   || '',
    };

    // Honeypot — if hp field filled, it's a bot
    const hp = form.querySelector('[name="hp"]');
    if (hp && hp.value) return;

    btn.textContent = 'Sending...'; btn.disabled = true; btn.style.opacity = '.7';

    const url = window.SITE_CONFIG.googleSheetsUrl;
    if (!url || url.includes('YOUR_GOOGLE')) {
      showFormSuccess(form, succ);
      console.warn('[VORTEX] Google Sheets URL not configured — see config.js → googleSheetsUrl');
      return;
    }
    try {
      await fetch(url, { method:'POST', mode:'no-cors', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
      showFormSuccess(form, succ);
    } catch(err) {
      btn.textContent = 'Error — Try Again'; btn.disabled = false; btn.style.opacity = '1';
      console.error('[VORTEX] Form submit error:', err);
    }
  });
}

function showFormSuccess(form, successMsg) {
  form.style.cssText += ';opacity:0;transform:translateY(-20px);transition:opacity .4s,transform .4s;';
  setTimeout(() => { form.style.display = 'none'; successMsg && successMsg.classList.remove('hidden'); }, 400);
}

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.visible)').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════════════════════
   COOKIE BANNER
══════════════════════════════════════════════════════════ */
function initCookieBanner() {
  if (localStorage.getItem('vx_cookies')) return;
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  setTimeout(() => banner.classList.add('visible'), 2500);
  banner.querySelector && banner.addEventListener('click', e => {
    if (e.target.id === 'cookieAccept') { localStorage.setItem('vx_cookies','1'); banner.classList.remove('visible'); setTimeout(()=>banner.remove(),400); }
    if (e.target.id === 'cookieDecline') { banner.classList.remove('visible'); setTimeout(()=>banner.remove(),400); }
  });
}

/* ══════════════════════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 600), { passive:true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

/**
 * ═══════════════════════════════════════════════════════════
 *  SHARED COMPONENTS — NAV, FOOTER, GLOBAL WIDGETS
 *  Injected into every page automatically.
 *
 *  FIX: Mobile hamburger menu now works correctly.
 *  Root cause was that components.js injected the menu HTML
 *  AFTER main.js already tried to bind the toggle events,
 *  so the #menuToggle and #menuClose buttons didn't exist yet.
 *  Solution: components.js now injects HTML AND wires up the
 *  mobile menu events itself, in the correct order.
 * ═══════════════════════════════════════════════════════════
 */

(function() {

  /* ════════════════════════════════════════════════
     NAV — inject nav links + hamburger button
  ════════════════════════════════════════════════ */
  const navEl = document.getElementById('siteNav');
  if (navEl) {
    navEl.innerHTML = `
      <a href="index.html" class="brand-logo logo-text text-3xl tracking-widest text-white hover:text-red-500 transition-colors duration-300"></a>

      <div class="hidden md:flex items-center gap-10">
        <a href="index.html"        class="nav-link">Home</a>
        <a href="about.html"        class="nav-link">About</a>
        <a href="services.html"     class="nav-link">Services</a>
        <a href="testimonials.html" class="nav-link">Testimonials</a>
        <a href="pricing.html"      class="nav-link">Pricing</a>
        <a href="contact.html"      class="nav-link">Contact</a>
      </div>

      <a href="contact.html" class="hidden md:block btn-primary">Get Started</a>

      <!-- Hamburger — visible only on mobile -->
      <button
        id="menuToggle"
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-50 relative"
        aria-label="Open menu"
        aria-expanded="false"
      >
        <span class="ham-bar"></span>
        <span class="ham-bar"></span>
        <span class="ham-bar"></span>
      </button>`;
  }

  /* ════════════════════════════════════════════════
     MOBILE MENU — full-screen overlay
  ════════════════════════════════════════════════ */
  const mobileMenuEl = document.getElementById('mobileMenu');
  if (mobileMenuEl) {
    // ─── Make sure the element has the right base classes ───
    mobileMenuEl.className = 'mobile-menu fixed inset-0 bg-black z-40 flex-col items-center justify-center gap-8';
    // Hidden by default via CSS (display:none) — toggled via .open class
    mobileMenuEl.setAttribute('aria-hidden', 'true');

    mobileMenuEl.innerHTML = `
      <!-- Close button -->
      <button
        id="menuClose"
        class="absolute top-6 right-6 text-white w-10 h-10 flex items-center justify-center text-3xl"
        aria-label="Close menu"
      >✕</button>

      <!-- Nav links -->
      <a href="index.html"        class="mobile-nav-link">Home</a>
      <a href="about.html"        class="mobile-nav-link">About</a>
      <a href="services.html"     class="mobile-nav-link">Services</a>
      <a href="testimonials.html" class="mobile-nav-link">Testimonials</a>
      <a href="pricing.html"      class="mobile-nav-link">Pricing</a>
      <a href="contact.html"      class="mobile-nav-link">Contact</a>

      <!-- CTA inside mobile menu -->
      <a href="contact.html" class="btn-primary mt-4">Get Started</a>`;
  }

  /* ════════════════════════════════════════════════
     MOBILE MENU LOGIC
     Wired up HERE (not in main.js) so the elements
     exist in the DOM before we attach listeners.
  ════════════════════════════════════════════════ */
  function openMenu() {
    const menu   = document.getElementById('mobileMenu');
    const toggle = document.getElementById('menuToggle');
    if (!menu) return;
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    toggle && toggle.setAttribute('aria-expanded', 'true');
    toggle && toggle.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    const menu   = document.getElementById('mobileMenu');
    const toggle = document.getElementById('menuToggle');
    if (!menu) return;
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    toggle && toggle.setAttribute('aria-expanded', 'false');
    toggle && toggle.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Bind toggle button
  document.addEventListener('click', function(e) {
    const toggle = e.target.closest('#menuToggle');
    const close  = e.target.closest('#menuClose');
    const menu   = document.getElementById('mobileMenu');

    if (toggle) {
      const isOpen = menu && menu.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
      return;
    }
    if (close) {
      closeMenu();
      return;
    }
    // Close if clicking a mobile nav link
    if (e.target.closest('.mobile-nav-link')) {
      closeMenu();
      return;
    }
    // Close if clicking the dark overlay background (not the menu panel itself)
    if (menu && menu.classList.contains('open') && !e.target.closest('.mobile-menu-panel')) {
      closeMenu();
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ════════════════════════════════════════════════
     FOOTER
  ════════════════════════════════════════════════ */
  const footerEl = document.getElementById('siteFooter');
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="md:col-span-2">
          <!-- Logo rendered by main.js from config.js → logo settings -->
          <div class="brand-logo logo-text text-4xl text-white mb-1" data-context="footer"></div>
          <p class="mono text-xs text-gray-600 tracking-widest mb-4 brand-tagline"></p>
          <p class="text-gray-400 barlow max-w-xs leading-relaxed">
            <!-- ✏️ FOOTER TEXT: Edit directly here -->
            We craft brands, websites, and visual identities that demand attention and drive results.
          </p>
          <div class="flex gap-4 mt-6">
            <!-- ✏️ SOCIAL LINKS: Edit URLs in config.js → social{} -->
            <a href="#" class="social-icon" data-social="linkedin" title="LinkedIn">in</a>
            <a href="#" class="social-icon" data-social="twitter"  title="Twitter">𝕏</a>
            <a href="#" class="social-icon" data-social="dribbble" title="Dribbble">Dr</a>
            <a href="#" class="social-icon" data-social="behance"  title="Behance">Be</a>
          </div>
        </div>

        <div>
          <p class="footer-heading">Navigation</p>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <div>
          <p class="footer-heading">Contact</p>
          <ul class="footer-links">
            <!-- ✏️ CONTACT INFO: Edit in config.js → contact{} -->
            <li><a href="#" data-contact="email" class="hover:text-red-500 transition-colors"></a></li>
            <li><a href="#" data-contact="phone" class="hover:text-red-500 transition-colors"></a></li>
            <li><span data-contact="address"></span></li>
          </ul>
        </div>
      </div>

      <div class="max-w-7xl mx-auto mt-12 pt-6 border-t border-red-900/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- ✏️ COPYRIGHT: Change year/name below -->
        <p class="text-gray-600 text-sm barlow">© 2025 Vortex Studio. All rights reserved.</p>
        <p class="text-gray-600 text-sm barlow">Crafted with passion and obsession.</p>
      </div>`;
  }

  /* ════════════════════════════════════════════════
     COOKIE BANNER
  ════════════════════════════════════════════════ */
  const cookieEl = document.getElementById('cookieBanner');
  if (cookieEl) {
    cookieEl.innerHTML = `
      <p class="cookie-text">
        We use cookies to improve your experience.
        <a href="#">Privacy Policy</a>
      </p>
      <div class="cookie-btns">
        <button class="cookie-btn cookie-accept" id="cookieAccept">Accept</button>
        <button class="cookie-btn cookie-decline" id="cookieDecline">Decline</button>
      </div>`;
  }

})();

/**
 * ═══════════════════════════════════════════════════════════
 *  SHARED COMPONENTS — NAV, FOOTER, GLOBAL WIDGETS
 *  Injected into every page automatically
 * ═══════════════════════════════════════════════════════════
 */

(function() {
  /* ── NAV ── */
  const navEl = document.getElementById('siteNav');
  if (navEl) {
    navEl.innerHTML = `
      <a href="index.html" class="brand-logo text-3xl tracking-widest text-white hover:text-red-500 transition-colors duration-300"></a>
      <div class="hidden md:flex items-center gap-10">
        <a href="index.html"       class="nav-link">Home</a>
        <a href="about.html"       class="nav-link">About</a>
        <a href="services.html"    class="nav-link">Services</a>
        <a href="testimonials.html" class="nav-link">Testimonials</a>
        <a href="pricing.html"     class="nav-link">Pricing</a>
        <a href="contact.html"     class="nav-link">Contact</a>
      </div>
      <a href="contact.html" class="hidden md:block btn-primary">Get Started</a>
      <button class="md:hidden text-white text-2xl" id="menuToggle">☰</button>`;
  }

  /* ── MOBILE MENU ── */
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) {
    mobileNav.innerHTML = `
      <button id="menuClose" class="absolute top-6 right-6 text-white text-3xl">✕</button>
      <a href="index.html"        class="mobile-nav-link">Home</a>
      <a href="about.html"        class="mobile-nav-link">About</a>
      <a href="services.html"     class="mobile-nav-link">Services</a>
      <a href="testimonials.html" class="mobile-nav-link">Testimonials</a>
      <a href="pricing.html"      class="mobile-nav-link">Pricing</a>
      <a href="contact.html"      class="mobile-nav-link">Contact</a>`;
  }

  /* ── FOOTER ── */
  const footerEl = document.getElementById('siteFooter');
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="md:col-span-2">
          <!-- ✏️ LOGO: rendered by main.js from config.js → logo settings -->
          <div class="brand-logo logo-text text-4xl text-white mb-1" data-context="footer"></div>
          <p class="mono text-xs text-gray-600 tracking-widest mb-4 brand-tagline"></p>
          <p class="text-gray-400 barlow max-w-xs">
            <!-- ✏️ FOOTER TAGLINE: Edit in config.js → brand.heroSubtext or directly here -->
            We craft brands, websites, and visual identities that demand attention and drive results.
          </p>
          <div class="flex gap-4 mt-6">
            <!-- ✏️ SOCIAL LINKS: Edit URLs in config.js → social -->
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
            <!-- ✏️ CONTACT INFO: Edit in config.js → contact -->
            <li><a href="#" data-contact="email" class="transition-colors hover:text-red-500"></a></li>
            <li><a href="#" data-contact="phone" class="transition-colors hover:text-red-500"></a></li>
            <li><span data-contact="address"></span></li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto mt-12 pt-6 border-t border-red-900/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- ✏️ COPYRIGHT: Change year and name below -->
        <p class="text-gray-600 text-sm barlow">© 2026 AXIVO. All rights reserved.</p>
        <p class="text-gray-600 text-sm barlow">Crafted with passion and obsession.</p>
      </div>`;
  }

  /* ── COOKIE BANNER ── */
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

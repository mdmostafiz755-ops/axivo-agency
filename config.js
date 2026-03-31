/**
 * ╔══════════════════════════════════════════════════════════╗
 *  VORTEX STUDIO — SITE CONFIGURATION  (config.js)
 *  ─────────────────────────────────────────────────────────
 *  This is the SINGLE SOURCE OF TRUTH for all site content.
 *  Edit only this file for most changes — no HTML needed.
 * ╚══════════════════════════════════════════════════════════╝
 */

const SITE_CONFIG = {

  // ══════════════════════════════════════════════
  //  BRAND
  //  ✏️ Change your agency name, hero text, tagline
  // ══════════════════════════════════════════════
  brand: {
    name:       "AXIVO",           // ← Agency name (nav, footer, loader)
    tagline:    "Design Studio",    // ← Shown under logo in footer
    est:        "2016",             // ← Year established
    heroLine1:  "WE CRAFT",
    heroLine2:  "BRANDS",           // ← Shown in red
    heroLine3:  "THAT",
    heroLine4:  "DOMINATE",         // ← Shown as stroke/outline
    heroSubtext: "We turn raw ideas into visual powerhouses. Branding, web, motion — we build identities that leave marks.",
    eyebrow:    "✦ Award-Winning Design Agency",
  },

  // ══════════════════════════════════════════════
  //  LOGO
  //
  //  ✏️ HOW TO USE YOUR IMAGE LOGO:
  //  1. Place logo file in same folder as index.html
  //  2. Set  useLogo: true
  //  3. Set  logoFile: "your-logo.png"  (no leading ./)
  //
  //  GITHUB PAGES PATH RULES:
  //  ✅  logoFile: "axivologo.png"          (root level)
  //  ✅  logoFile: "assets/axivologo.png"   (in assets/ folder)
  //  ❌  logoFile: "./assets/axivologo.png" (breaks on GH Pages)
  //  ❌  logoFile: "../assets/axivologo.png"
  //
  //  TIP: If logo still doesn't show, open DevTools → Console.
  //  You'll see "[VORTEX] Logo image not found: <full URL>"
  //  which tells you the exact path it tried.
  // ══════════════════════════════════════════════
  logo: {
    useLogo:          true,                        // true = image, false = text
    logoFile:         "assets/axivologo.png",      // path from index.html folder
    logoHeight:       "40px",                      // nav height
    logoHeightFooter: "36px",                      // footer height
    loaderLogoFile:   "assets/axivologo.png",      // loader screen logo
    loaderLogoHeight: "80px",                      // loader logo height
    textColorNav:     "white",                     // fallback text color
    textColorFooter:  "white",
  },

  // ══════════════════════════════════════════════
  //  CONTACT INFO  ✏️ Edit your details here
  // ══════════════════════════════════════════════
  contact: {
    email:    "hello@vortexstudio.co",
    phone:    "+1 (555) 000-1234",
    address:  "New York, NY 10001",
    hours:    "Mon – Fri, 9am – 6pm EST",
    mapEmbed: "", // Optional: Google Maps embed URL
  },

  // ══════════════════════════════════════════════
  //  SOCIAL LINKS  ✏️ Replace # with your URLs
  // ══════════════════════════════════════════════
  social: {
    linkedin:  "#",
    twitter:   "#",
    dribbble:  "#",
    behance:   "#",
    instagram: "#",
  },

  // ══════════════════════════════════════════════
  //  GOOGLE SHEETS CONTACT FORM
  //  Follow GOOGLE_SHEETS_SETUP.md then paste URL here
  // ══════════════════════════════════════════════
  googleSheetsUrl: "https://script.google.com/macros/s/AKfycbyHmIYwEtfZtNaH_Xd93D2MKTsBfAsrOQ7PJlWBt9ZNGF4ImTFfdHxfPopvpX2ie3MZAg/exec",

  // ══════════════════════════════════════════════
  //  STATS  ✏️ Update your numbers
  // ══════════════════════════════════════════════
  stats: [
    { num: "120+", label: "Projects Delivered" },
    { num: "8yr",  label: "Industry Experience" },
    { num: "98%",  label: "Client Satisfaction" },
    { num: "40+",  label: "Awards Won" },
  ],

  // ╔══════════════════════════════════════════════════════════╗
  //  PROJECTS
  //
  //  ✏️ HOW TO ADD IMAGES — READ THIS CAREFULLY
  //  ─────────────────────────────────────────
  //  Every image slot (cover + gallery) works the same way:
  //
  //  PLACEHOLDER (no image file needed):
  //    useImage: false,
  //    gradient: "linear-gradient(135deg, #1a0000, #cc0000)",
  //    caption:  "Brand identity system overview",   ← shown in lightbox
  //
  //  YOUR OWN IMAGE:
  //    useImage: true,
  //    image:    "assets/projects/project-name/cover.jpg",  ← path from index.html
  //    alt:      "Brand identity system overview",          ← screen-reader text
  //    caption:  "Brand identity system overview",          ← shown in lightbox
  //
  //  IMAGE QUALITY TIPS:
  //  • Use JPG for photos, PNG for graphics with transparency, WebP for best compression
  //  • Recommended sizes:
  //      Cover image:      1600×900px  (16:9)
  //      Wide gallery img: 1600×900px  (16:9) — for full-width slots
  //      Square gallery:   800×800px   (1:1)  — for square slots
  //      Tall gallery:     800×1067px  (3:4)  — for portrait slots
  //  • Keep files under 400KB for fast loading (use squoosh.app to compress)
  //  • Recommended folder structure:
  //      assets/
  //        projects/
  //          crimson-finance/
  //            cover.jpg
  //            01-logo.jpg
  //            02-guidelines.jpg
  //            ... etc
  //
  //  GALLERY LAYOUT — each image has a "span" property:
  //    span: "wide"   → full width (2 columns)
  //    span: "normal" → half width (1 column)
  //    span: "tall"   → half width but taller (portrait)
  //  Mixing these creates a professional editorial grid layout.
  //
  //  HOW TO ADD A NEW PROJECT:
  //  1. Copy the entire { id: 1, ... } block
  //  2. Paste after the last project (before the closing ])
  //  3. Change id to next number (5, 6, 7...)
  //  4. Fill in all the details
  //  5. Set featured: true to show it on the homepage grid
  // ╚══════════════════════════════════════════════════════════╝
  projects: [

    // ─────────────────────────────────────────────────────────
    //  PROJECT 1
    // ─────────────────────────────────────────────────────────
    {
      id:        1,
      tag:       "Brand Identity",
      title:     "CRIMSON FINANCE",
      shortDesc: "Complete brand overhaul for a fintech startup — logo, system, web presence.",
      client:    "Crimson Finance Ltd.",
      year:      "2024",
      duration:  "6 Weeks",
      result:    "+340% Brand Recall",
      featured:  true,
      services:  ["Logo Design", "Brand Guidelines", "Web Design", "Stationery"],

      // ── COVER IMAGE ──────────────────────────────────────
      // ✏️ Replace with your cover image:
      //   useImage: true,
      //   image: "assets/projects/crimson-finance/cover.jpg",
      //   alt: "Crimson Finance brand identity cover",
      useImage: false,
      gradient: "linear-gradient(135deg, #1a0000 0%, #8b0000 50%, #ff0000 100%)",

      // ── BODY TEXT ─────────────────────────────────────────
      // ✏️ Edit the project story here (HTML allowed: <h2> <p> <ul> <li>)
      body: `
        <h2>The Challenge</h2>
        <p>Crimson Finance had a powerful product but a visual identity that looked like every other fintech — sterile, cold, and forgettable. They needed a brand that could stand in rooms with legacy banks and command the same respect, while still feeling modern and aggressive.</p>
        <h2>Our Approach</h2>
        <p>We started by interrogating what Crimson actually stood for — not what they hoped to be, but what made their clients choose them over incumbents. The answer: precision and nerve. That became the design DNA.</p>
        <p>The identity system uses a sharp, geometric mark that functions as both a logomark and a system element — appearing in patterns, cropped on collateral, and animated in digital contexts. The color system is unapologetically red-forward, using black as its anchor.</p>
        <h2>The Result</h2>
        <p>Post-launch brand recall studies showed a 340% improvement versus the old identity. Investor meetings felt different immediately — they were being taken seriously from the first handshake.</p>
      `,

      // ── GALLERY — 20 image slots ─────────────────────────
      // ✏️ HOW TO REPLACE A PLACEHOLDER WITH YOUR IMAGE:
      //   1. Change  useImage: false  →  useImage: true
      //   2. Remove the  gradient: "..."  line
      //   3. Add  image: "assets/projects/crimson-finance/01-logo.jpg"
      //   4. Update  caption  and  alt  to describe what's shown
      //
      // Layout guide:
      //   span:"wide"   = full-width panoramic (2 cols)
      //   span:"normal" = half-width standard  (1 col)
      //   span:"tall"   = half-width portrait  (1 col, taller)
      gallery: [

        // ── Row 1: full-width hero shot ──
        {
          useImage: false,
          gradient: "linear-gradient(135deg,#8b0000,#ff0000)",
          span:    "wide",
          caption: "✏️ REPLACE: Full brand overview / hero shot — 1600×600px recommended",
          alt:     "Crimson Finance brand identity overview",
        },

        // ── Row 2: two standard images side by side ──
        {
          useImage: false,
          gradient: "linear-gradient(160deg,#1a0000,#cc0000)",
          span:    "normal",
          caption: "✏️ REPLACE: Primary logo on dark background — 800×600px",
          alt:     "Crimson Finance primary logo",
        },
        {
          useImage: false,
          gradient: "linear-gradient(160deg,#cc0000,#ff4444)",
          span:    "normal",
          caption: "✏️ REPLACE: Logo variations and lockups — 800×600px",
          alt:     "Crimson Finance logo variations",
        },

        // ── Row 3: tall portrait + standard ──
        {
          useImage: false,
          gradient: "linear-gradient(180deg,#0a0000,#8b0000)",
          span:    "tall",
          caption: "✏️ REPLACE: Brand guidelines cover — 800×1067px",
          alt:     "Crimson Finance brand guidelines",
        },
        {
          useImage: false,
          gradient: "linear-gradient(135deg,#ff0000,#1a0000)",
          span:    "normal",
          caption: "✏️ REPLACE: Color palette swatch sheet — 800×600px",
          alt:     "Crimson Finance color palette",
        },

        // ── Row 4: standard + tall ──
        {
          useImage: false,
          gradient: "linear-gradient(135deg,#1a1a1a,#8b0000)",
          span:    "normal",
          caption: "✏️ REPLACE: Typography system — 800×600px",
          alt:     "Crimson Finance typography",
        },
        {
          useImage: false,
          gradient: "linear-gradient(180deg,#8b0000,#1a0000)",
          span:    "tall",
          caption: "✏️ REPLACE: Business card mockup — 800×1067px",
          alt:     "Crimson Finance business cards",
        },

        // ── Row 5: full-width ──
        {
          useImage: false,
          gradient: "linear-gradient(135deg,#0a0a0a,#cc0000)",
          span:    "wide",
          caption: "✏️ REPLACE: Website homepage design — 1600×600px",
          alt:     "Crimson Finance website design",
        },

        // ── Row 6: three images in a row (all normal) ──
        {
          useImage: false,
          gradient: "linear-gradient(135deg,#2a0000,#ff0000)",
          span:    "normal",
          caption: "✏️ REPLACE: Letterhead design — 800×600px",
          alt:     "Crimson Finance letterhead",
        },
        {
          useImage: false,
          gradient: "linear-gradient(135deg,#ff0000,#8b0000)",
          span:    "normal",
          caption: "✏️ REPLACE: Email signature template — 800×600px",
          alt:     "Crimson Finance email signature",
        },

        // ── Row 7 ──
        {
          useImage: false,
          gradient: "linear-gradient(160deg,#0d0d0d,#e60000)",
          span:    "normal",
          caption: "✏️ REPLACE: Brand pattern / texture — 800×600px",
          alt:     "Crimson Finance brand pattern",
        },
        {
          useImage: false,
          gradient: "linear-gradient(160deg,#5c0000,#ff3333)",
          span:    "normal",
          caption: "✏️ REPLACE: Social media templates — 800×600px",
          alt:     "Crimson Finance social media design",
        },

        // ── Row 8: full-width environment shot ──
        {
          useImage: false,
          gradient: "linear-gradient(135deg,#1a0000,#cc0000,#1a1a1a)",
          span:    "wide",
          caption: "✏️ REPLACE: Brand in environment / mockup — 1600×600px",
          alt:     "Crimson Finance brand environment",
        },

        // ── Row 9: tall + normal ──
        {
          useImage: false,
          gradient: "linear-gradient(180deg,#8b0000,#ff0000)",
          span:    "tall",
          caption: "✏️ REPLACE: Mobile app UI — 800×1067px",
          alt:     "Crimson Finance mobile app",
        },
        {
          useImage: false,
          gradient: "linear-gradient(135deg,#0a0000,#8b0000)",
          span:    "normal",
          caption: "✏️ REPLACE: Presentation deck slide — 800×600px",
          alt:     "Crimson Finance presentation",
        },

        // ── Row 10: two normal ──
        {
          useImage: false,
          gradient: "linear-gradient(160deg,#cc0000,#0a0a0a)",
          span:    "normal",
          caption: "✏️ REPLACE: Branded merchandise — 800×600px",
          alt:     "Crimson Finance merchandise",
        },
        {
          useImage: false,
          gradient: "linear-gradient(160deg,#ff4444,#1a0000)",
          span:    "normal",
          caption: "✏️ REPLACE: Final brand board — 800×600px",
          alt:     "Crimson Finance brand board",
        },

        // ── Slots 18–20: extra/bonus ──
        {
          useImage: false,
          gradient: "linear-gradient(135deg,#8b0000,#0d0d0d)",
          span:    "wide",
          caption: "✏️ REPLACE: Before & after comparison — 1600×600px",
          alt:     "Crimson Finance before and after",
        },
        {
          useImage: false,
          gradient: "linear-gradient(135deg,#ff0000,#2a0000)",
          span:    "normal",
          caption: "✏️ REPLACE: Detail shot — 800×600px",
          alt:     "Crimson Finance detail",
        },
        {
          useImage: false,
          gradient: "linear-gradient(135deg,#1a1a1a,#cc0000)",
          span:    "normal",
          caption: "✏️ REPLACE: Final deliverable overview — 800×600px",
          alt:     "Crimson Finance final deliverables",
        },

      ], // end gallery
    }, // end project 1

    // ─────────────────────────────────────────────────────────
    //  PROJECT 2
    // ─────────────────────────────────────────────────────────
    {
      id:        2,
      tag:       "Web Design",
      title:     "NOIR ARCHITECTURE",
      shortDesc: "Editorial website design for a prestigious architecture firm in Milan.",
      client:    "Noir Architecture Studio",
      year:      "2024",
      duration:  "8 Weeks",
      result:    "+180% Lead Generation",
      featured:  true,
      services:  ["Web Design", "Frontend Development", "Photography Direction", "SEO"],

      // ✏️ COVER: replace with project-noir/cover.jpg
      useImage: false,
      gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #cc0000 100%)",

      body: `
        <h2>The Challenge</h2>
        <p>Noir Architecture's previous website was built on a template from 2018. For a firm that had designed some of the most striking buildings in northern Italy, this was an embarrassment — they were losing commissions to less talented competitors because of how they presented online.</p>
        <h2>Our Approach</h2>
        <p>Architecture is a visual medium, so we designed the site to feel like walking through a building. Navigation is spatial, photography is full-bleed and immersive, and project pages unfold sequentially like you're moving through a space. We worked with a photographer to re-shoot key projects.</p>
        <h2>The Result</h2>
        <p>Lead generation increased 180% in the first quarter after launch. Noir started receiving RFPs from clients they'd previously had to chase.</p>
      `,

      gallery: [
        // ✏️ REPLACE each item with your images following the same pattern as Project 1
        { useImage:false, gradient:"linear-gradient(135deg,#1a1a1a,#cc0000)", span:"wide",   caption:"✏️ REPLACE: Website homepage full-bleed — 1600×600px",   alt:"Noir Architecture homepage" },
        { useImage:false, gradient:"linear-gradient(160deg,#0d0d0d,#8b0000)", span:"normal", caption:"✏️ REPLACE: Desktop hero section — 800×600px",           alt:"Noir Architecture desktop hero" },
        { useImage:false, gradient:"linear-gradient(160deg,#cc0000,#0a0a0a)", span:"normal", caption:"✏️ REPLACE: Mobile responsive view — 800×600px",         alt:"Noir Architecture mobile view" },
        { useImage:false, gradient:"linear-gradient(180deg,#0a0a0a,#cc0000)", span:"tall",   caption:"✏️ REPLACE: Project detail page — 800×1067px",           alt:"Noir Architecture project page" },
        { useImage:false, gradient:"linear-gradient(135deg,#222,#8b0000)",    span:"normal", caption:"✏️ REPLACE: Navigation & menu design — 800×600px",       alt:"Noir Architecture navigation" },
        { useImage:false, gradient:"linear-gradient(135deg,#8b0000,#1a1a1a)", span:"normal", caption:"✏️ REPLACE: Typography system — 800×600px",              alt:"Noir Architecture typography" },
        { useImage:false, gradient:"linear-gradient(180deg,#cc0000,#0d0d0d)", span:"tall",   caption:"✏️ REPLACE: Contact page — 800×1067px",                  alt:"Noir Architecture contact page" },
        { useImage:false, gradient:"linear-gradient(135deg,#0d0d0d,#cc0000,#0a0a0a)", span:"wide", caption:"✏️ REPLACE: Full-page scroll mockup — 1600×600px",alt:"Noir Architecture full page" },
        { useImage:false, gradient:"linear-gradient(160deg,#1a1a1a,#8b0000)", span:"normal", caption:"✏️ REPLACE: Projects grid page — 800×600px",            alt:"Noir Architecture projects grid" },
        { useImage:false, gradient:"linear-gradient(160deg,#8b0000,#222)",    span:"normal", caption:"✏️ REPLACE: About page — 800×600px",                     alt:"Noir Architecture about page" },
        { useImage:false, gradient:"linear-gradient(135deg,#0a0a0a,#cc0000)", span:"normal", caption:"✏️ REPLACE: Image gallery module — 800×600px",           alt:"Noir Architecture gallery module" },
        { useImage:false, gradient:"linear-gradient(135deg,#cc0000,#1a1a1a)", span:"normal", caption:"✏️ REPLACE: Footer design — 800×600px",                  alt:"Noir Architecture footer" },
        { useImage:false, gradient:"linear-gradient(135deg,#111,#8b0000)",    span:"wide",   caption:"✏️ REPLACE: Device mockup spread — 1600×600px",          alt:"Noir Architecture device mockup" },
        { useImage:false, gradient:"linear-gradient(180deg,#0d0d0d,#8b0000)", span:"tall",   caption:"✏️ REPLACE: iPad view — 800×1067px",                     alt:"Noir Architecture iPad" },
        { useImage:false, gradient:"linear-gradient(135deg,#8b0000,#0a0a0a)", span:"normal", caption:"✏️ REPLACE: Performance / Lighthouse score — 800×600px", alt:"Noir Architecture performance" },
        { useImage:false, gradient:"linear-gradient(160deg,#cc0000,#111)",    span:"normal", caption:"✏️ REPLACE: CMS interface — 800×600px",                  alt:"Noir Architecture CMS" },
        { useImage:false, gradient:"linear-gradient(160deg,#1a1a1a,#cc0000)", span:"wide",   caption:"✏️ REPLACE: Before & after — 1600×600px",               alt:"Noir Architecture before after" },
        { useImage:false, gradient:"linear-gradient(135deg,#0a0a0a,#8b0000)", span:"normal", caption:"✏️ REPLACE: Brand photography — 800×600px",              alt:"Noir Architecture photography" },
        { useImage:false, gradient:"linear-gradient(135deg,#cc0000,#0d0d0d)", span:"normal", caption:"✏️ REPLACE: Final launch screenshot — 800×600px",        alt:"Noir Architecture launch" },
        { useImage:false, gradient:"linear-gradient(135deg,#222,#cc0000)",    span:"normal", caption:"✏️ REPLACE: Awards / press coverage — 800×600px",        alt:"Noir Architecture awards" },
      ],
    }, // end project 2

    // ─────────────────────────────────────────────────────────
    //  PROJECT 3
    // ─────────────────────────────────────────────────────────
    {
      id:        3,
      tag:       "Motion & Visual",
      title:     "FLUX MUSIC LABEL",
      shortDesc: "Dynamic visual identity and motion graphics for an independent music label.",
      client:    "Flux Records",
      year:      "2023",
      duration:  "4 Weeks",
      result:    "2M+ Views on Launch",
      featured:  true,
      services:  ["Visual Identity", "Motion Graphics", "Social Media Kit", "Album Artwork"],

      // ✏️ COVER: replace with project-flux/cover.jpg
      useImage: false,
      gradient: "linear-gradient(135deg, #2d0000 0%, #5c0000 40%, #ff3333 100%)",

      body: `
        <h2>The Challenge</h2>
        <p>Flux Records was launching with a roster of artists spanning electronic, hip-hop, and experimental genres. They needed a visual identity flexible enough to stretch across styles while remaining distinctly Flux — not just a container for other people's aesthetics.</p>
        <h2>Our Approach</h2>
        <p>We built the identity around the concept of signal — the raw electrical energy of music before it's processed into sound. The mark is abstracted waveform geometry; the motion language uses glitch effects and frequency visualizations that feel tactile and alive. The system includes templates for album artwork, social content, promotional materials, and stage backdrops.</p>
        <h2>The Result</h2>
        <p>The label launch campaign generated over 2 million views across platforms in the first week. Three of Flux's artists charted in their respective genres within 90 days — and the visual identity was cited in multiple industry publications as a benchmark for music branding.</p>
      `,

      gallery: [
        { useImage:false, gradient:"linear-gradient(135deg,#5c0000,#ff3333)",   span:"wide",   caption:"✏️ REPLACE: Label identity overview — 1600×600px",         alt:"Flux Music identity overview" },
        { useImage:false, gradient:"linear-gradient(160deg,#1a0000,#cc0000)",   span:"normal", caption:"✏️ REPLACE: Primary logo mark — 800×600px",                alt:"Flux Music logo" },
        { useImage:false, gradient:"linear-gradient(160deg,#ff3333,#2d0000)",   span:"normal", caption:"✏️ REPLACE: Logo on dark background — 800×600px",           alt:"Flux Music logo dark" },
        { useImage:false, gradient:"linear-gradient(180deg,#0a0000,#8b0000)",   span:"tall",   caption:"✏️ REPLACE: Album artwork sample — 800×1067px",             alt:"Flux Music album art" },
        { useImage:false, gradient:"linear-gradient(135deg,#cc0000,#2d0000)",   span:"normal", caption:"✏️ REPLACE: Motion frame 1 — 800×600px",                    alt:"Flux Music motion frame 1" },
        { useImage:false, gradient:"linear-gradient(135deg,#ff3333,#0a0000)",   span:"normal", caption:"✏️ REPLACE: Motion frame 2 — 800×600px",                    alt:"Flux Music motion frame 2" },
        { useImage:false, gradient:"linear-gradient(180deg,#5c0000,#ff3333)",   span:"tall",   caption:"✏️ REPLACE: Social media story template — 800×1067px",      alt:"Flux Music story template" },
        { useImage:false, gradient:"linear-gradient(135deg,#0a0000,#cc0000,#2d0000)", span:"wide", caption:"✏️ REPLACE: Social media grid preview — 1600×600px",   alt:"Flux Music social grid" },
        { useImage:false, gradient:"linear-gradient(160deg,#8b0000,#ff3333)",   span:"normal", caption:"✏️ REPLACE: Instagram post template — 800×600px",           alt:"Flux Music Instagram" },
        { useImage:false, gradient:"linear-gradient(160deg,#2d0000,#cc0000)",   span:"normal", caption:"✏️ REPLACE: Facebook cover template — 800×600px",           alt:"Flux Music Facebook cover" },
        { useImage:false, gradient:"linear-gradient(135deg,#ff3333,#5c0000)",   span:"normal", caption:"✏️ REPLACE: Event poster — 800×600px",                      alt:"Flux Music event poster" },
        { useImage:false, gradient:"linear-gradient(135deg,#1a0000,#ff3333)",   span:"normal", caption:"✏️ REPLACE: Merchandise design — 800×600px",               alt:"Flux Music merchandise" },
        { useImage:false, gradient:"linear-gradient(135deg,#5c0000,#0a0000)",   span:"wide",   caption:"✏️ REPLACE: Stage backdrop design — 1600×600px",            alt:"Flux Music stage backdrop" },
        { useImage:false, gradient:"linear-gradient(180deg,#cc0000,#2d0000)",   span:"tall",   caption:"✏️ REPLACE: Artist promo card — 800×1067px",                alt:"Flux Music promo card" },
        { useImage:false, gradient:"linear-gradient(135deg,#0a0000,#5c0000)",   span:"normal", caption:"✏️ REPLACE: Color system — 800×600px",                      alt:"Flux Music colors" },
        { useImage:false, gradient:"linear-gradient(160deg,#ff3333,#1a0000)",   span:"normal", caption:"✏️ REPLACE: Typography & typeface — 800×600px",             alt:"Flux Music typography" },
        { useImage:false, gradient:"linear-gradient(160deg,#2d0000,#ff3333)",   span:"wide",   caption:"✏️ REPLACE: Brand guidelines spread — 1600×600px",          alt:"Flux Music brand guidelines" },
        { useImage:false, gradient:"linear-gradient(135deg,#8b0000,#ff3333)",   span:"normal", caption:"✏️ REPLACE: Newsletter template — 800×600px",               alt:"Flux Music newsletter" },
        { useImage:false, gradient:"linear-gradient(135deg,#ff3333,#0a0000)",   span:"normal", caption:"✏️ REPLACE: Playlist cover art — 800×600px",                alt:"Flux Music playlist art" },
        { useImage:false, gradient:"linear-gradient(135deg,#5c0000,#cc0000)",   span:"normal", caption:"✏️ REPLACE: Campaign wrap-up shot — 800×600px",             alt:"Flux Music campaign" },
      ],
    }, // end project 3

    // ─────────────────────────────────────────────────────────
    //  PROJECT 4
    // ─────────────────────────────────────────────────────────
    {
      id:        4,
      tag:       "UI/UX Design",
      title:     "APEX COMMERCE",
      shortDesc: "Full e-commerce UX redesign resulting in a 3x increase in conversions.",
      client:    "Apex Commerce Inc.",
      year:      "2023",
      duration:  "10 Weeks",
      result:    "3x Conversion Rate",
      featured:  true,
      services:  ["UX Research", "UI Design", "Prototyping", "A/B Testing"],

      // ✏️ COVER: replace with project-apex/cover.jpg
      useImage: false,
      gradient: "linear-gradient(135deg, #0d0d0d 0%, #2a0000 50%, #e60000 100%)",

      body: `
        <h2>The Challenge</h2>
        <p>Apex Commerce had a $40M/year e-commerce operation running on a UX that hadn't been significantly updated since 2019. Cart abandonment was 78%. Mobile conversion was less than a third of desktop.</p>
        <h2>Our Approach</h2>
        <p>We started with a full UX audit combined with session recording analysis and user interviews. The findings were clear: the checkout flow had 11 unnecessary steps, product pages buried the key conversion signals, and mobile was an afterthought. We rebuilt the complete purchase journey from product discovery through post-purchase confirmation. Every interaction was prototyped and tested with real users.</p>
        <h2>The Result</h2>
        <p>Within 90 days of launch, overall conversion tripled. Cart abandonment dropped to 52%. Mobile conversion reached near-parity with desktop. The $40M business became a $65M business in one fiscal year.</p>
      `,

      gallery: [
        { useImage:false, gradient:"linear-gradient(135deg,#2a0000,#e60000)",       span:"wide",   caption:"✏️ REPLACE: Homepage redesign overview — 1600×600px",    alt:"Apex Commerce homepage" },
        { useImage:false, gradient:"linear-gradient(160deg,#0d0d0d,#cc0000)",       span:"normal", caption:"✏️ REPLACE: Product listing page — 800×600px",            alt:"Apex Commerce product listing" },
        { useImage:false, gradient:"linear-gradient(160deg,#e60000,#1a0000)",       span:"normal", caption:"✏️ REPLACE: Product detail page — 800×600px",             alt:"Apex Commerce product detail" },
        { useImage:false, gradient:"linear-gradient(180deg,#0d0d0d,#e60000)",       span:"tall",   caption:"✏️ REPLACE: Mobile product view — 800×1067px",            alt:"Apex Commerce mobile product" },
        { useImage:false, gradient:"linear-gradient(135deg,#1a0000,#cc0000)",       span:"normal", caption:"✏️ REPLACE: Cart redesign — 800×600px",                   alt:"Apex Commerce cart" },
        { useImage:false, gradient:"linear-gradient(135deg,#e60000,#111)",          span:"normal", caption:"✏️ REPLACE: Checkout step 1 — 800×600px",                 alt:"Apex Commerce checkout step 1" },
        { useImage:false, gradient:"linear-gradient(180deg,#111,#e60000)",          span:"tall",   caption:"✏️ REPLACE: Checkout step 2 — 800×1067px",                alt:"Apex Commerce checkout step 2" },
        { useImage:false, gradient:"linear-gradient(135deg,#0d0d0d,#cc0000,#0a0000)", span:"wide", caption:"✏️ REPLACE: Full checkout flow — 1600×600px",             alt:"Apex Commerce checkout flow" },
        { useImage:false, gradient:"linear-gradient(160deg,#2a0000,#e60000)",       span:"normal", caption:"✏️ REPLACE: Order confirmation page — 800×600px",         alt:"Apex Commerce order confirmation" },
        { useImage:false, gradient:"linear-gradient(160deg,#cc0000,#0d0d0d)",       span:"normal", caption:"✏️ REPLACE: User account dashboard — 800×600px",          alt:"Apex Commerce account" },
        { useImage:false, gradient:"linear-gradient(135deg,#1a0000,#e60000)",       span:"normal", caption:"✏️ REPLACE: Search & filter UX — 800×600px",              alt:"Apex Commerce search" },
        { useImage:false, gradient:"linear-gradient(135deg,#e60000,#2a0000)",       span:"normal", caption:"✏️ REPLACE: Mobile checkout flow — 800×600px",            alt:"Apex Commerce mobile checkout" },
        { useImage:false, gradient:"linear-gradient(135deg,#111,#cc0000)",          span:"wide",   caption:"✏️ REPLACE: A/B test results visualization — 1600×600px",alt:"Apex Commerce A/B test" },
        { useImage:false, gradient:"linear-gradient(180deg,#cc0000,#0d0d0d)",       span:"tall",   caption:"✏️ REPLACE: Wireframe progression — 800×1067px",          alt:"Apex Commerce wireframes" },
        { useImage:false, gradient:"linear-gradient(135deg,#0a0000,#e60000)",       span:"normal", caption:"✏️ REPLACE: User journey map — 800×600px",                alt:"Apex Commerce user journey" },
        { useImage:false, gradient:"linear-gradient(160deg,#e60000,#111)",          span:"normal", caption:"✏️ REPLACE: Heatmap analysis — 800×600px",                alt:"Apex Commerce heatmap" },
        { useImage:false, gradient:"linear-gradient(160deg,#2a0000,#cc0000)",       span:"wide",   caption:"✏️ REPLACE: Before & after comparison — 1600×600px",     alt:"Apex Commerce before after" },
        { useImage:false, gradient:"linear-gradient(135deg,#0d0d0d,#e60000)",       span:"normal", caption:"✏️ REPLACE: Design system components — 800×600px",        alt:"Apex Commerce design system" },
        { useImage:false, gradient:"linear-gradient(135deg,#e60000,#1a0000)",       span:"normal", caption:"✏️ REPLACE: Prototype demo screenshot — 800×600px",       alt:"Apex Commerce prototype" },
        { useImage:false, gradient:"linear-gradient(135deg,#cc0000,#0d0d0d)",       span:"normal", caption:"✏️ REPLACE: Final metrics dashboard — 800×600px",         alt:"Apex Commerce metrics" },
      ],
    }, // end project 4

    // ─────────────────────────────────────────────────────────
    //  ✏️ ADD MORE PROJECTS HERE
    //  Copy the block below, uncomment it, change the id,
    //  and fill in all the details.
    // ─────────────────────────────────────────────────────────
    // {
    //   id:        5,
    //   tag:       "Your Category",
    //   title:     "YOUR PROJECT TITLE",
    //   shortDesc: "One-line description shown on project cards.",
    //   client:    "Client Name",
    //   year:      "2025",
    //   duration:  "X Weeks",
    //   result:    "Key result stat",
    //   featured:  true,   // ← Set true to show on homepage
    //   services:  ["Service 1", "Service 2", "Service 3"],
    //   useImage:  true,
    //   image:     "assets/projects/your-project/cover.jpg",
    //   alt:       "Cover image alt text",
    //   body: `
    //     <h2>The Challenge</h2>
    //     <p>Describe the client's problem here.</p>
    //     <h2>Our Approach</h2>
    //     <p>Describe your process here.</p>
    //     <h2>The Result</h2>
    //     <p>Describe the outcome here.</p>
    //   `,
    //   gallery: [
    //     { useImage:true,  image:"assets/projects/your-project/01.jpg", span:"wide",   caption:"Image caption here", alt:"Alt text" },
    //     { useImage:true,  image:"assets/projects/your-project/02.jpg", span:"normal", caption:"Image caption here", alt:"Alt text" },
    //     { useImage:true,  image:"assets/projects/your-project/03.jpg", span:"normal", caption:"Image caption here", alt:"Alt text" },
    //     // ... add up to 20 items
    //   ],
    // },

  ], // end projects

  // ══════════════════════════════════════════════
  //  SERVICES  ✏️ Edit in this array
  // ══════════════════════════════════════════════
  services: [
    { num:"01", icon:"◈", name:"Brand Identity & Strategy",  desc:"We build complete brand systems from the ground up — logo, color, typography, tone of voice, and visual guidelines. Everything you need to stand out and stay consistent.",                                        tags:["Logo Design","Brand Guidelines","Naming","Tone of Voice"], highlight:false },
    { num:"02", icon:"◉", name:"Web Design & Development",   desc:"Websites that don't just look exceptional — they convert. We design and develop custom sites with blazing performance, pixel-perfect details, and UX that flows like water.",                                      tags:["UI/UX Design","Frontend Dev","CMS Integration","Performance"], highlight:false },
    { num:"03", icon:"◎", name:"Motion & Visual Production", desc:"Static is dead. We create motion graphics, animated brand assets, social content, and short films that make your brand move with purpose and personality.",                                                        tags:["Motion Graphics","Animation","Social Content","Video Editing"], highlight:false },
    { num:"04", icon:"▣", name:"Print & Packaging",          desc:"Physical touchpoints that demand to be held and kept. From brand books and stationery to packaging and environmental graphics — we make the tangible unforgettable.",                                             tags:["Packaging","Print Design","Signage","Collateral"], highlight:false },
    { num:"05", icon:"◆", name:"Digital Marketing Design",   desc:"Campaign visuals, social media systems, email templates, and ad creatives designed to stop thumbs and drive clicks. Performance design that earns its keep.",                                                     tags:["Social Media","Ad Creatives","Email Design","Campaign"], highlight:false },
    { num:"06", icon:"◇", name:"UI/UX Consulting",           desc:"Expert audits and redesign of digital products. We identify friction, improve conversion, and turn frustrating experiences into frictionless ones with measurable impact.",                                       tags:["UX Audit","Conversion Opt.","Prototyping","A/B Testing"], highlight:false },
    { num:"07", icon:"⬡", name:"Social Media & Content",     desc:"Thumb-stopping content systems built for consistency and growth. We design templates, content calendars, and creative strategies that turn followers into clients.",                                              tags:["Content Strategy","Templates","Reels Design","Copywriting"], highlight:false },
    { num:"08", icon:"⟡", name:"Photography Direction",      desc:"Brand photography that tells your story without words. We direct shoots, style scenes, and produce imagery that's unmistakably on-brand from first frame to last.",                                             tags:["Art Direction","Styling","Post Production","Brand Photos"], highlight:false },
    { num:"09", icon:"⊕", name:"Monthly Retainer",           desc:"Ongoing creative partnership for brands that never stop moving. A dedicated design team on-call for all your creative needs — consistent, fast, and always on brand.",                                          tags:["Ongoing Support","Priority Queue","Monthly Reports","Strategy"], highlight:true },
  ],

  // ══════════════════════════════════════════════
  //  TESTIMONIALS  ✏️ Edit in this array
  // ══════════════════════════════════════════════
  testimonials: [
    { text:"Vortex didn't just redesign our brand — they changed how our industry sees us.",                                                                                                              author:"Marcus Chen",    company:"CEO, Meridian Capital",        avatar:"MC", stars:5 },
    { text:"The team at Vortex transformed our outdated visual identity into something that feels genuinely powerful. Our investor decks now open doors they never did before.",                          author:"Sarah Linden",   company:"Founder, Linden Ventures",     avatar:"SL", stars:5 },
    { text:"Working with Vortex was the best business decision I made this year. They understood our positioning before we could even articulate it ourselves. Extraordinary.",                           author:"David Okafor",   company:"CMO, Apex Technologies",       avatar:"DO", stars:5 },
    { text:"Our website conversion rate jumped 240% in the first month after launch. These guys deliver commercial results, not just pretty pictures.",                                                  author:"Priya Sharma",   company:"Director, Novu Commerce",      avatar:"PS", stars:5 },
    { text:"I've worked with a dozen agencies. Vortex is different. They challenge your assumptions, push back when needed, and always deliver beyond what you asked for.",                               author:"James Whitmore", company:"Creative Director, Pulse Media", avatar:"JW", stars:5 },
    { text:"The motion graphics they created for our product launch went viral on LinkedIn — over 2 million views in a week. The ROI paid for the project ten times over.",                              author:"Amara Johnson",  company:"VP Marketing, Flux Labs",      avatar:"AJ", stars:5 },
  ],

  // ══════════════════════════════════════════════
  //  TEAM  ✏️ Edit in this array
  //  For photos: set usePhoto:true, photo:"path/to/file.jpg"
  // ══════════════════════════════════════════════
  team: [
    { initials:"AK", name:"Alex Krane",   role:"Creative Director", bio:"Leads creative vision and brand strategy across all projects."                              },
    { initials:"SR", name:"Sofia Ramos",  role:"Lead Designer",     bio:"Crafts every visual system with obsessive attention to detail."                             },
    { initials:"JT", name:"James Takeda", role:"Web Developer",     bio:"Turns designs into pixel-perfect, high-performance digital experiences."                   },
    { initials:"NV", name:"Nina Voss",    role:"Strategy Lead",     bio:"Connects design decisions to real business outcomes and growth."                            },
  ],

  // ══════════════════════════════════════════════
  //  PRICING  ✏️ Edit plans in this array
  // ══════════════════════════════════════════════
  pricing: [
    {
      plan:"Starter", price:"$3,500", period:"starting from / project", featured:false,
      features:["Brand identity (logo + 2 variants)","Basic brand guidelines document","Color palette & typography system","3 revision rounds","Source files delivery","2-week turnaround"],
      cta:"Start a Project",
    },
    {
      plan:"Studio", price:"$9,800", period:"starting from / project", featured:true, badge:"Most Popular",
      features:["Full brand identity system","Comprehensive brand guidelines","Custom website design (5 pages)","Frontend development included","Motion intro animation","5 revision rounds","4-week turnaround","30-day post-launch support"],
      cta:"Start a Project",
    },
    {
      plan:"Enterprise", price:"Custom", period:"scoped per engagement", featured:false,
      features:["Everything in Studio, plus:","Full brand ecosystem development","Multi-page website (unlimited)","Campaign design & social systems","Print & packaging design","Motion graphics package","Dedicated project manager","Unlimited revisions"],
      cta:"Let's Talk",
    },
  ],

};

window.SITE_CONFIG = SITE_CONFIG;

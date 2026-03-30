/**
 * ============================================================
 *  VORTEX STUDIO — SITE CONFIGURATION
 *  ============================================================
 *  Edit this file to update content across the entire site.
 *  No need to touch HTML files for basic info changes.
 *  ============================================================
 */

const SITE_CONFIG = {

  // ──────────────────────────────────────────────
  //  BRAND — Change your agency name, tagline, etc.
  // ──────────────────────────────────────────────
  brand: {
    name: "AXIVO",           // ← Your agency name (shown in nav & footer)
    tagline: "Design Studio", // ← Shown under logo in footer
    est: "2026",              // ← Year established
    heroLine1: "WE CRAFT",
    heroLine2: "BRANDS",      // ← Red word in hero
    heroLine3: "THAT",
    heroLine4: "DOMINATE",    // ← Stroke/outline word in hero
    heroSubtext: "We turn raw ideas into visual powerhouses. Branding, web, motion — we build identities that leave marks.",
    eyebrow: "✦ Award-Winning Design Agency",
  },

  // ──────────────────────────────────────────────
  //  LOGO
  //  Replace the text logo with an image logo by:
  //  1. Upload your logo file to the same folder as index.html
  //  2. Set useLogo: true
  //  3. Set logoFile to your filename e.g. "logo.svg" or "logo.png"
  //  4. Set logoHeight to control size in px
  // ──────────────────────────────────────────────
  logo: {
    useLogo: true,              // ← Set true to use image logo
    logoFile: "../assets/axivologo.png",        // ← Your logo filename
    logoHeight: "40px",          // ← Logo height in nav
    loaderLogoFile: "../assets/axivologo.png",  // ← Logo shown in loader (can be same or different)
    loaderLogoHeight: "80px",    // ← Logo height in loader animation
    // If useLogo is false, these text colors are used:
    textColorNav: "white",       // white or red
    textColorFooter: "white",
  },

  // ──────────────────────────────────────────────
  //  CONTACT INFO
  // ──────────────────────────────────────────────
  contact: {
    email: "axivo26@gmail.com",   // ← Your email
    phone: "+880 1747-076079",       // ← Your phone
    address: "University of Chittagong, IT Building, 4203,Bangladesh",    // ← Your address
    hours: "Mon – Fri, 9am – 6pm BST",
    mapEmbed: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.bing.com%2Fmaps%2Fdefault.aspx%3Fv%3D2%26pc%3DFACEBK%26mid%3D8100%26where1%3DUniversity%2520of%2520Chittagong%252C%2520IT%2520Building%252C%25204203%26FORM%3DFBKPL1%26mkt%3Den-US%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExVjREQWZpVU1ya2tqc25HYXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7OEMn0kMabKic2GsEC7K_eCijEDqDcImbT1lclskfGHWgCWLkulWdvjZ3sKw_aem_u909dGjppeW3-gdkXxIV-g&h=AT5XRIADYu3ZpO7rgfgqdy61jD2ebF7sZXhhn3Wa2DCFYo5VAyAXqHelfDsBHUZbvkkLX97BTkJC90pKA26hKSoa-CeLjxz-MMzCqJWp1ttV2YBVZvg2AkZN8GC3ht25RE8g",  // ← Optional: paste Google Maps embed URL here
  },

  // ──────────────────────────────────────────────
  //  SOCIAL LINKS
  // ──────────────────────────────────────────────
  social: {
    linkedin: "#",    // ← Your LinkedIn URL
    twitter: "#",     // ← Your Twitter/X URL
    dribbble: "#",    // ← Your Dribbble URL
    behance: "#",     // ← Your Behance URL
    instagram: "#",   // ← Your Instagram URL
  },

  // ──────────────────────────────────────────────
  //  GOOGLE SHEETS FORM INTEGRATION
  //  To connect contact form to Google Sheets:
  //  1. Open Google Sheets → Extensions → Apps Script
  //  2. Paste the script from GOOGLE_SHEETS_SETUP.md
  //  3. Deploy as Web App → copy the URL
  //  4. Paste it below
  // ──────────────────────────────────────────────
  googleSheetsUrl: "https://script.google.com/macros/s/AKfycbzXnZAxPWDsUP9eyxNbSuxGx1qnqh2mpKJohqj7Mn_iy7v6htN3yWW5bNTD7IMR-UH4/exec", // ← Paste your Apps Script URL

  // ──────────────────────────────────────────────
  //  STATS (shown in hero & testimonials page)
  // ──────────────────────────────────────────────
  stats: [
    { num: "120+", label: "Projects Delivered" },
    { num: "8yr",  label: "Industry Experience" },
    { num: "98%",  label: "Client Satisfaction" },
    { num: "40+",  label: "Awards Won" },
  ],

  // ──────────────────────────────────────────────
  //  PROJECTS
  //  To add a project:
  //  1. Copy any project object below and paste after the last one
  //  2. Change the id (must be unique, e.g. 5, 6, 7...)
  //  3. Fill in the details
  //  4. For images: place your image in the same folder,
  //     set useImage: true and set image to your filename
  //  5. gallery: add up to 4 image filenames for the gallery
  // ──────────────────────────────────────────────
  projects: [
    {
      id: 1,
      tag: "Brand Identity",
      title: "CRIMSON FINANCE",
      shortDesc: "Complete brand overhaul for a fintech startup — logo, system, web presence.",
      client: "Crimson Finance Ltd.",
      year: "2024",
      duration: "6 Weeks",
      result: "+340% Brand Recall",
      featured: true,  // ← Shows on homepage
      services: ["Logo Design", "Brand Guidelines", "Web Design", "Stationery"],
      // IMAGE SETUP:
      // Option A - Use gradient placeholder (no image needed):
      useImage: false,
      gradient: "linear-gradient(135deg, #1a0000 0%, #8b0000 50%, #ff0000 100%)",
      // Option B - Use your own image:
      // useImage: true,
      // image: "project-crimson-cover.jpg",   // ← filename in same folder
      // Gallery images (4 images shown on detail page)
      gallery: [
        // { useImage: false, gradient: "linear-gradient(135deg,#8b0000,#ff0000)" },
        // { useImage: true,  image: "crimson-1.jpg" },
        // Add up to 4 items following the same pattern
        { useImage: false, gradient: "linear-gradient(135deg,#8b0000,#ff0000)" },
        { useImage: false, gradient: "linear-gradient(135deg,#1a1a1a,#8b0000)" },
        { useImage: false, gradient: "linear-gradient(135deg,#ff0000,#1a0000)" },
        { useImage: false, gradient: "linear-gradient(135deg,#0a0a0a,#cc0000)" },
      ],
      body: `
        <h2>The Challenge</h2>
        <p>Crimson Finance had a powerful product but a visual identity that looked like every other fintech — sterile, cold, and forgettable. They needed a brand that could stand in rooms with legacy banks and command the same respect, while still feeling modern and aggressive.</p>
        <h2>Our Approach</h2>
        <p>We started by interrogating what Crimson actually stood for — not what they hoped to be, but what made their clients choose them over incumbents. The answer: precision and nerve. That became the design DNA.</p>
        <p>The identity system uses a sharp, geometric mark that functions as both a logomark and a system element — appearing in patterns, cropped on collateral, and animated in digital contexts.</p>
        <h2>The Result</h2>
        <p>Post-launch brand recall studies showed a 340% improvement versus the old identity. Investor meetings felt different immediately — they were being taken seriously from the first handshake.</p>
      `,
    },
    {
      id: 2,
      tag: "Web Design",
      title: "NOIR ARCHITECTURE",
      shortDesc: "Editorial website design for a prestigious architecture firm in Milan.",
      client: "Noir Architecture Studio",
      year: "2024",
      duration: "8 Weeks",
      result: "+180% Lead Generation",
      featured: true,
      services: ["Web Design", "Frontend Development", "Photography Direction", "SEO"],
      useImage: false,
      gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #cc0000 100%)",
      gallery: [
        { useImage: false, gradient: "linear-gradient(135deg,#1a1a1a,#cc0000)" },
        { useImage: false, gradient: "linear-gradient(135deg,#0d0d0d,#333)" },
        { useImage: false, gradient: "linear-gradient(135deg,#cc0000,#0a0a0a)" },
        { useImage: false, gradient: "linear-gradient(135deg,#222,#8b0000)" },
      ],
      body: `
        <h2>The Challenge</h2>
        <p>Noir Architecture's previous website was built on a template from 2018. For a firm that had designed some of the most striking buildings in northern Italy, this was an embarrassment — they were losing commissions to less talented competitors because of how they presented online.</p>
        <h2>Our Approach</h2>
        <p>Architecture is a visual medium, so we designed the site to feel like walking through a building. Navigation is spatial, photography is full-bleed and immersive, and project pages unfold sequentially like you're moving through a space.</p>
        <h2>The Result</h2>
        <p>Lead generation increased 180% in the first quarter after launch. Noir started receiving RFPs from clients they'd previously had to chase.</p>
      `,
    },
    {
      id: 3,
      tag: "Motion & Visual",
      title: "FLUX MUSIC LABEL",
      shortDesc: "Dynamic visual identity and motion graphics for an independent music label.",
      client: "Flux Records",
      year: "2023",
      duration: "4 Weeks",
      result: "2M+ Views on Launch",
      featured: true,
      services: ["Visual Identity", "Motion Graphics", "Social Media Kit", "Album Artwork"],
      useImage: false,
      gradient: "linear-gradient(135deg, #2d0000 0%, #5c0000 40%, #ff3333 100%)",
      gallery: [
        { useImage: false, gradient: "linear-gradient(135deg,#5c0000,#ff3333)" },
        { useImage: false, gradient: "linear-gradient(135deg,#1a0000,#cc0000)" },
        { useImage: false, gradient: "linear-gradient(135deg,#ff3333,#2d0000)" },
        { useImage: false, gradient: "linear-gradient(135deg,#0a0000,#8b0000)" },
      ],
      body: `
        <h2>The Challenge</h2>
        <p>Flux Records was launching with a roster of artists spanning electronic, hip-hop, and experimental genres. They needed a visual identity flexible enough to stretch across styles while remaining distinctly Flux.</p>
        <h2>Our Approach</h2>
        <p>We built the identity around the concept of signal — the raw electrical energy of music before it's processed into sound. The mark is abstracted waveform geometry; the motion language uses glitch effects and frequency visualizations.</p>
        <h2>The Result</h2>
        <p>The label launch campaign generated over 2 million views across platforms in the first week. Three of Flux's artists charted in their respective genres within 90 days.</p>
      `,
    },
    {
      id: 4,
      tag: "UI/UX Design",
      title: "APEX COMMERCE",
      shortDesc: "Full e-commerce UX redesign resulting in a 3x increase in conversions.",
      client: "Apex Commerce Inc.",
      year: "2023",
      duration: "10 Weeks",
      result: "3x Conversion Rate",
      featured: true,
      services: ["UX Research", "UI Design", "Prototyping", "A/B Testing"],
      useImage: false,
      gradient: "linear-gradient(135deg, #0d0d0d 0%, #2a0000 50%, #e60000 100%)",
      gallery: [
        { useImage: false, gradient: "linear-gradient(135deg,#2a0000,#e60000)" },
        { useImage: false, gradient: "linear-gradient(135deg,#0d0d0d,#cc0000)" },
        { useImage: false, gradient: "linear-gradient(135deg,#e60000,#1a0000)" },
        { useImage: false, gradient: "linear-gradient(135deg,#111,#8b0000)" },
      ],
      body: `
        <h2>The Challenge</h2>
        <p>Apex Commerce had a $40M/year e-commerce operation running on a UX that hadn't been significantly updated since 2019. Cart abandonment was 78%. Mobile conversion was less than a third of desktop.</p>
        <h2>Our Approach</h2>
        <p>We started with a full UX audit combined with session recording analysis and user interviews. We rebuilt the complete purchase journey from product discovery through post-purchase confirmation. Every interaction was prototyped and tested with real users before a single line of production code was written.</p>
        <h2>The Result</h2>
        <p>Within 90 days of launch, overall conversion tripled. Cart abandonment dropped to 52%. The $40M business became a $65M business in one fiscal year.</p>
      `,
    },
    // ── ADD MORE PROJECTS BELOW THIS LINE ──
    // Copy the block above, change id to 5, fill in your details
  ],

  // ──────────────────────────────────────────────
  //  SERVICES
  //  Edit name, description, tags, and icon for each service.
  //  To add a service: copy any service block and change the details.
  // ──────────────────────────────────────────────
  services: [
    {
      num: "01",
      icon: "◈",
      name: "Brand Identity & Strategy",
      desc: "We build complete brand systems from the ground up — logo, color, typography, tone of voice, and visual guidelines. Everything you need to stand out and stay consistent.",
      tags: ["Logo Design", "Brand Guidelines", "Naming", "Tone of Voice"],
      highlight: false,
    },
    {
      num: "02",
      icon: "◉",
      name: "Web Design & Development",
      desc: "Websites that don't just look exceptional — they convert. We design and develop custom sites with blazing performance, pixel-perfect details, and UX that flows like water.",
      tags: ["UI/UX Design", "Frontend Dev", "CMS Integration", "Performance"],
      highlight: false,
    },
    {
      num: "03",
      icon: "◎",
      name: "Motion & Visual Production",
      desc: "Static is dead. We create motion graphics, animated brand assets, social content, and short films that make your brand move with purpose and personality.",
      tags: ["Motion Graphics", "Animation", "Social Content", "Video Editing"],
      highlight: false,
    },
    {
      num: "04",
      icon: "▣",
      name: "Print & Packaging",
      desc: "Physical touchpoints that demand to be held and kept. From brand books and stationery to packaging and environmental graphics — we make the tangible unforgettable.",
      tags: ["Packaging", "Print Design", "Signage", "Collateral"],
      highlight: false,
    },
    {
      num: "05",
      icon: "◆",
      name: "Digital Marketing Design",
      desc: "Campaign visuals, social media systems, email templates, and ad creatives designed to stop thumbs and drive clicks. Performance design that earns its keep.",
      tags: ["Social Media", "Ad Creatives", "Email Design", "Campaign"],
      highlight: false,
    },
    {
      num: "06",
      icon: "◇",
      name: "UI/UX Consulting",
      desc: "Expert audits and redesign of digital products. We identify friction, improve conversion, and turn frustrating experiences into frictionless ones with measurable impact.",
      tags: ["UX Audit", "Conversion Opt.", "Prototyping", "A/B Testing"],
      highlight: false,
    },
    {
      num: "07",
      icon: "⬡",
      name: "Social Media & Content",
      desc: "Thumb-stopping content systems built for consistency and growth. We design templates, content calendars, and creative strategies that turn followers into clients.",
      tags: ["Content Strategy", "Templates", "Reels Design", "Copywriting"],
      highlight: false,
    },
    {
      num: "08",
      icon: "⟡",
      name: "Photography Direction",
      desc: "Brand photography that tells your story without words. We direct shoots, style scenes, and produce imagery that's unmistakably on-brand from first frame to last.",
      tags: ["Art Direction", "Styling", "Post Production", "Brand Photos"],
      highlight: false,
    },
    {
      num: "09",
      icon: "⊕",
      name: "Monthly Retainer",
      desc: "Ongoing creative partnership for brands that never stop moving. A dedicated design team on-call for all your creative needs — consistent, fast, and always on brand.",
      tags: ["Ongoing Support", "Priority Queue", "Monthly Reports", "Strategy"],
      highlight: true,  // ← Highlights this card in red
    },
  ],

  // ──────────────────────────────────────────────
  //  TESTIMONIALS
  //  To add: copy any block, fill in the details.
  //  avatar: initials of the person (e.g. "MC")
  // ──────────────────────────────────────────────
  testimonials: [
    {
      text: "Vortex didn't just redesign our brand — they changed how our industry sees us.",
      author: "Marcus Chen",
      company: "CEO, Meridian Capital",
      avatar: "MC",
      stars: 5,
    },
    {
      text: "The team at Vortex transformed our outdated visual identity into something that feels genuinely powerful. Our investor decks now open doors they never did before.",
      author: "Sarah Linden",
      company: "Founder, Linden Ventures",
      avatar: "SL",
      stars: 5,
    },
    {
      text: "Working with Vortex was the best business decision I made this year. They understood our positioning before we could even articulate it ourselves. Extraordinary.",
      author: "David Okafor",
      company: "CMO, Apex Technologies",
      avatar: "DO",
      stars: 5,
    },
    {
      text: "Our website conversion rate jumped 240% in the first month after launch. These guys deliver commercial results, not just pretty pictures.",
      author: "Priya Sharma",
      company: "Director, Novu Commerce",
      avatar: "PS",
      stars: 5,
    },
    {
      text: "I've worked with a dozen agencies. Vortex is different. They challenge your assumptions, push back when needed, and always deliver beyond what you asked for.",
      author: "James Whitmore",
      company: "Creative Director, Pulse Media",
      avatar: "JW",
      stars: 5,
    },
    {
      text: "The motion graphics they created for our product launch went viral on LinkedIn — over 2 million views in a week. The ROI paid for the project ten times over.",
      author: "Amara Johnson",
      company: "VP Marketing, Flux Labs",
      avatar: "AJ",
      stars: 5,
    },
  ],

  // ──────────────────────────────────────────────
  //  TEAM MEMBERS (About page)
  // ──────────────────────────────────────────────
  team: [
    {
      initials: "AK",
      name: "Alex Krane",
      role: "Creative Director",
      bio: "Leads creative vision and brand strategy across all projects.",
      // usePhoto: true,
      // photo: "team-alex.jpg",  // ← place file in same folder
    },
    {
      initials: "SR",
      name: "Sofia Ramos",
      role: "Lead Designer",
      bio: "Crafts every visual system with obsessive attention to detail.",
    },
    {
      initials: "JT",
      name: "James Takeda",
      role: "Web Developer",
      bio: "Turns designs into pixel-perfect, high-performance digital experiences.",
    },
    {
      initials: "NV",
      name: "Nina Voss",
      role: "Strategy Lead",
      bio: "Connects design decisions to real business outcomes and growth.",
    },
  ],

  // ──────────────────────────────────────────────
  //  PRICING
  // ──────────────────────────────────────────────
  pricing: [
    {
      plan: "Starter",
      price: "$3,500",
      period: "starting from / project",
      featured: false,
      features: [
        "Brand identity (logo + 2 variants)",
        "Basic brand guidelines document",
        "Color palette & typography system",
        "3 revision rounds",
        "Source files delivery",
        "2-week turnaround",
      ],
      cta: "Start a Project",
    },
    {
      plan: "Studio",
      price: "$9,800",
      period: "starting from / project",
      featured: true,
      badge: "Most Popular",
      features: [
        "Full brand identity system",
        "Comprehensive brand guidelines",
        "Custom website design (5 pages)",
        "Frontend development included",
        "Motion intro animation",
        "5 revision rounds",
        "4-week turnaround",
        "30-day post-launch support",
      ],
      cta: "Start a Project",
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "scoped per engagement",
      featured: false,
      features: [
        "Everything in Studio, plus:",
        "Full brand ecosystem development",
        "Multi-page website (unlimited)",
        "Campaign design & social systems",
        "Print & packaging design",
        "Motion graphics package",
        "Dedicated project manager",
        "Unlimited revisions",
      ],
      cta: "Let's Talk",
    },
  ],

};

// Make available globally
window.SITE_CONFIG = SITE_CONFIG;

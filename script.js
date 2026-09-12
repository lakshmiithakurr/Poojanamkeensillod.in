/* ============================================================
   POOJA NAMKEEN — Interactions (vanilla JS, GitHub Pages ready)
   ============================================================ */

/* ---------- Data (reuses existing product images) ---------- */
const products = [
  {
    name: "Arjun Namkeen Mixture Chiwda",
    img: "img/a namk.jpeg",
    tag: "Bestseller",
    desc: "Our signature crunchy mixture — a bold blend of sev, fried lentils and spices that Marathwada loves.",
    rating: "4.9",

  },
  {
    name: "Kabeer Special Mixture Chiwda",
    img: "img/kabeer.jpeg",
    tag: "Premium",
    desc: "A special-recipe mixture with rich, layered masala and an addictive, long-lasting crunch.",
    rating: "4.8",

  },
  {
    name: "Pooja Lasun Makai Chiwda",
    img: "img/poolasun1.png",
    tag: "Spicy Garlic",
    desc: "Golden corn flakes tossed with fiery garlic and hand-ground spices for a punchy flavour bomb.",
    rating: "4.9",

  },
  {
    name: "Mitha Pooja Namkeen Chiwda",
    img: "img/mithamkai1.jpg",
    tag: "Sweet & Savoury",
    desc: "The perfect sweet-and-salty balance — a festive favourite that melts into a delicate crunch.",
    rating: "4.7",

  },
  {
    name: "Pooja Farali Chiwda",
    img: "img/faralip1.png",
    tag: "Fasting Friendly",
    desc: "A light, upvas-special farali mix crafted for fasting days without compromising on taste.",
    rating: "4.8",

  },
  {
    name: "Pooja Ratlami Sev",
    img: "img/ratlamisev.png",
    tag: "Classic",
    desc: "Authentic Ratlami sev with a signature clove-and-pepper kick — crispy, fragrant and irresistible.",
    rating: "4.9",

  }
];

const categories = [
  {
    title: "Mixture & Farsan",
    desc: "Bold, spicy classic mixtures loaded with crunch.",
    count: "2 varieties",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h16l-1.2 7a2 2 0 0 1-2 1.7H7.2a2 2 0 0 1-2-1.7L4 11Z"/><path d="M8 11a4 4 0 0 1 8 0"/><path d="M12 7V4"/><path d="M9 5l1 2"/><path d="M15 5l-1 2"/></svg>'
  },
  {
    title: "Chiwda",
    desc: "Light, flavourful poha & corn chiwda blends.",
    count: "3 varieties",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8c3-2 6-2 9 0s6 2 9 0"/><path d="M3 14c3-2 6-2 9 0s6 2 9 0"/><circle cx="6" cy="11" r="0.6" fill="currentColor"/><circle cx="12" cy="11" r="0.6" fill="currentColor"/><circle cx="18" cy="11" r="0.6" fill="currentColor"/></svg>'
  },
  {
    title: "Sev",
    desc: "Crispy Ratlami & fine sev with fragrant spice.",
    count: "1 variety",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 6c4 0 4 12 8 12s4-12 8-12"/><path d="M4 10c4 0 4 8 8 8"/><path d="M12 6c4 0 4 12 8 12"/></svg>'
  },
  {
    title: "Lasun & Makai",
    desc: "Garlicky corn snacks with a fiery finish.",
    count: "1 variety",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-2 3-2 6 0 8 2-2 2-5 0-8Z"/><path d="M8 8c-2 4-2 9 4 12 6-3 6-8 4-12-2 2-3 2-4 4-1-2-2-2-4-4Z"/></svg>'
  },
  {
    title: "Farali / Upvas",
    desc: "Fasting-friendly farali mixes for special days.",
    count: "1 variety",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M12 8c0-3 2-5 5-5 0 3-2 5-5 5Z"/><path d="M12 12c0-3-2-5-5-5 0 3 2 5 5 5Z"/></svg>'
  },
  {
    title: "Mitha Special",
    desc: "Sweet-and-savoury blends for festive moods.",
    count: "1 variety",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12a7 7 0 0 1 14 0v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"/><path d="M3 20h18"/><path d="M12 5V3"/></svg>'
  }
];

const whyUs = [
  { title: "Bold Seasonings", desc: "Hand-ground masala blends that deliver unforgettable, authentic flavour in every bite.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 3 7v10l9 5 9-5V7Z"/><path d="M12 22V12"/><path d="M3 7l9 5 9-5"/></svg>' },
  { title: "Strong Crunch", desc: "Perfected frying and packaging keeps every pack crisp, fresh and satisfyingly crunchy.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-9 12h7l-2 8 9-12h-7Z"/></svg>' },
  { title: "Premium Ingredients", desc: "Only quality lentils, corn, oils and spices — sourced with care for consistent taste.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' },
  { title: "Innovative Range", desc: "From classic mixtures to fasting farali — a growing range for every craving.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"/><path d="M9 21h6"/><path d="M10 17v4"/><path d="M14 17v4"/></svg>' },
  { title: "Uncompromising Quality", desc: "Strict hygiene and quality checks at every stage — trusted across Marathwada.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5Z"/><path d="m9 12 2 2 4-4"/></svg>' },
  { title: "Value Packed", desc: "Generous, family-sized packs bursting with honest, authentic homemade taste.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18v13H3Z"/><path d="M3 7l3-4h12l3 4"/><path d="M12 11v5"/><path d="M9 13h6"/></svg>' }
];

const timeline = [
  { year: "1992", title: "The Beginning", text: "Started from a small home kitchen with cherished homemade recipes and a passion for authentic taste." },
  { year: "2005", title: "Growth", text: "Expanded production and reached local markets across the region with our signature namkeen." },
  { year: "2018", title: "Brand Trust", text: "Became a household name and a trusted symbol of quality snacks throughout Marathwada." },
  { year: "Today", title: "Pooja Namkeen", text: "Delivering taste, crunch & happiness everywhere — with the same family recipes and love." }
];

const testimonials = [
  { text: "The crunch is unreal and the masala is perfectly balanced. Arjun mixture is a permanent part of our chai time now!", name: "Sneha Deshmukh", loc: "Chhatrapati Sambhaji Nagar" },
  { text: "Freshness you can taste. The lasun makai chiwda has just the right kick — my whole family is hooked.", name: "Rahul Pawar", loc: "Sillod" },
  { text: "Ordered the farali chiwda for upvas and it was outstanding. Authentic, light and full of flavour.", name: "Meera Kulkarni", loc: "Jalna" },
  { text: "Ratlami sev tastes exactly like the traditional recipe. Premium quality and unbeatable freshness every time.", name: "Amit Jadhav", loc: "Aurangabad" }
];

/* ---------- Render helpers ---------- */
const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const stars = (r) => "★★★★★".slice(0, 5); // visual 5-star row

/* Products */
const productGrid = document.getElementById("productGrid");
products.forEach((p, i) => {
  productGrid.appendChild(el(`
    <article class="product-card" data-reveal style="transition-delay:${i * 60}ms">
      <div class="pc-media">
        <span class="pc-tag">${p.tag}</span>
        <span class="pc-fav" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.35-9.5-8.5C.9 9.5 2.2 6 5.5 6 7.6 6 9 7.5 12 10c3-2.5 4.4-4 6.5-4 3.3 0 4.6 3.5 3 6.5C19 16.65 12 21 12 21Z"/></svg>
        </span>
        <img src="${p.img}" alt="${p.name} pack" loading="lazy" />
      </div>
      <div class="pc-body">
        <div class="pc-rating">${stars(p.rating)} <span>${p.rating}</span></div>
        <h3 class="pc-title">${p.name}</h3>
        <p class="pc-desc">${p.desc}</p>
        <div class="pc-foot">
          <a class="pc-btn" href="https://wa.me/919545831234?text=${encodeURIComponent("Hi Pooja Namkeen, I'd like to order " + p.name)}" target="_blank" rel="noopener">Order Now</a>
        </div>
      </div>
    </article>
  `));
});

/* Categories */
const categoryGrid = document.getElementById("categoryGrid");
categories.forEach((c, i) => {
  categoryGrid.appendChild(el(`
    <a href="#products" class="category-card" data-reveal style="transition-delay:${i * 50}ms">
      <div class="cat-icon">${c.icon}</div>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <span class="cat-count">${c.count} →</span>
    </a>
  `));
});

/* Why us */
const whyGrid = document.getElementById("whyGrid");
whyUs.forEach((w, i) => {
  whyGrid.appendChild(el(`
    <div class="why-card" data-reveal style="transition-delay:${i * 50}ms">
      <div class="why-icon">${w.icon}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>
  `));
});

/* Timeline */
const timelineEl = document.getElementById("timeline");
timeline.forEach((t) => {
  timelineEl.appendChild(el(`
    <div class="tl-item" data-reveal>
      <span class="tl-dot"></span>
      <div class="tl-card">
        <div class="tl-year">${t.year}</div>
        <h3 class="tl-title">${t.title}</h3>
        <p>${t.text}</p>
      </div>
    </div>
  `));
});

/* Testimonials */
const track = document.getElementById("testimonialTrack");
const dotsWrap = document.getElementById("tDots");
testimonials.forEach((t, i) => {
  const initials = t.name.split(" ").map(n => n[0]).join("").slice(0, 2);
  track.appendChild(el(`
    <div class="testimonial-slide">
      <div class="t-card">
        <div class="t-stars">★★★★★</div>
        <p class="t-text">"${t.text}"</p>
        <div class="t-meta">
          <span class="t-avatar">${initials}</span>
          <div style="text-align:left">
            <div class="t-name">${t.name}</div>
            <div class="t-loc">${t.loc}</div>
          </div>
        </div>
      </div>
    </div>
  `));
  const dot = el(`<button aria-label="Go to testimonial ${i + 1}"></button>`);
  dot.addEventListener("click", () => goTo(i));
  dotsWrap.appendChild(dot);
});

let tIndex = 0;
const tDots = () => dotsWrap.querySelectorAll("button");
function goTo(i) {
  tIndex = (i + testimonials.length) % testimonials.length;
  track.style.transform = `translateX(-${tIndex * 100}%)`;
  tDots().forEach((d, k) => d.classList.toggle("active", k === tIndex));
}
goTo(0);
document.getElementById("tNext").addEventListener("click", () => { goTo(tIndex + 1); resetAuto(); });
document.getElementById("tPrev").addEventListener("click", () => { goTo(tIndex - 1); resetAuto(); });
let tAuto = setInterval(() => goTo(tIndex + 1), 5000);
function resetAuto() { clearInterval(tAuto); tAuto = setInterval(() => goTo(tIndex + 1), 5000); }

/* ---------- Navbar: scroll shadow + mobile menu ---------- */
const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
  })
);

/* ---------- Active menu highlight via IntersectionObserver ---------- */
const sections = ["home", "products", "categories", "why-us", "story", "contact"]
  .map(id => document.getElementById(id)).filter(Boolean);
const linkFor = (id) => document.querySelector(`.nav-link[href="#${id}"]`);

const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      const link = linkFor(e.target.id);
      if (link) link.classList.add("active");
    }
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
sections.forEach(s => spy.observe(s));

/* ---------- Scroll reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll("[data-reveal]").forEach(node => revealObserver.observe(node));

/* ---------- Year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

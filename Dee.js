/* ============================================================
   Dee.js — Dee Parfums shop logic
   ============================================================ */

/* ---------- Product data ---------- */
const PRODUCTS = [
  { id:1,  type:'10ml', name:"Nuit d'Ambre",      family:'Oriental', price:38,  featured:false, img:'images/products/1-nuit-dambre.svg',        size:'10ml', concentration:'Eau de Parfum',     rating:4.8, reviews:214, tagline:'Amber, labdanum, vanilla.',   desc:'A nocturnal embrace of amber, labdanum and vanilla.', notes:'Top: bergamot · Heart: amber · Base: vanilla' },
  { id:2,  type:'10ml', name:'Jardin Blanc',      family:'Floral',   price:32,  featured:false, img:'images/products/2-jardin-blanc.svg',       size:'10ml', concentration:'Eau de Parfum',     rating:4.6, reviews:98,  tagline:'Jasmine, tuberose, neroli.',  desc:'White florals gathered at dawn.', notes:'Top: neroli · Heart: tuberose · Base: musk' },
  { id:3,  type:'10ml', name:'Sel de Mer',        family:'Fresh',    price:28,  featured:false, img:'images/products/4-sel-de-mer.svg',         size:'10ml', concentration:'Eau de Toilette',   rating:4.4, reviews:76,  tagline:'Sea salt, sage, driftwood.',  desc:'Salt air and driftwood.', notes:'Top: sea salt · Heart: sage · Base: driftwood' },
  { id:4,  type:'10ml', name:'Citron No. 5',      family:'Citrus',   price:26,  featured:false, img:'images/products/5-citron-no5.svg',         size:'10ml', concentration:'Eau de Toilette',   rating:4.3, reviews:61,  tagline:'Lemon, grapefruit, tea.',     desc:'Lemon and grapefruit.', notes:'Top: lemon · Heart: grapefruit · Base: tea' },
  { id:5,  type:'10ml', name:'Pamplemousse Rosé', family:'Citrus',   price:30,  featured:false, img:'images/products/15-pamplemousse-rose.svg', size:'10ml', concentration:'Eau de Toilette',   rating:4.5, reviews:42,  tagline:'Grapefruit, rose water, musk.', desc:'Pink grapefruit.', notes:'Top: grapefruit · Heart: rose water · Base: musk' },
  { id:6,  type:'50ml', name:'Bois Sacré',        family:'Woody',    price:165, featured:true,  img:'images/products/3-bois-sacre.svg',         size:'50ml', concentration:'Eau de Parfum',     rating:4.9, reviews:342, tagline:'Cedar, vetiver, incense.',    desc:'Cedar and incense.', notes:'Top: pink pepper · Heart: cedar · Base: sandalwood' },
  { id:7,  type:'50ml', name:'Rose Éternelle',    family:'Floral',   price:132, featured:true,  img:'images/products/6-rose-eternelle.svg',     size:'50ml', concentration:'Eau de Parfum',     rating:4.7, reviews:187, tagline:'Rose, raspberry, patchouli.', desc:'Rose and peony.', notes:'Top: raspberry · Heart: rose · Base: patchouli' },
  { id:8,  type:'50ml', name:'Oud Royale',        family:'Oriental', price:210, featured:false, img:'images/products/7-oud-royale.svg',         size:'50ml', concentration:'Extrait de Parfum', rating:4.9, reviews:128, tagline:'Oud, saffron, leather.',      desc:'A precious oud.', notes:'Top: saffron · Heart: oud · Base: leather' },
  { id:9,  type:'50ml', name:'Fig & Vetiver',     family:'Woody',    price:112, featured:false, img:'images/products/8-fig-vetiver.svg',        size:'50ml', concentration:'Eau de Parfum',     rating:4.5, reviews:143, tagline:'Fig leaf, vetiver, coconut.', desc:'Green fig and vetiver.', notes:'Top: fig leaf · Heart: vetiver · Base: coconut' },
  { id:10, type:'50ml', name:'Iris Poudré',       family:'Floral',   price:156, featured:false, img:'images/products/9-iris-poudre.svg',        size:'50ml', concentration:'Eau de Parfum',     rating:4.6, reviews:112, tagline:'Iris, violet, suede.',        desc:'Powdery iris.', notes:'Top: violet · Heart: iris · Base: suede' },
  { id:11, type:'50ml', name:'Cuir de Nuit',      family:'Oriental', price:188, featured:false, img:'images/products/11-cuir-de-nuit.svg',      size:'50ml', concentration:'Eau de Parfum',     rating:4.8, reviews:96,  tagline:'Leather, tobacco, benzoin.',  desc:'Smoky leather.', notes:'Top: cardamom · Heart: leather · Base: benzoin' },
  { id:12, type:'50ml', name:'Vanille Fumée',     family:'Oriental', price:138, featured:true,  img:'images/products/13-vanille-fumee.svg',     size:'50ml', concentration:'Eau de Parfum',     rating:4.8, reviews:276, tagline:'Vanilla, tonka, birch tar.',  desc:'Smoked vanilla.', notes:'Top: bergamot · Heart: vanilla · Base: tonka' },
  { id:13, type:'oil',  name:'Mandarine Sorbet',  family:'Citrus',   price:48,  featured:false, img:'images/products/10-mandarine-sorbet.svg',  size:'10ml', concentration:'Perfume Oil',       rating:4.2, reviews:54,  tagline:'Mandarin, yuzu, musk.',       desc:'Juicy mandarin.', notes:'Top: mandarin · Heart: yuzu · Base: white musk' },
  { id:14, type:'oil',  name:'Mousse de Sauge',   family:'Fresh',    price:52,  featured:false, img:'images/products/12-mousse-de-sauge.svg',   size:'10ml', concentration:'Perfume Oil',       rating:4.3, reviews:68,  tagline:'Clary sage, moss, stone.',    desc:'Clary sage.', notes:'Top: clary sage · Heart: moss · Base: stone' },
  { id:15, type:'oil',  name:'Cèdre Blanc',       family:'Woody',    price:56,  featured:false, img:'images/products/14-cedre-blanc.svg',       size:'10ml', concentration:'Perfume Oil',       rating:4.4, reviews:87,  tagline:'Cedar, pepper, amber.',       desc:'White cedar.', notes:'Top: white pepper · Heart: cedar · Base: amber' },
];

const GIFT_WRAP_PRICE = 5;
const CURRENCY = '£';
const fmt = n => `${CURRENCY}${Number(n).toFixed(2)}`;

/* ---------- WhatsApp config ---------- */
const WHATSAPP_NUMBER = '447700900123'; // ← replace with your number (no +, no spaces)

/* ---------- Catalogue sections ---------- */
const TYPES = [
  { key:'10ml', label:'10ml Parfums', subtitle:'Travel-size · ideal for trying a new signature' },
  { key:'50ml', label:'50ml Parfums', subtitle:'Full bottles · the house collection' },
  { key:'oil',  label:'Perfume Oils', subtitle:'Roll-on oils · concentrated, close to skin' },
];

/* ---------- State ---------- */
const state = {
  family: 'all',
  price: 'all',
  sort: 'featured',
  cart: [],
  activeProduct: null,
};

/* ---------- DOM ---------- */
const $ = sel => document.querySelector(sel);
const catalogueSections = $('#catalogueSections');
const emptyState = $('#emptyState');
const familyFilters = $('#familyFilters');
const priceFilter = $('#priceFilter');
const sortFilter = $('#sortFilter');
const cartCount = $('#cartCount');
const cartDrawer = $('#cartDrawer');
const cartItems = $('#cartItems');
const cartSubtotal = $('#cartSubtotal');
const cartGift = $('#cartGift');
const cartTotal = $('#cartTotal');
const productModal = $('#productModal');

/* ---------- Helpers ---------- */
const priceInRange = (p) => {
  if (state.price === 'under50') return p < 50;
  if (state.price === '50to150') return p >= 50 && p <= 150;
  if (state.price === 'over150') return p > 150;
  return true;
};

const filterList = (typeKey) => {
  let list = PRODUCTS.filter(p =>
    p.type === typeKey &&
    (state.family === 'all' || p.family === state.family) &&
    priceInRange(p.price)
  );
  switch (state.sort) {
    case 'price-asc': list.sort((a,b)=>a.price-b.price); break;
    case 'price-desc': list.sort((a,b)=>b.price-a.price); break;
    case 'name': list.sort((a,b)=>a.name.localeCompare(b.name)); break;
    default: list.sort((a,b)=> (b.featured?1:0)-(a.featured?1:0));
  }
  return list;
};

/* ---------- Reduced motion ---------- */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Hero letter reveal ---------- */
function setupHeroLetters() {
  if (reducedMotion) return;
  const h1 = document.querySelector('.hero h1');
  if (!h1) return;

  const brIndex = Array.from(h1.childNodes).findIndex(n => n.nodeName === 'BR');
  let line1HTML = '';
  let line2HTML = '';

  if (brIndex !== -1) {
    const nodes = Array.from(h1.childNodes);
    const before = nodes.slice(0, brIndex);
    const after = nodes.slice(brIndex + 1);

    const wrapText = (nodes) => {
      let i = 0;
      return nodes.map(node => {
        if (node.nodeType === 3) {
          return node.textContent.split('').map(ch => {
            if (ch === ' ') return '<span class="space"></span>';
            return `<span class="letter" style="--i:${i++}">${ch}</span>`;
          }).join('');
        }
        if (node.nodeType === 1 && node.tagName === 'EM') {
          return `<em>${node.textContent.split('').map(ch => {
            if (ch === ' ') return '<span class="space"></span>';
            return `<span class="letter" style="--i:${i++}">${ch}</span>`;
          }).join('')}</em>`;
        }
        return '';
      }).join('');
    };

    line1HTML = wrapText(before);
    line2HTML = wrapText(after);
  } else {
    line1HTML = h1.textContent.split('').map((ch, i) => {
      if (ch === ' ') return '<span class="space"></span>';
      return `<span class="letter" style="--i:${i}">${ch}</span>`;
    }).join('');
  }

  h1.innerHTML =
    `<span class="line line--1">${line1HTML}</span>` +
    (line2HTML ? `<span class="line line--2">${line2HTML}</span>` : '');
}

/* ---------- Scroll reveal ---------- */
let revealObserver = null;

function initRevealObserver() {
  if (!('IntersectionObserver' in window)) return;
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
}

function applyReveal(selector) {
  if (!revealObserver) return;
  document.querySelectorAll(selector).forEach(el => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      revealObserver.observe(el);
    }
  });
}

/* ---------- Card 3D tilt ---------- */
function initCardTilt() {
  if (reducedMotion) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.querySelectorAll('.card').forEach(card => {
    if (card.dataset.tiltInit) return;
    card.dataset.tiltInit = '1';

    let rafId = null;
    let targetRX = 0, targetRY = 0;
    let currentRX = 0, currentRY = 0;

    const update = () => {
      currentRX += (targetRX - currentRX) * 0.15;
      currentRY += (targetRY - currentRY) * 0.15;
      card.style.transform =
        `perspective(900px) translateY(-8px) rotateX(${currentRX}deg) rotateY(${currentRY}deg)`;
      if (Math.abs(targetRX - currentRX) > 0.01 || Math.abs(targetRY - currentRY) > 0.01) {
        rafId = requestAnimationFrame(update);
      } else {
        rafId = null;
      }
    };

    card.addEventListener('mouseenter', () => {
      card.classList.add('is-tilting');
      if (!rafId) rafId = requestAnimationFrame(update);
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      targetRY = (px - 0.5) * 10;
      targetRX = -(py - 0.5) * 10;
      if (!rafId) rafId = requestAnimationFrame(update);
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-tilting');
      targetRX = 0;
      targetRY = 0;
      if (!rafId) rafId = requestAnimationFrame(update);
      setTimeout(() => {
        if (!card.classList.contains('is-tilting')) {
          card.style.transform = '';
        }
      }, 700);
    });
  });
}

/* ---------- Cart badge pulse ---------- */
let lastPulseTime = 0;
let lastKnownCount = 0;

function pulseCartBadge() {
  if (reducedMotion) return;
  const now = Date.now();
  const count = Number(cartCount.textContent) || 0;
  if (now - lastPulseTime < 300) return;
  if (count === lastKnownCount) return;

  lastPulseTime = now;
  lastKnownCount = count;
  cartCount.classList.remove('pulse');
  void cartCount.offsetWidth;
  cartCount.classList.add('pulse');
}

/* ---------- Render catalogue ---------- */
function renderCatalogue() {
  let anyVisible = false;

  catalogueSections.innerHTML = TYPES.map(t => {
    const list = filterList(t.key);
    if (!list.length) return '';
    anyVisible = true;

    return `
      <div class="catalogue-section" id="cat-${t.key}">
        <div class="catalogue-section__head">
          <h3>${t.label}</h3>
          <p>${t.subtitle}</p>
        </div>
        <div class="product-grid">
          ${list.map(p => `
            <article class="card" data-id="${p.id}">
              <div class="card__media">
                <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async"
                     onerror="this.style.display='none'" />
                ${p.featured ? '<span class="card__badge">Featured</span>' : ''}
              </div>
              <div class="card__body">
                <span class="card__family">${p.family} · ${p.concentration}</span>
                <h3 class="card__name">${p.name}</h3>
                <p class="card__tagline">${p.tagline}</p>
                <div class="card__rating">
                  <span class="stars">★★★★★</span>
                  <span>${p.rating} (${p.reviews})</span>
                </div>
                <div class="card__foot">
                  <span class="card__price">${fmt(p.price)}</span>
                  <span class="card__size">${p.size}</span>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  emptyState.hidden = anyVisible;
  applyReveal('.catalogue-section, .catalogue-section .card');
  initCardTilt();
}

function renderCatalogueWithFade() {
  const el = document.getElementById('catalogueSections');
  el.classList.add('is-swapping');
  setTimeout(() => {
    renderCatalogue();
    el.classList.remove('is-swapping');
  }, 200);
}

/* ---------- Featured carousel ---------- */
function renderFeatured() {
  const row = document.getElementById('featuredRow');
  if (!row) return;
  const list = PRODUCTS.filter(p => p.featured);
  row.innerHTML = list.map(p => `
    <article class="card card--featured" data-id="${p.id}">
      <div class="card__media">
        <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async"
             onerror="this.style.display='none'" />
        <span class="card__badge">Featured</span>
      </div>
      <div class="card__body">
        <span class="card__family">${p.family} · ${p.concentration}</span>
        <h3 class="card__name">${p.name}</h3>
        <p class="card__tagline">${p.tagline}</p>
        <div class="card__rating">
          <span class="stars">★★★★★</span>
          <span>${p.rating} (${p.reviews})</span>
        </div>
        <div class="card__foot">
          <span class="card__price">${fmt(p.price)}</span>
          <span class="card__size">${p.size}</span>
        </div>
      </div>
    </article>
  `).join('');
  applyReveal('.featured__row .card');
  initCardTilt();
}

/* ---------- Click handling ---------- */
catalogueSections.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  openProduct(Number(card.dataset.id));
});

document.getElementById('featuredRow').addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  openProduct(Number(card.dataset.id));
});

/* ---------- Filters ---------- */
familyFilters.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  familyFilters.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
  chip.classList.add('is-active');
  state.family = chip.dataset.family;
  renderCatalogueWithFade();
});
priceFilter.addEventListener('change', e => {
  state.price = e.target.value;
  renderCatalogueWithFade();
});
sortFilter.addEventListener('change', e => {
  state.sort = e.target.value;
  renderCatalogueWithFade();
});

/* ---------- Product modal ---------- */
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  state.activeProduct = p;

  document.getElementById('modalMedia').innerHTML =
    `<img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'" />`;
  document.getElementById('modalFamily').textContent =
    `${p.family} · ${p.concentration} · ${p.size}`;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalPrice').innerHTML =
    `${fmt(p.price)} <span class="modal__rating"><span class="stars">★★★★★</span> ${p.rating} (${p.reviews} reviews)</span>`;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalNotes').textContent = p.notes;
  document.getElementById('giftWrap').checked = false;

  productModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  productModal.hidden = true;
  document.body.style.overflow = '';
  state.activeProduct = null;
}

productModal.addEventListener('click', e => {
  if (e.target.closest('[data-close]')) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !productModal.hidden) closeModal();
});

/* ---------- Add to cart ---------- */
$('#addToCartBtn').addEventListener('click', () => {
  const p = state.activeProduct;
  if (!p) return;
  const gift = $('#giftWrap').checked;
  const existing = state.cart.find(i => i.id === p.id && i.gift === gift);
  if (existing) existing.qty += 1;
  else state.cart.push({ id: p.id, qty: 1, gift });
  updateCart();
  closeModal();
  openCart();
});

/* ---------- Cart ---------- */
function cartTotals() {
  let sub = 0, gift = 0;
  for (const item of state.cart) {
    const p = PRODUCTS.find(x => x.id === item.id);
    sub += p.price * item.qty;
    if (item.gift) gift += GIFT_WRAP_PRICE * item.qty;
  }
  return { sub, gift, total: sub + gift };
}

function updateCart() {
  const count = state.cart.reduce((n,i)=>n+i.qty,0);
  cartCount.textContent = count;

  if (!state.cart.length) {
    cartItems.innerHTML = '<p class="empty-state" style="padding:2rem 0">Your bag is empty.</p>';
  } else {
    cartItems.innerHTML = state.cart.map(item => {
      const p = PRODUCTS.find(x => x.id === item.id);
      return `
        <div class="cart-item">
          <div class="cart-item__media">
            <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'" />
          </div>
          <div>
            <div class="cart-item__name">${p.name}</div>
            <div class="cart-item__meta">${item.qty} × ${fmt(p.price)}${item.gift ? ' · Gift wrap' : ''}</div>
            <button class="cart-item__remove" data-remove="${item.id}" data-gift="${item.gift}">Remove</button>
          </div>
          <div class="cart-item__price">${fmt(p.price * item.qty + (item.gift ? GIFT_WRAP_PRICE*item.qty : 0))}</div>
        </div>
      `;
    }).join('');
  }

  const { sub, gift, total } = cartTotals();
  cartSubtotal.textContent = fmt(sub);
  cartGift.textContent = fmt(gift);
  cartTotal.textContent = fmt(total);

  pulseCartBadge();
}

cartItems.addEventListener('click', e => {
  const btn = e.target.closest('[data-remove]');
  if (!btn) return;
  const id = Number(btn.dataset.remove);
  const gift = btn.dataset.gift === 'true';
  state.cart = state.cart.filter(i => !(i.id === id && i.gift === gift));
  updateCart();
});

/* ---------- Cart drawer ---------- */
function openCart() {
  cartDrawer.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartDrawer.hidden = true;
  document.body.style.overflow = '';
}
$('#cartBtn').addEventListener('click', openCart);
cartDrawer.addEventListener('click', e => {
  if (e.target.closest('[data-close-cart]')) closeCart();
});

/* ---------- Checkout placeholder ---------- */
$('#checkoutBtn').addEventListener('click', () => {
  if (!state.cart.length) { alert('Your bag is empty.'); return; }
  const { total } = cartTotals();
  alert(`Checkout — total ${fmt(total)}\n\n(Integrate Stripe/Shopify here.)`);
});

/* ---------- Order via WhatsApp ---------- */
function buildWhatsAppOrderMessage() {
  const lines = [];
  lines.push('Hello Dee Parfums, I would like to place an order:');
  lines.push('');
  for (const item of state.cart) {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) continue;
    const lineTotal = p.price * item.qty + (item.gift ? GIFT_WRAP_PRICE * item.qty : 0);
    let line = `• ${item.qty} × ${p.name} (${p.size}) — ${fmt(lineTotal)}`;
    if (item.gift) line += ' · Gift wrap';
    lines.push(line);
  }
  const { sub, gift, total } = cartTotals();
  lines.push('');
  lines.push(`Subtotal: ${fmt(sub)}`);
  if (gift > 0) lines.push(`Gift wrapping: ${fmt(gift)}`);
  lines.push(`Total: ${fmt(total)}`);
  lines.push('');
  lines.push('Please confirm availability and delivery details. Thank you!');
  return lines.join('\n');
}

$('#checkoutWhatsappBtn').addEventListener('click', () => {
  if (!state.cart.length) { alert('Your bag is empty.'); return; }
  const message = buildWhatsAppOrderMessage();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  closeCart();
});

/* ---------- Mobile nav ---------- */
$('#menuBtn').addEventListener('click', () => {
  const nav = $('#nav');
  const isOpen = nav.classList.toggle('is-open');
  if (isOpen) {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'var(--paper)';
    nav.style.padding = '1.5rem';
    nav.style.borderBottom = '1px solid var(--line)';
    nav.style.gap = '1rem';
  } else {
    nav.style.display = '';
  }
});

/* ============================================================
   Scent Finder Quiz
   ============================================================ */

const QUIZ_QUESTIONS = [
  {
    id: 'mood',
    title: 'What mood are you drawn to?',
    options: [
      { label: 'Warm & grounded',    value: 'warm',   weights: { Woody: 2, Oriental: 2 } },
      { label: 'Light & airy',       value: 'light',  weights: { Floral: 2, Fresh: 2 } },
      { label: 'Bright & playful',   value: 'bright', weights: { Citrus: 3 } },
      { label: 'Deep & mysterious',  value: 'deep',   weights: { Oriental: 3 } },
    ],
  },
  {
    id: 'time',
    title: 'When will you wear it?',
    options: [
      { label: 'Everyday, daytime',      value: 'day', weights: { Fresh: 2, Citrus: 2, Floral: 1 } },
      { label: 'Evening & occasions',    value: 'eve', weights: { Oriental: 2, Woody: 2 } },
      { label: 'Both — it should adapt', value: 'any', weights: { Floral: 1, Woody: 1 } },
    ],
  },
  {
    id: 'intensity',
    title: 'How do you like it to sit?',
    options: [
      { label: 'Close to skin, subtle', value: 'close',  weights: { oil: 3 } },
      { label: 'A gentle signature',    value: 'medium', weights: { '10ml': 2, Floral: 1, Fresh: 1 } },
      { label: 'A full statement',      value: 'strong', weights: { '50ml': 3, Oriental: 1, Woody: 1 } },
    ],
  },
  {
    id: 'note',
    title: 'Pick a note you love',
    options: [
      { label: 'Rose, jasmine, iris',     value: 'floral',   weights: { Floral: 3 } },
      { label: 'Cedar, vetiver, oud',     value: 'woody',    weights: { Woody: 3 } },
      { label: 'Amber, vanilla, leather', value: 'oriental', weights: { Oriental: 3 } },
      { label: 'Citrus, sea salt, green', value: 'fresh',    weights: { Fresh: 2, Citrus: 2 } },
    ],
  },
];

let quizAnswers = {};
let quizStepIndex = 0;

function openQuiz() {
  quizAnswers = {};
  quizStepIndex = 0;
  document.getElementById('quizIntro').hidden = false;
  document.getElementById('quizQuestion').hidden = true;
  document.getElementById('quizResult').hidden = true;
  document.getElementById('quizModal').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeQuiz() {
  document.getElementById('quizModal').hidden = true;
  document.body.style.overflow = '';
}

function renderQuizQuestion() {
  const q = QUIZ_QUESTIONS[quizStepIndex];
  document.getElementById('quizIntro').hidden = true;
  document.getElementById('quizResult').hidden = true;
  document.getElementById('quizQuestion').hidden = false;
  document.getElementById('quizStep').textContent = quizStepIndex + 1;
  document.getElementById('quizQuestionTitle').textContent = q.title;

  const opts = document.getElementById('quizOptions');
  opts.innerHTML = q.options.map((o, i) => `
    <button class="quiz-option" data-option="${i}" type="button">${o.label}</button>
  `).join('');

  document.getElementById('quizBackBtn').hidden = quizStepIndex === 0;
}

function answerQuiz(optionIndex) {
  const q = QUIZ_QUESTIONS[quizStepIndex];
  const option = q.options[optionIndex];
  quizAnswers[q.id] = option.value;

  quizStepIndex += 1;
  if (quizStepIndex >= QUIZ_QUESTIONS.length) {
    showQuizResults();
  } else {
    renderQuizQuestion();
  }
}

function goBackQuiz() {
  if (quizStepIndex === 0) return;
  quizStepIndex -= 1;
  renderQuizQuestion();
}

function showQuizResults() {
  const scores = PRODUCTS.map(p => {
    let score = 0;
    for (const q of QUIZ_QUESTIONS) {
      const answerValue = quizAnswers[q.id];
      const opt = q.options.find(o => o.value === answerValue);
      if (!opt) continue;
      if (opt.weights[p.family]) score += opt.weights[p.family];
      if (opt.weights[p.type]) score += opt.weights[p.type];
    }
    return { product: p, score };
  });

  const top = scores
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const matchesEl = document.getElementById('quizMatches');
  const subEl = document.getElementById('quizResultSub');

  if (!top.length) {
    matchesEl.innerHTML = '<p>We couldn\'t find a perfect match — please browse the full collection.</p>';
    subEl.textContent = '';
  } else {
    subEl.textContent = 'Three fragrances we think you\'ll love, based on your answers.';
    matchesEl.innerHTML = top.map(({ product: p }) => `
      <article class="quiz-match" data-id="${p.id}">
        <div class="quiz-match__media">
          <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'" />
        </div>
        <div class="quiz-match__body">
          <span class="card__family">${p.family} · ${p.concentration}</span>
          <h3>${p.name}</h3>
          <p>${p.tagline}</p>
          <div class="quiz-match__foot">
            <span>${fmt(p.price)}</span>
            <span>${p.size}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  document.getElementById('quizIntro').hidden = true;
  document.getElementById('quizQuestion').hidden = true;
  document.getElementById('quizResult').hidden = false;

  matchesEl.querySelectorAll('.quiz-match').forEach(card => {
    card.addEventListener('click', () => {
      const id = Number(card.dataset.id);
      closeQuiz();
      setTimeout(() => openProduct(id), 200);
    });
  });
}

/* ---------- Quiz wiring ---------- */
const openQuizBtn = document.getElementById('openQuizBtn');
if (openQuizBtn) openQuizBtn.addEventListener('click', openQuiz);

const quizModal = document.getElementById('quizModal');
if (quizModal) {
  quizModal.addEventListener('click', e => {
    if (e.target.closest('[data-close-quiz]')) closeQuiz();
  });

  const startBtn = document.getElementById('quizStartBtn');
  if (startBtn) startBtn.addEventListener('click', () => {
    quizStepIndex = 0;
    renderQuizQuestion();
  });

  const optsEl = document.getElementById('quizOptions');
  if (optsEl) optsEl.addEventListener('click', e => {
    const btn = e.target.closest('.quiz-option');
    if (!btn) return;
    answerQuiz(Number(btn.dataset.option));
  });

  const backBtn = document.getElementById('quizBackBtn');
  if (backBtn) backBtn.addEventListener('click', goBackQuiz);

  const restartBtn = document.getElementById('quizRestartBtn');
  if (restartBtn) restartBtn.addEventListener('click', () => {
    quizAnswers = {};
    quizStepIndex = 0;
    document.getElementById('quizResult').hidden = true;
    document.getElementById('quizIntro').hidden = false;
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !quizModal.hidden) closeQuiz();
  });
}

/* ---------- Init ---------- */
setupHeroLetters();
initRevealObserver();

renderFeatured();
renderCatalogue();
updateCart();

applyReveal('section, .review, .atelier__item, .story__inner > *');
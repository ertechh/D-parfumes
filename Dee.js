console.log('Dee.js loaded');

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

const CURRENCY = '£';
const fmt = n => `${CURRENCY}${Number(n).toFixed(2)}`;

const TYPES = [
  { key:'10ml', label:'10ml Parfums', subtitle:'Travel-size · ideal for trying a new signature' },
  { key:'50ml', label:'50ml Parfums', subtitle:'Full bottles · the house collection' },
  { key:'oil',  label:'Perfume Oils', subtitle:'Roll-on oils · concentrated, close to skin' },
];

const container = document.getElementById('catalogueSections');
console.log('container found:', !!container);

if (!container) {
  console.error('FATAL: #catalogueSections not found in HTML');
} else {
  let html = '';
  TYPES.forEach(t => {
    const list = PRODUCTS.filter(p => p.type === t.key);
    if (!list.length) return;
    html += `
      <div class="catalogue-section" id="cat-${t.key}">
        <div class="catalogue-section__head">
          <h3>${t.label}</h3>
          <p>${t.subtitle}</p>
        </div>
        <div class="product-grid">
          ${list.map(p => `
            <article class="card">
              <div class="card__media">
                <img src="${p.img}" alt="${p.name}"
                     onerror="this.style.display='none'" />
              </div>
              <div class="card__body">
                <span class="card__family">${p.family} · ${p.concentration}</span>
                <h3 class="card__name">${p.name}</h3>
                <p class="card__tagline">${p.tagline}</p>
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
  });
  container.innerHTML = html;
  console.log('rendered', container.querySelectorAll('.card').length, 'cards');
}
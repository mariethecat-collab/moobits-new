import {
  LOGO_URL,
  COOKIE_IMAGES,
  BOLU_IMAGES,
  BOLU_BIG_IMAGES,
  BROWNIES_IMAGES,
  SCOOPABLE_IMAGES,
} from "./images";
import { STORE } from "./settings";
import { CATEGORIES } from "../constants/testIds/categories";

// Static catalog data for Moobits — Phase 1
export const WHATSAPP_NUMBER = STORE.contact.phone;

export const buildWaLink = (productName, lang = "id") => {
  const msg =
    lang === "id"
      ? `Halo Moobits, aku mau order ${productName} ya.`
      : `Hello Moobits, I would like to order ${productName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

export const buildGenericWa = (lang = "id") => {
  const msg =
    lang === "id"
      ? "Halo Moobits, aku mau order ya."
      : "Hello Moobits, I would like to order.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};



// Each product: id, name, category, image (or illustration key), labels, price, discountPct, size,
// descId, descEn, textureId, textureEn, accent (hex)
export const products = [
  // ===== COOKIES =====
  {
    id: "classic-og",
    name: "Classic OG",
    category: "Cookies",
    image: COOKIE_IMAGES.classic_og,
    labels: ["New Menu"],
    price: 10000,
    bestFor: ["Self Treat", "Teman Ngopi", "Gift"],
    discountPct: 20,
    size: "Ø ±10 cm",
    accent: "#8D5B4C",
    descId:
      "Classic chocolate chip cookie dengan rasa buttery manis yang familiar, simple, dan selalu aman jadi comfort snack.",
    descEn:
      "Classic chocolate chip cookie with a buttery sweet taste that feels familiar, simple, and comforting.",
    textureId: ["Chewy", "Soft inside", "Slightly crisp outside"],
    textureEn: ["Chewy", "Soft inside", "Slightly crisp outside"],
  },
  {
    id: "velvet-crush",
    name: "Velvet Crush",
    category: "Cookies",
    image: COOKIE_IMAGES.velvet_crush,
    labels: ["New Menu"],
    price: 12000,
    bestFor: ["Self Treat", "Teman Ngopi", "Gift"],
    discountPct: 20,
    size: "Ø ±10 cm",
    accent: "#9B2C2C",
    descId:
      "Red velvet cookie dengan rasa manis lembut, warna bold, dan white chips yang bikin setiap gigitan terasa creamy.",
    descEn:
      "Red velvet cookie with a soft sweet flavor, bold color, and white chips that make every bite feel creamy.",
    textureId: ["Soft chewy", "Moist", "Creamy bites"],
    textureEn: ["Soft chewy", "Moist", "Creamy bites"],
  },
  {
    id: "matcha-cookies",
    name: "Matcheese",
    category: "Cookies",
    image: COOKIE_IMAGES.matcha,
    labels: ["New Menu"],
    price: 12000,
    bestFor: ["Self Treat", "Teman Ngopi", "Gift"],
    discountPct: 20,
    size: "Ø ±10 cm",
    accent: "#86A789",
    descId:
      "Cookie matcha dengan rasa earthy yang kalem, dipadukan white chips dan almond slices untuk gigitan yang lebih premium.",
    descEn:
      "Matcha cookie with a calm earthy flavor, paired with white chips and almond slices for a more premium bite.",
    textureId: ["Chewy", "Soft", "Light almond crunch"],
    textureEn: ["Chewy", "Soft", "Light almond crunch"],
  },
  {
    id: "cookies-cream",
    name: "Cookies n Cream",
    category: "Cookies",
    image: COOKIE_IMAGES.cookies_cream,
    labels: ["New Menu"],
    price: 12000,
    bestFor: ["Self Treat", "Teman Ngopi", "Gift"],
    discountPct: 20,
    size: "Ø ±10 cm",
    accent: "#3B82F6",
    descId:
      "Cookie lembut dengan Oreo, white choco chips, dan filling cokelat lumer yang kaya dan memanjakan.",
    descEn:
      "A soft cookie with Oreo, white chocolate chips, and a rich molten chocolate filling.",
    textureId: ["Chewy", "Soft", "Chunky", "Playful bites"],
    textureEn: ["Chewy", "Soft", "Chunky", "Playful bites"],
  },

  // ===== BOLU MINI =====
  {
    id: "bm-ketan-hitam-lumer",
    name: "Bolu Mini Ketan Hitam Isian Keju Lumer",
    shortName: "Bolu Mini Ketan Hitam · Keju Lumer",
    category: "Bolu Mini",
    image: BOLU_IMAGES.ketan_hitam_lumer,
    labels: ["Best Seller", "Recommended"],
    price: 5000,
    bestFor: ["Self Treat", "Arisan", "Snack Box"],
    discountPct: 0,
    accent: "#3A2A2E",
    descId:
      "Bolu mini ketan hitam yang moist dan legit, dengan isian keju lumer yang gurih creamy di dalamnya.",
    descEn:
      "Moist black sticky rice mini bolu with creamy melted cheese filling inside.",
    textureId: ["Moist", "Soft", "Lumer"],
    textureEn: ["Moist", "Soft", "Lumer"],
  },
  {
    id: "bm-ketan-hitam-parut",
    name: "Bolu Mini Ketan Hitam Topping Keju Parut",
    shortName: "Bolu Mini Ketan Hitam · Keju Parut",
    category: "Bolu Mini",
    image: BOLU_IMAGES.ketan_hitam_parut,
    labels: [],
    price: 5000,
    bestFor: ["Self Treat", "Arisan", "Snack Box"],
    discountPct: 0,
    accent: "#3A2A2E",
    descId:
      "Bolu mini ketan hitam dengan topping keju parut yang gurih dan melimpah, cocok buat pencinta manis-gurih.",
    descEn:
      "Soft black sticky rice mini bolu with generous grated cheese topping for a sweet and savory bite.",
    textureId: ["Soft", "Moist", "Cheesy topping"],
    textureEn: ["Soft", "Moist", "Cheesy topping"],
  },
  {
    id: "bm-redvelvet-lumer",
    name: "Bolu Mini Red Velvet Isian Keju Lumer",
    shortName: "Bolu Mini Red Velvet · Keju Lumer",
    category: "Bolu Mini",
    image: BOLU_IMAGES.redvelvet_lumer,
    labels: [],
    price: 5000,
    bestFor: ["Self Treat", "Arisan", "Snack Box"],
    discountPct: 0,
    accent: "#9B2C2C",
    descId:
      "Bolu mini red velvet dengan warna cantik, rasa manis lembut, dan isian keju lumer yang creamy.",
    descEn:
      "Soft red velvet mini bolu with a lovely color, gentle sweetness, and creamy melted cheese filling.",
    textureId: ["Soft", "Moist", "Creamy lumer"],
    textureEn: ["Soft", "Moist", "Creamy lumer"],
  },
  {
    id: "bm-redvelvet-parut",
    name: "Bolu Mini Red Velvet Topping Keju Parut",
    shortName: "Bolu Mini Red Velvet · Keju Parut",
    category: "Bolu Mini",
    image: BOLU_IMAGES.redvelvet_parut,
    labels: [],
    price: 5000,
    bestFor: ["Self Treat", "Arisan", "Snack Box"],
    discountPct: 0,
    accent: "#9B2C2C",
    descId:
      "Bolu mini red velvet dengan topping keju parut yang bikin rasanya lebih gurih dan balance.",
    descEn:
      "Red velvet mini bolu with grated cheese topping for a balanced sweet and savory flavor.",
    textureId: ["Soft", "Moist", "Cheesy"],
    textureEn: ["Soft", "Moist", "Cheesy"],
  },
  {
    id: "bm-pandan-lumer",
    name: "Bolu Mini Pandan Isian Keju Lumer",
    shortName: "Bolu Mini Pandan · Keju Lumer",
    category: "Bolu Mini",
    image: BOLU_IMAGES.pandan_lumer,
    labels: ["Best Seller", "Recommended"],
    price: 5000,
    bestFor: ["Self Treat", "Arisan", "Snack Box"],
    discountPct: 0,
    accent: "#86A789",
    descId:
      "Bolu mini pandan wangi dengan isian keju lumer yang gurih creamy, fresh, dan comforting.",
    descEn:
      "Fragrant pandan mini bolu with creamy melted cheese filling, fresh and comforting in every bite.",
    textureId: ["Soft", "Moist", "Fragrant", "Lumer"],
    textureEn: ["Soft", "Moist", "Fragrant", "Lumer"],
  },
  {
    id: "bm-pandan-parut",
    name: "Bolu Mini Pandan Topping Keju Parut",
    shortName: "Bolu Mini Pandan · Keju Parut",
    category: "Bolu Mini",
    image: BOLU_IMAGES.pandan_parut,
    labels: [],
    price: 5000,
    bestFor: ["Self Treat", "Arisan", "Snack Box"],
    discountPct: 0,
    accent: "#86A789",
    descId:
      "Bolu mini pandan dengan aroma pandan yang lembut dan topping keju parut yang gurih.",
    descEn:
      "Soft pandan mini bolu with a gentle pandan aroma and savory grated cheese topping.",
    textureId: ["Soft", "Moist", "Cheesy topping"],
    textureEn: ["Soft", "Moist", "Cheesy topping"],
  },

  // ===== BOLU BIG =====
  {
    id: "bb-ketan-hitam-lumer",
    name: "Bolu BIG Ketan Hitam Isian Keju Lumer",
    shortName: "Bolu BIG Ketan Hitam · Keju Lumer",
    category: "Bolu BIG",
    image: BOLU_BIG_IMAGES.ketan_hitam,
    labels: [],
    price: 45000,
    bestFor: ["Sharing", "Acara Keluarga", "Ulang Tahun"],
    discountPct: 0,
    accent: "#3A2A2E",
    descId:
      "Bolu ketan hitam ukuran besar dengan tekstur moist dan isian keju lumer yang cocok untuk sharing.",
    descEn:
      "Large black sticky rice bolu with a moist texture and creamy melted cheese filling, perfect for sharing.",
    textureId: ["Moist", "Soft", "Lumer", "Rich"],
    textureEn: ["Moist", "Soft", "Lumer", "Rich"],
  },
  {
    id: "bb-pandan-lumer",
    name: "Bolu BIG Pandan Isian Keju Lumer",
    shortName: "Bolu BIG Pandan · Keju Lumer",
    category: "Bolu BIG",
    image: BOLU_BIG_IMAGES.pandan,
    labels: [],
    price: 45000,
    bestFor: ["Sharing", "Acara Keluarga", "Ulang Tahun"],
    discountPct: 0,
    accent: "#86A789",
    descId:
      "Bolu pandan ukuran besar dengan aroma pandan yang wangi dan isian keju lumer yang creamy.",
    descEn:
      "Large pandan bolu with a soft fragrant cake base and creamy melted cheese filling.",
    textureId: ["Soft", "Moist", "Fragrant", "Creamy"],
    textureEn: ["Soft", "Moist", "Fragrant", "Creamy"],
  },

  // ===== BROWNIES =====
  {
    id: "br-keju-full",
    name: "Brownies Ketan Hitam Topping Keju Parut Full",
    shortName: "Brownies · Keju Parut Full",
    category: "Brownies",
    image: BROWNIES_IMAGES.keju_full,
    labels: [],
    price: 35000,
    bestFor: ["Sharing", "Meeting", "Arisan"],
    discountPct: 0,
    accent: "#FCD34D",
    descId:
      "Brownies ketan hitam dengan topping keju parut full, cocok buat pencinta brownies manis-gurih.",
    descEn:
      "Black sticky rice brownies with full grated cheese topping for a rich sweet and savory taste.",
    textureId: ["Moist", "Dense", "Soft", "Cheesy"],
    textureEn: ["Moist", "Dense", "Soft", "Cheesy"],
  },
  {
    id: "br-half-half",
    name: "Brownies Ketan Hitam Topping ½ Keju Parut + ½ Choco Chips",
    shortName: "Brownies · ½ Keju + ½ Choco",
    category: "Brownies",
    image: BROWNIES_IMAGES.half_half,
    illustration: "brownies-half",
    labels: [],
    price: 35000,
    bestFor: ["Sharing", "Meeting", "Arisan"],
    discountPct: 0,
    accent: "#8D5B4C",
    descId:
      "Brownies ketan hitam dengan dua topping dalam satu loyang: setengah keju parut dan setengah choco chips.",
    descEn:
      "Black sticky rice brownies with two toppings in one: half grated cheese and half choco chips.",
    textureId: ["Moist", "Dense", "Cheesy", "Chocolatey"],
    textureEn: ["Moist", "Dense", "Cheesy", "Chocolatey"],
  },
  // ===== SCOOPABLE =====
    {
    id: "sc-classic-og",
    name: "Scoopable Classic OG",
    shortName: "Scoopable Classic OG",
    category: "Scoopable",
    image: SCOOPABLE_IMAGES.sco_classic_og,
    labels: ["New Menu"],
    price: 15000,
    bestFor: ["Self Treat", "Teman Ngopi", "Gift"],
    discountPct: 20,
    accent: "#8D5B4C",
    descId:
      "Classic chocolate chip Scoopable dengan rasa buttery manis yang familiar, simple, dan selalu aman jadi comfort snack.",
    descEn:
      "Classic chocolate chip Scoopable with a familiar, simple, and always safe comfort snack taste.",
    textureId: ["Moist", "Dense", "Softy", "Chocolatey"],
    textureEn: ["Moist", "Dense", "Softy", "Chocolatey"],
  },
  {
    id: "sc-velvet-crush",
    name: "Scoopable Velvet Crush",
    shortName: "Scoopable Velvet Crush",
    category: "Scoopable",
    image: SCOOPABLE_IMAGES.sco_velvet,
    labels: ["New Menu"],
    price: 15000,
    bestFor: ["Self Treat", "Teman Ngopi", "Gift"],
    discountPct: 20,
    accent: "#9B2C2C",
    descId:
      "Red velvet Scoopable dengan rasa manis lembut, warna bold, dan white chips yang bikin setiap gigitan terasa creamy.",
    descEn:
      "Red velvet Scoopable with a soft sweet taste, bold color, and white chips that make every bite feel creamy.",
    textureId: ["Moist", "Dense", "Softy", "Creamy"],
    textureEn: ["Moist", "Dense", "Softy", "Creamy"],
  },
  {
    id: "sc-matcha",
    name: "Scoopable Matcheese",
    shortName: "Scoopable Matcheese",
    category: "Scoopable",
    image: SCOOPABLE_IMAGES.sco_matcha,
    labels: ["New Menu"],
    price: 15000,
    bestFor: ["Self Treat", "Teman Ngopi", "Gift"],
    discountPct: 20,
    accent: "#86A789",
    descId:
      "Matcha Scoopable dengan rasa khas teh matcha yang lezat, warna hijau cerah, dan tekstur lembut yang membuat setiap gigitan terasa menyenangkan.",
    descEn:
      "Matcha Scoopable features the distinctive, delicious flavor of matcha tea, a bright green color, and a soft texture that makes every bite a delight.",
    textureId: ["Moist", "Dense", "Softy", "Cheesy"],
    textureEn: ["Moist", "Dense", "Softy", "Cheesy"],
  },
  {
    id: "sc-cookies-cream",
    name: "Scoopable Cookies n Cream",
    shortName: "Scoopable Cookies n Cream",
    category: "Scoopable",
    image: SCOOPABLE_IMAGES.sco_cookies_cream,
    labels: ["New Menu"],
    price: 15000,
    bestFor: ["Self Treat", "Teman Ngopi", "Gift"],
    discountPct: 20,
    accent: "#8D5B4C",
    descId:
      "Cookie lembut dengan Oreo, white choco chips, dan filling cokelat lumer yang kaya dan memanjakan.",
    descEn:
      "A soft Scoopable with Oreo, white chocolate chips, and a rich molten chocolate filling.",
    textureId: ["Moist", "Dense", "Softy"],
    textureEn: ["Moist", "Dense", "Softy"],
  },
];




// Compute discounted unit price for a regular product (not a bundle).
export const unitPrice = (product) => {
  if (product.isBundle) return product.bundlePrice;
  if (product.discountPct > 0) {
    return Math.round(product.price * (1 - product.discountPct / 100));
  }
  return product.price;
};

export const COOKIE_BUNDLE = {
  id: "bundle-cookies-4",
  name: "Bundling Cookies 4 Varian",
  nameEn: "4-Variant Cookie Bundle",
  category: "Cookies",
  isBundle: true,
  image: LOGO_URL,
  contents: [
    "classic-og",
    "velvet-crush",
    "matcha-cookies",
    "cookies-cream",
  ],
  originalPrice: 46000,
  bundleDiscountPct: 10,
  bundlePrice: 41400,
  accent: "#8D5B4C",
  descId:
    "Satu set lengkap 4 varian cookies Moobits. Diskon 10% untuk paket bundling.",
  descEn:
    "A complete set of all 4 Moobits cookie variants. 10% off bundle promo.",
  textureId: [
    "1× Classic OG",
    "1× Velvet Crush",
    "1× Matcha",
    "1× Cookies n Cream",
  ],
  textureEn: [
    "1× Classic OG",
    "1× Velvet Crush",
    "1× Matcha",
    "1× Cookies n Cream",
  ],
};

export const formatIDR = (n) => `Rp${n.toLocaleString("id-ID")}`;

export const generateInvoiceNumber = () => {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const dateKey = `${y}${m}${d}`;
  const counterKey = `moobits_invoice_counter_${dateKey}`;

  let n = 1;

  try {
    const stored = parseInt(localStorage.getItem(counterKey) || "0", 10);
    n = (isNaN(stored) ? 0 : stored) + 1;
    localStorage.setItem(counterKey, String(n));
  } catch (e) {
    n = 1;
  }

  return `MBT-${dateKey}-${String(n).padStart(3, "0")}`;
};

export { CATEGORIES };
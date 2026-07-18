import { useState, useMemo, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Info, Search, Frown } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { products } from "../data/products";
import { CATEGORIES } from "../constants/testIds/categories";
import ProductCard from "../components/ProductCard";
import Disclaimer from "../components/Disclaimer";
import StickyOrderBar from "../components/StickyOrderBar";

export default function Menu() {
  const { t } = useLang();
  const location = useLocation();
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filterRefs = useRef({});

  const scrollRef = useRef(null);
  const indicatorRef = useRef(null);
  const animationRef = useRef(null);  
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const currentButton = filterRefs.current[active];
    if (!currentButton) return;

    setPillStyle({
      left: currentButton.offsetLeft,
      width: currentButton.offsetWidth,
    });
  }, [active, t.menu.filters]);

  useEffect(() => {
    if (location.state?.category && CATEGORIES.includes(location.state.category)) {
      setActive(location.state.category);
    }
  }, [location.state]);

useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  const handleScroll = () => {
    if (animationRef.current) return;

    animationRef.current = requestAnimationFrame(() => {
      const indicator = indicatorRef.current;
      if (!indicator) return;

      const max = el.scrollWidth - el.clientWidth;
      const progress = max > 0 ? el.scrollLeft / max : 0;

      indicator.style.transform = `translate3d(${progress * 64}px,0,0)`;

      animationRef.current = null;
    });
  };

  el.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    el.removeEventListener("scroll", handleScroll);

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };
}, []);

  const filtered = useMemo(() => {
      return products.filter((p) => {
    const matchCategory = active === "All" || p.category === active;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });
}, [active, search]);

  return (
    <div data-testid="page-menu">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#FCD34D]/20 blur-3xl" />
          <div className="absolute top-1/2 -right-20 h-[360px] w-[360px] rounded-full bg-[#86A789]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-12 md:pt-20 pb-8">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8D5B4C]">
            <span className="h-1 w-6 rounded-full bg-[#8D5B4C]" />
            {t.menu.eyebrow}
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#121212]">
            {t.menu.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#525252]">
            {t.menu.sub}
          </p>
        </div>
      </section>

      {/* Sticky-feel filter bar */}
      <section className="py-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            data-testid="menu-filter-bar"
            className="flex flex-col lg:flex-row lg:items-center gap-3"
          >
<div className="relative">
  <div 
  ref={scrollRef} 
  
  className="relative overflow-x-auto scrollbar-hide touch-pan-x">
    <div
      className="relative flex w-max gap-2 rounded-full bg-[#FDFBF7] p-1.5 ring-1 ring-black/5"
    >
      <span
        className="absolute top-1.5 bottom-1.5 rounded-full bg-[#FCD34D] shadow-sm transition-all duration-300 ease-out"
        style={{
          left: pillStyle.left,
          width: pillStyle.width,
        }}
      />

      {t.menu.filters.map((f) => (
        <button
          key={f}
          ref={(el) => {
            filterRefs.current[f] = el;
          }}
          onClick={() => setActive(f)}
          className={`relative z-10 shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-[13.5px] font-semibold transition-colors duration-300 ${
            active === f
              ? "text-[#121212]"
              : "text-[#525252] hover:text-[#121212]"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  </div>

  {/* Fade kanan */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white via-white/80 to-transparent lg:hidden" />
</div>

<div className="lg:hidden mt-3 flex justify-center">
  <div className="relative h-1.5 w-24 rounded-full bg-black/10 overflow-hidden">
    <div
      ref={indicatorRef}
      className="absolute left-0 top-0 h-full w-8 rounded-full bg-[#FCD34D]"
      style={{
        willChange: "transform",
        transform: "translate3d(0,0,0)",
      }}
    />
  </div>
</div>

            <div className="relative w-full lg:w-[240px]">
  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#FCD34D]" />
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Cari mood booster kamu..."
    className="w-full rounded-full border border-[#FCD34D] bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#FCD34D]"
  />
</div>
          </div>
        </div>
      </section>


      {/* Product grid */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            data-testid="menu-grid"
          >
{filtered.length === 0 ? (
  <div className="col-span-full flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-[#E8D8C8] bg-[#FFF8EF] px-6 py-16 text-center">
    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
      <Frown className="h-8 w-8 text-[#8D5B4C]" />
    </div>

    <h3 className="text-lg font-semibold text-[#3A2417]">
  Nggak ada apa-apa di sini
</h3>

<p className="mt-2 max-w-sm text-sm text-[#7A6A5E]">
  Produk yang kamu cari belum ketemu. Coba kata kunci lain atau pilih kategori berbeda.
</p>
  </div>
) : (
  filtered.map((p) => (
    <ProductCard key={p.id} product={p} />
  ))
)}
          </div>
        </div>
      </section>

      {/* Info section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2.5rem] bg-[#FDFBF7] p-8 sm:p-10 lg:p-12 ring-1 ring-black/5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-[#8D5B4C]/15 text-[#8D5B4C] flex items-center justify-center">
                <Info size={18} />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#121212]">
                {t.menu.infoTitle}
              </h2>
            </div>
            <ul className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-[14.5px] leading-relaxed text-[#525252]">
              {t.menu.info.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8D5B4C]" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Disclaimer />
              <StickyOrderBar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

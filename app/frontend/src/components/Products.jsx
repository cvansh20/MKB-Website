import { Cylinder, Wrench, ShowerHead, Waves, LayoutGrid, Zap, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE_TEL, WHATSAPP_URL } from "@/data/site";

const ICONS = {
  pipes: Cylinder,
  fittings: Wrench,
  sanitary: ShowerHead,
  pumps: Waves,
  tiles: LayoutGrid,
  electrical: Zap,
};

export const Products = () => {
  const { t } = useLanguage();

  return (
    <section id="products" data-testid="products-section" className="scroll-mt-20 bg-parchment">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">{t.products.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-snug sm:text-4xl">
            {t.products.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-inksoft sm:text-base">{t.products.sub}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.categories.map((cat) => {
            const Icon = ICONS[cat.key];
            return (
              <article
                key={cat.key}
                data-testid={`product-card-${cat.key}`}
                className="rounded-2xl border border-line bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-goldlight text-brassdark">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{cat.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-parchment px-3 py-1.5 text-xs font-medium text-inksoft sm:text-[13px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-inksoft">{t.products.note}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={PHONE_TEL}
              data-testid="products-call-btn"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-black"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {t.hero.call}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="products-whatsapp-btn"
              className="inline-flex items-center gap-2 rounded-full bg-wa px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-wadark"
            >
              {t.hero.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Boxes, Award, HardHat, Warehouse, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICONS = {
  range: Boxes,
  brands: Award,
  pros: HardHat,
  bulk: Warehouse,
  location: MapPin,
};

export const WhyChooseUs = () => {
  const { t } = useLanguage();

  return (
    <section id="why" data-testid="why-section" className="scroll-mt-20 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">{t.why.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-snug sm:text-4xl">
            {t.why.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item) => {
            const Icon = ICONS[item.key];
            return (
              <article
                key={item.key}
                data-testid={`why-card-${item.key}`}
                className="rounded-2xl border border-line bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-goldlight text-brassdark">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-inksoft">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

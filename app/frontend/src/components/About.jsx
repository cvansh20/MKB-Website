import { useLanguage } from "@/context/LanguageContext";
import { StoreImage } from "@/components/StoreImage";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" data-testid="about-section" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">{t.about.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-snug sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-inksoft sm:text-base">{t.about.p1}</p>
            <p className="mt-4 text-sm leading-relaxed text-inksoft sm:text-base">{t.about.p2}</p>
            <p className="mt-8 border-l-2 border-brass pl-4 text-xs font-medium text-inksoft sm:text-sm">
              {t.about.caption}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StoreImage
              src="/images/store-1.png"
              alt={t.about.photoAlt}
              placeholderLabel={t.about.photoPlaceholder}
              className="col-span-2 aspect-[16/10] w-full rounded-2xl shadow-sm"
            />
            <StoreImage
              src="/images/store-2.png"
              alt={t.about.photoAlt}
              placeholderLabel={t.about.photoPlaceholder}
              className="aspect-[4/3] w-full rounded-2xl shadow-sm"
            />
            <StoreImage
              src="/images/store-3.png"
              alt={t.about.photoAlt}
              placeholderLabel={t.about.photoPlaceholder}
              className="aspect-[4/3] w-full rounded-2xl shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

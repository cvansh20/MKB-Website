import { Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE_TEL, WHATSAPP_URL } from "@/data/site";

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88m8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41" />
  </svg>
);

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-16 lg:pt-20">
      <div className="pattern-dots pointer-events-none absolute inset-x-0 top-0 h-72 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p
              data-testid="hero-badge"
              className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-inksoft sm:text-sm"
            >
              <MapPin className="h-3.5 w-3.5 text-brass" aria-hidden="true" />
              {t.hero.badge}
            </p>
            <h1
              data-testid="hero-title"
              className="animate-fade-up mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.08s" }}
            >
              {t.hero.title}
            </h1>
            <p
              data-testid="hero-subtitle"
              className="animate-fade-up mt-4 text-base font-semibold text-brass sm:text-lg"
              style={{ animationDelay: "0.16s" }}
            >
              {t.hero.subtitle}
            </p>
            <p
              className="animate-fade-up mt-4 max-w-xl text-sm leading-relaxed text-inksoft sm:text-base"
              style={{ animationDelay: "0.24s" }}
            >
              {t.hero.support}
            </p>
            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.32s" }}
            >
              <a
                href={PHONE_TEL}
                data-testid="hero-call-btn"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream shadow-md transition-transform hover:-translate-y-0.5 hover:bg-black sm:px-7"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {t.hero.call}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-btn"
                className="inline-flex items-center gap-2 rounded-full bg-wa px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-wadark sm:px-7"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.hero.whatsapp}
              </a>
              <a
                href="#visit"
                data-testid="hero-directions-btn"
                className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-white sm:px-7"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {t.hero.directions}
              </a>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-line border-y border-line py-5">
              {t.hero.stats.map((s) => (
                <div key={s.label} className="px-4 first:pl-0">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-lg font-semibold text-ink sm:text-xl">{s.value}</dd>
                  <dd className="mt-1 text-[11px] leading-snug text-inksoft sm:text-xs">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div
              className="animate-fade-up relative rounded-3xl border border-line bg-parchment p-10 text-center shadow-sm"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-goldlight/70" aria-hidden="true" />
              <img
                src="/logo.svg"
                alt={t.hero.logoAlt}
                className="mx-auto h-36 w-36 rounded-3xl shadow-lg sm:h-44 sm:w-44"
              />
              <p className="mt-6 font-display text-lg font-semibold text-ink">{t.hero.cardLocation}</p>
              <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-inksoft shadow-sm">
                <Clock className="h-3.5 w-3.5 text-brass" aria-hidden="true" />
                {t.hero.cardHours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { MapPin, Map as MapIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ADDRESS_LINES, MAPS_EMBED_URL, directionsHref, isMapsPlaceholder } from "@/data/site";

export const MapSection = () => {
  const { t } = useLanguage();

  return (
    <section id="visit" data-testid="visit-section" className="scroll-mt-20 bg-parchment">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">{t.map.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-snug sm:text-4xl">
            {t.map.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-inksoft sm:text-base">{t.map.sub}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col justify-between gap-8 rounded-2xl border border-line bg-white p-8 lg:col-span-2">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
              <address className="text-sm not-italic leading-relaxed text-ink sm:text-base">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="map-directions-btn"
                className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brassdark"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {t.map.directions}
              </a>
              {isMapsPlaceholder && (
                <p className="mt-3 text-xs text-inksoft" data-testid="map-placeholder-note">
                  {t.map.placeholderNote}
                </p>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm lg:col-span-3">
            {isMapsPlaceholder ? (
              <div
                data-testid="map-placeholder"
                className="pattern-dots flex h-72 flex-col items-center justify-center gap-3 p-8 text-center sm:h-96"
              >
                <MapIcon className="h-10 w-10 text-brass" aria-hidden="true" />
                <p className="font-display text-lg font-semibold text-ink">{t.map.placeholderTitle}</p>
                <p className="max-w-sm text-sm text-inksoft">{t.map.placeholderText}</p>
              </div>
            ) : (
              <iframe
                src={MAPS_EMBED_URL}
                title={t.map.iframeTitle}
                data-testid="map-iframe"
                className="h-72 w-full border-0 sm:h-96"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

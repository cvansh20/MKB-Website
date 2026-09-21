import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  EMAIL,
  EMAIL_URL,
  ADDRESS_LINES,
  directionsHref,
} from "@/data/site";

export const Contact = () => {
  const { t } = useLanguage();

  const methods = [
    {
      key: "call",
      icon: Phone,
      label: t.contact.callLabel,
      value: PHONE_DISPLAY,
      href: PHONE_TEL,
      btn: t.contact.callBtn,
      testid: "contact-call",
      btnClass: "bg-ink text-cream hover:bg-black",
    },
    {
      key: "whatsapp",
      icon: MessageCircle,
      label: t.contact.whatsappLabel,
      value: WHATSAPP_DISPLAY,
      href: WHATSAPP_URL,
      btn: t.contact.whatsappBtn,
      testid: "contact-whatsapp",
      external: true,
      btnClass: "bg-wa text-white hover:bg-wadark",
    },
    {
      key: "email",
      icon: Mail,
      label: t.contact.emailLabel,
      value: EMAIL,
      href: EMAIL_URL,
      btn: t.contact.emailBtn,
      testid: "contact-email",
      btnClass: "border border-ink/25 text-ink hover:border-ink hover:bg-parchment",
    },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">{t.contact.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-snug sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-inksoft sm:text-base">{t.contact.sub}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-5 lg:col-span-3">
            {methods.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.key}
                  data-testid={`${m.testid}-card`}
                  className="flex flex-col gap-4 rounded-2xl border border-line bg-cream p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-goldlight text-brassdark">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-inksoft">{m.label}</p>
                      <p className="mt-0.5 break-all font-display text-base font-semibold text-ink sm:text-lg">
                        {m.value}
                      </p>
                    </div>
                  </div>
                  <a
                    href={m.href}
                    data-testid={`${m.testid}-btn`}
                    {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${m.btnClass}`}
                  >
                    {m.btn}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl bg-ink p-8 text-cream lg:col-span-2">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-goldlight" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/60">
                  {t.contact.addressLabel}
                </p>
                <address className="mt-2 text-sm not-italic leading-relaxed text-cream/90">
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3 border-t border-cream/15 pt-6">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-goldlight" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/60">
                  {t.contact.hoursLabel}
                </p>
                <p className="mt-2 text-sm font-medium text-cream/90">{t.contact.hoursValue}</p>
              </div>
            </div>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-directions-btn"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brassdark"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {t.contact.directions}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

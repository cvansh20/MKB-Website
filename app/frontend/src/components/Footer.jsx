import { Phone, Mail, Instagram, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  EMAIL,
  EMAIL_URL,
  INSTAGRAM_URL,
  ADDRESS_LINES,
} from "@/data/site";

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "#home", label: t.footer.links.home, testid: "footer-home-link" },
    { href: "#about", label: t.footer.links.about, testid: "footer-about-link" },
    { href: "#products", label: t.footer.links.products, testid: "footer-products-link" },
    { href: "#why", label: t.footer.links.why, testid: "footer-why-link" },
    { href: "#contact", label: t.footer.links.contact, testid: "footer-contact-link" },
    { href: "#visit", label: t.footer.links.visit, testid: "footer-visit-link" },
  ];

  return (
    <footer data-testid="footer" className="bg-ink text-cream/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="M K & B logo" className="h-11 w-11 rounded-xl" />
              <p className="font-display text-lg font-semibold text-cream">{BUSINESS_NAME}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{t.footer.tagline}</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-sm font-medium text-cream transition-colors hover:border-goldlight hover:text-goldlight"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              {t.footer.instagram}
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold uppercase tracking-wide text-cream">{t.footer.quickLinks}</p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={l.testid}
                    className="text-sm transition-colors hover:text-goldlight"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cream">{t.footer.contactTitle}</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={PHONE_TEL} data-testid="footer-phone-link" className="flex items-center gap-2.5 transition-colors hover:text-goldlight">
                  <Phone className="h-4 w-4 shrink-0 text-goldlight" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp-link"
                  className="flex items-center gap-2.5 transition-colors hover:text-goldlight"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-goldlight" aria-hidden="true" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={EMAIL_URL} data-testid="footer-email-link" className="flex items-center gap-2.5 break-all transition-colors hover:text-goldlight">
                  <Mail className="h-4 w-4 shrink-0 text-goldlight" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cream">{t.footer.hoursTitle}</p>
            <p className="mt-4 flex items-center gap-2.5 text-sm">
              <Clock className="h-4 w-4 shrink-0 text-goldlight" aria-hidden="true" />
              {t.footer.hoursValue}
            </p>
            <address className="mt-4 text-sm not-italic leading-relaxed">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/15 pt-6 text-center text-xs text-cream/60 sm:text-sm">
          <p data-testid="footer-copyright">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

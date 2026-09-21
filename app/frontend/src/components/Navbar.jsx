import { useState } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS_NAME, PHONE_TEL } from "@/data/site";

const LangToggle = ({ compact = false }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className="flex items-center rounded-full border border-line bg-white p-1"
      role="group"
      aria-label="Language"
    >
      {[
        { code: "en", label: "EN", testid: "lang-toggle-en" },
        { code: "hi", label: "हिंदी", testid: "lang-toggle-hi" },
      ].map(({ code, label, testid }) => (
        <button
          key={code}
          type="button"
          data-testid={testid}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`rounded-full font-semibold transition-colors ${
            compact ? "px-2.5 py-1 text-[11px]" : "px-3 py-1 text-xs"
          } ${lang === code ? "bg-ink text-cream" : "text-inksoft hover:text-ink"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "#home", label: t.nav.home, testid: "nav-home-link" },
    { href: "#about", label: t.nav.about, testid: "nav-about-link" },
    { href: "#products", label: t.nav.products, testid: "nav-products-link" },
    { href: "#contact", label: t.nav.contact, testid: "nav-contact-link" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20">
        <a href="#home" data-testid="nav-logo-link" className="flex min-w-0 items-center gap-3">
          <img
            src="/logo.svg"
            alt="M K & B logo"
            className="h-10 w-10 shrink-0 rounded-xl lg:h-11 lg:w-11"
          />
          <span className="hidden truncate font-display text-lg font-semibold sm:block">
            {BUSINESS_NAME}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="text-sm font-medium text-inksoft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle compact />
          <a
            href="#visit"
            data-testid="nav-directions-btn"
            className="hidden items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brassdark lg:inline-flex"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {t.nav.directions}
          </a>
          <button
            type="button"
            data-testid="mobile-menu-btn"
            aria-label={open ? t.nav.closeLabel : t.nav.menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="border-t border-line bg-cream px-4 pb-6 pt-3 shadow-lg lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`mobile-${l.testid}`}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3.5 text-base font-medium text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="#visit"
              data-testid="mobile-directions-btn"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brass px-5 py-3 text-sm font-semibold text-white"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {t.nav.directions}
            </a>
            <a
              href={PHONE_TEL}
              data-testid="mobile-call-btn"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {t.hero.call}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

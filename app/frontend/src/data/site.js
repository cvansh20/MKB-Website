export const BUSINESS_NAME = "Manoj Kumar & Brothers";

export const PHONE_DISPLAY = "+91 90444 88462";
export const PHONE_TEL = "tel:+919044488462";

export const WHATSAPP_DISPLAY = "+91 93055 65746";
export const WHATSAPP_URL =
  "https://wa.me/919305565746?text=Hello%20Manoj%20Kumar%20%26%20Brothers%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";

export const EMAIL = "manojjaiswal25125@gmail.com";
export const EMAIL_URL = `mailto:${EMAIL}`;

export const INSTAGRAM_URL = "https://www.instagram.com/rd_home_ms";

export const ADDRESS_LINES = [
  "Front of Saree Sansar,",
  "Main Road, Jaunpur Road,",
  "Shahganj, Jaunpur,",
  "Uttar Pradesh, India",
];

/* ================================================================
   GOOGLE MAPS — EDIT ONLY THESE TWO LINES
   1. MAPS_EMBED_URL: Google Maps → Share → "Embed a map" → copy the
      URL inside src="..." of the iframe code, and paste it below.
   2. MAPS_DIRECTIONS_URL: Google Maps → Share → "Copy link".
   Until replaced, the site shows a clearly marked map placeholder
   and the directions button falls back to a generic address search.
   ================================================================ */
export const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896.0912277585662!2d82.68135016961145!3d26.054328098573073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39905b2fc98bcc73%3A0x97a537a4765717a6!2z4KSu4KSo4KWL4KScIOCkleClgeCkruCkvuCksCDgpI_gpKPgpY3gpKEg4KSs4KWN4KSw4KSm4KSw4KWN4KS4!5e0!3m2!1sen!2sin!4v1790282729985!5m2!1sen!2sin";
export const MAPS_DIRECTIONS_URL = "YOUR_GOOGLE_MAPS_DIRECTIONS_URL_HERE";

export const DIRECTIONS_FALLBACK =
  "https://www.google.com/maps/search/?api=1&query=Manoj+Kumar+%26+Brothers,+Jaunpur+Road,+Shahganj,+Jaunpur,+Uttar+Pradesh";

export const isMapsPlaceholder = MAPS_EMBED_URL.includes("YOUR_GOOGLE_MAPS");
export const directionsHref = MAPS_DIRECTIONS_URL.includes("YOUR_GOOGLE_MAPS")
  ? DIRECTIONS_FALLBACK
  : MAPS_DIRECTIONS_URL;

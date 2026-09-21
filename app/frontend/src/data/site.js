export const BUSINESS_NAME = "Manoj Kumar & Brothers";

export const PHONE_DISPLAY = "+91 63944 52042";
export const PHONE_TEL = "tel:+916394452042";

export const WHATSAPP_DISPLAY = "+91 93055 65746";
export const WHATSAPP_URL =
  "https://wa.me/919305565746?text=Hello%20Manoj%20Kumar%20%26%20Brothers%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";

export const EMAIL = "manojjaiswal25125@gmail.com";
export const EMAIL_URL = `mailto:${EMAIL}`;

export const INSTAGRAM_URL = "https://www.instagram.com/rd_home_ms";

export const ADDRESS_LINES = [
  "Next to Hotel RD Inn,",
  "Rasoolpur, Jaunpur Road,",
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
export const MAPS_EMBED_URL = "YOUR_GOOGLE_MAPS_EMBED_URL_HERE";
export const MAPS_DIRECTIONS_URL = "YOUR_GOOGLE_MAPS_DIRECTIONS_URL_HERE";

export const DIRECTIONS_FALLBACK =
  "https://www.google.com/maps/search/?api=1&query=Manoj+Kumar+%26+Brothers,+Jaunpur+Road,+Shahganj,+Jaunpur,+Uttar+Pradesh";

export const isMapsPlaceholder = MAPS_EMBED_URL.includes("YOUR_GOOGLE_MAPS");
export const directionsHref = MAPS_DIRECTIONS_URL.includes("YOUR_GOOGLE_MAPS")
  ? DIRECTIONS_FALLBACK
  : MAPS_DIRECTIONS_URL;

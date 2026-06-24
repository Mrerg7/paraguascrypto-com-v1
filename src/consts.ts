export const SITE = {
  name: 'paraguascrypto.com',
  title: 'Paraguascrypto.com • Crypto Umbrella | Premium Domain for Sale',
  description:
    'Paraguascrypto.com — The premium .com domain meaning "Crypto Umbrella". A powerful, protective, and unifying brand for comprehensive crypto platforms, security solutions, and all-encompassing digital asset ecosystems. Now available for acquisition.',
  url: 'https://paraguascrypto.com',
  locale: 'en_US',
  acquisitionEmail: 'sales@desertrich.com',
  updated: '2026-06-01',
} as const;

export const ACQUISITION_MAILTO = `mailto:${SITE.acquisitionEmail}?subject=${encodeURIComponent(
  `${SITE.name} — Domain Acquisition Inquiry`,
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring paraguascrypto.com. Please share availability, terms, and next steps.\n\n— ',
)}`;

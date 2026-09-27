export const SITE = {
  name: 'paraguascrypto.com',
  title: 'Paraguascrypto.com for Sale — Crypto Umbrella | $27,500',
  description:
    'paraguascrypto.com is for sale at $27,500. Crypto Umbrella — Spanish “paraguas” means umbrella, not Paraguay. Escrow transfer for insurance, custody, and umbrella brands.',
  url: 'https://paraguascrypto.com',
  locale: 'en_US',
  acquisitionEmail: 'sales@desertrich.com',
  updated: '2026-09-27',
  askingPrice: 27500,
  askingPriceLabel: '$27,500',
} as const;

export const OG_IMAGE =
  'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/d9f4fb75-6f2a-4b10-c4b2-edbb1f696800/public';

export const ACQUISITION_MAILTO = `mailto:${SITE.acquisitionEmail}?subject=${encodeURIComponent(
  `${SITE.name} — Domain Acquisition Inquiry`,
)}&body=${encodeURIComponent(
  `Hello,\n\nI am interested in acquiring paraguascrypto.com (asking price ${SITE.askingPriceLabel} USD).\n\nName:\nEmail:\nCompany:\nOffer (USD):\nIntended use:\n\n— `,
)}`;

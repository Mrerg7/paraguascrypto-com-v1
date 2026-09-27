import { OG_IMAGE, SITE } from '../consts';
import type { Faq } from '../data/faq';

const orgId = `${SITE.url}/#organization`;
const siteId = `${SITE.url}/#website`;
const productId = `${SITE.url}/#domain`;

export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': orgId,
    name: 'Desert Rich',
    url: SITE.url,
    logo: OG_IMAGE,
    email: SITE.acquisitionEmail,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE.acquisitionEmail,
      availableLanguage: ['English', 'Spanish'],
      url: `${SITE.url}/acquire/`,
    },
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': siteId,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: ['en-US', 'es'],
    publisher: { '@id': orgId },
  };
}

export function productNode() {
  return {
    '@type': 'Product',
    '@id': productId,
    name: 'paraguascrypto.com',
    description: SITE.description,
    url: `${SITE.url}/acquire/`,
    category: 'Domain Name',
    sku: 'paraguascrypto.com',
    brand: { '@type': 'Brand', name: SITE.name },
    image: OG_IMAGE,
    offers: {
      '@type': 'Offer',
      url: `${SITE.url}/acquire/`,
      price: SITE.askingPrice.toFixed(2),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
      priceValidUntil: '2027-12-31',
      seller: { '@id': orgId },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
        returnMethod: 'https://schema.org/ReturnByMail',
        applicableCountry: 'US',
        merchantReturnDays: 0,
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: 'USD' },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 5,
            unitCode: 'd',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'd',
          },
        },
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
      },
    },
  };
}

export function webPageNode(opts: {
  path: string;
  title: string;
  description: string;
  lang: string;
}) {
  return {
    '@type': 'WebPage',
    '@id': `${SITE.url}${opts.path}#webpage`,
    url: `${SITE.url}${opts.path}`,
    name: opts.title,
    description: opts.description,
    inLanguage: opts.lang,
    isPartOf: { '@id': siteId },
    about: { '@id': productId },
    dateModified: SITE.updated,
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function faqNode(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function graph(nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}

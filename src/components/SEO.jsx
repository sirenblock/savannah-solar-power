import React from 'react';

/**
 * SEO Component for meta tags
 * This component works with both Next.js (using next/head) and react-helmet
 * Uncomment the appropriate import based on your framework
 */

// For Next.js:
// import Head from 'next/head';

// For React with react-helmet:
// import { Helmet } from 'react-helmet';

const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonicalUrl
}) => {
  const siteTitle = 'Savannah Solar Power';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  // For Next.js, uncomment this:
  /*
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph *//*}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card *//*}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical URL *//*}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Viewport and charset *//*}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  );
  */

  // For react-helmet, uncomment this:
  /*
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph *//*}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card *//*}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical URL *//*}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
  */

  // Placeholder return for now (uncomment the appropriate section above when framework is determined)
  return null;
};

export default SEO;

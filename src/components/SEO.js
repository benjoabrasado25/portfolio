import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = "Benjo M. Abrasado - Full Stack Developer",
  description = "Full Stack Developer specializing in Angular, React, Node.js, and WordPress. Crafting beautiful web experiences.",
  image = "/og-image.png",
  url = "https://benjomabrasado.space",
  type = "website",
  keywords = "Full Stack Developer, Angular, React, Node.js, WordPress, Web Development, ZCA Softwares"
}) => {
  const fullTitle = title.includes("Benjo") ? title : `${title} | Benjo Abrasado`;
  const fullUrl = url.startsWith('http') ? url : `https://benjomabrasado.space${url}`;
  const fullImage = image.startsWith('http') ? image : `https://benjomabrasado.space${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
};

export default SEO;

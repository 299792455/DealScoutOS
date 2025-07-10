export default function Head() {
  return (
    <>
      {/* 🔹 Titre + Description */}
      <title>DealScout – Find the best YouTube deals in one click</title>
      <meta
        name="description"
        content="With DealScout, get the promo code, discount percentage, and offer link from sponsored YouTube videos in one click. A Chrome extension that fully respects your privacy."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* 🔹 Favicon + PWA icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />

      {/* 🔹 Open Graph (SEO + Social) */}
      <meta property="og:title" content="DealScout – Find YouTube deals in one click" />
      <meta
        property="og:description"
        content="Get promo codes, discounts, and offer links from sponsored YouTube videos instantly with DealScout."
      />
      <meta property="og:image" content="/icon.png" />
      <meta property="og:url" content="https://dealscout.deals/" />
      <meta property="og:type" content="website" />

      {/* 🔹 Twitter card (facultatif mais recommandé) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DealScout – Find YouTube deals in one click" />
      <meta
        name="twitter:description"
        content="Get promo codes, discounts, and offer links from sponsored YouTube videos instantly with DealScout."
      />
      <meta name="twitter:image" content="/icon.png" />
    </>
  );
}

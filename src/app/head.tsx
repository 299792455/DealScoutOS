export default function Head() {
  return (
    <>
      <title>DealScout – Find the best YouTube deals in one click</title>
      <meta
        name="description"
        content="With DealScout, get the promo code, discount percentage, and offer link from sponsored YouTube videos in one click. A Chrome extension that fully respects your privacy."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.png" type="image/png" />
      <link rel="manifest" href="/manifest.json" />

      {/* ✅ Open Graph (SEO + social sharing) */}
      <meta property="og:title" content="DealScout – Find YouTube deals in one click" />
      <meta
        property="og:description"
        content="Get promo codes, discounts, and offer links from sponsored YouTube videos instantly with DealScout."
      />
      <meta property="og:image" content="/icon.png" />
      <meta property="og:url" content="https://dealscout.deals/" />
      <meta property="og:type" content="website" />
    </>
  );
}

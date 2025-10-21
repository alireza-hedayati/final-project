import Head from "next/head";

function SEO({ title, description, keywords }) {
  const defaultTitle = "تورینو | Torino Travel";
  const defaultDescription =
    "تورینو، مرجع رزرو و خرید تورهای گردشگری در ایران و جهان.";
  const defaultKeywords = "تور، گردشگری، سفر، تورینو، ایران";

  return (
    <Head>
      <title>{title ? `${title} | تورینو` : defaultTitle}</title>

      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Torino Travel" />

      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#16a34a" />
    </Head>
  );
}

export default SEO;

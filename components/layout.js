import Head from "next/head";
import Header from "components/header";
import Image from "next/image";
import Footer from "components/footer";

export const siteTitle = "Urge Overkill";

export default function Layout({ children, home }) {
  return (
    <div className="text-uo-black bg-white min-h-screen font-display font-light">
      <Head>
        <link rel="icon" href="/images/UO-Logo-hi-res.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="Urge Overkill is an American alternative rock band, formed in Chicago, Illinois, United States, consisting of Nash Kato (vocals/guitar), and Eddie King Roeser (vocals/guitar/bass guitar)"
        />
        <meta property="og:image" content="/images/uo-circle-logo-400px.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

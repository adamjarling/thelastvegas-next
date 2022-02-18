import Head from "next/head";
import Header from "components/header";
import Image from "next/image";
import Footer from "components/footer";

export const siteTitle = "The Last Vegas";

export default function Layout({ children, home }) {
  return (
    <div className="text-white bg-uo-black min-h-screen font-display font-light">
      <Head>
        <link rel="icon" href="/images/LV_Star.jpg" />
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
          content="The Last Vegas is an American hard rock band, formed in Chicago, Illinois, United States"
        />
        <meta property="og:image" content="/images/tlv-old-school-loft.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

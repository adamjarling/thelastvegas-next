import Head from "next/head";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import Image from "next/image";
import { getSortedPostsData } from "lib/posts";
import NewSingle from "components/new-single";
import SplashOuiAlbum from "components/splash-oui-album";
import SplashMerchStore from "components/splash-merch-store";
import { footerSocials } from "../components/footer";
import ExternalLink from "../components/external-link";
import Section from "components/section";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const thePost = allPostsData[0];

  return (
    <Layout>
      <Head>
        <title>The Last Vegas</title>
      </Head>

      <Splash1 photo={"tlv-old-school-loft.jpg"} />
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="text-4xl md:text-6xl xl:text-7xl uppercase text-center max-w-2xl">
          Hard Glam Garage Boogie Rock USA
        </div>
      </div>

      <Section>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TdIMwhFhyIg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col items-center mt-8">
          <p>As seen on </p>
          <div className="flex justify-center">
            <ExternalLink
              noBorder
              url={`https://www.hbomax.com/series/urn:hbo:series:GYb0FKQLsGIyPfQEAAAAM`}
            >
              <Image
                src="/images/peacemaker-tt.webp"
                width="850px"
                height="335px"
              />
            </ExternalLink>
          </div>
        </div>
      </Section>
      {/* <Section isNarrow>
        <ul className="flex flex-col md:flex-row justify-around text-2xl uppercase items-center">
          {footerSocials.map((item) => (
            <li key={item.url} className="mb-6 md:mb-0">
              <ExternalLink url={item.url}>{item.label}</ExternalLink>
            </li>
          ))}
        </ul>
      </Section> */}
    </Layout>
  );
}

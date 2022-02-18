import Head from "next/head";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import Image from "next/image";
import { getSortedPostsData } from "lib/posts";
import Saturation25 from "components/saturation-25-anniversary";
import Section from "components/section";
import NewSingle from "components/new-single";
import SplashOuiAlbum from "components/splash-oui-album";
import SplashMerchStore from "components/splash-merch-store";

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
        <title>Urge Overkill</title>
      </Head>

      <Splash1 photo={"UO-PressPhoto2byJerodHerzog.jpeg"} />
      <SplashOuiAlbum />

      <NewSingle />
      <SplashMerchStore />
    </Layout>
  );
}

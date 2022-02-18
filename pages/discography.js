import Head from "next/head";
import Layout from "components/layout";
import Image from "next/image";
import Section from "components/section";
import LinkButton from "components/link-button";
import ImageCalloutWrapper from "components/image-callout/wrapper";
import ImageCalloutImage from "components/image-callout/image";
import ImageCalloutCallout from "components/image-callout/callout";
import ExternalLink from "components/external-link";
import { FaSpotify, FaYoutube, FaApple, FaAmazon } from "react-icons/fa";
import * as manifest from "music-release-manifest";

export default function Discography() {
  function isEvenRow(i) {
    return i % 2 > 0 && i !== 0;
  }

  return (
    <Layout>
      <Head>
        <title>Discography - The Last Vegas</title>
      </Head>

      <div className="pt-10 ">
        <Section>
          {releases.map(({ src, title, manifestItems, year }, i) => (
            <div key={src} className="mb-24">
              <ImageCalloutWrapper isReversed={isEvenRow(i)}>
                <ImageCalloutImage>
                  <Image
                    src={`/images/${src}`}
                    alt={title}
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                </ImageCalloutImage>
                <ImageCalloutCallout isReversed={isEvenRow(i)}>
                  <h2 className="pb-0 pt-8 md:p-0 text-6xl">{title}</h2>
                  <p className="uppercase py-6 md:py-12">Album - {year}</p>
                  <div className="flex flex-col md:flex-row justify-between">
                    {title === "Oui" && (
                      <LinkButton
                        isExternal
                        href="http://omnivorerecordings.com/shop/oui/"
                      >
                        Order Now!
                      </LinkButton>
                    )}
                    <div className="ml-2">
                      <LinkButton isExternal href={manifestItems.spotify}>
                        <span className="flex items-center justify-center">
                          <FaSpotify /> <span className="pl-3">Listen</span>
                        </span>
                      </LinkButton>
                    </div>
                  </div>

                  {/* <div className="flex text-2xl mt-10 mb-6">
                    <ExternalLink url={manifestItems.youTubeMusic}>
                      <FaYoutube />
                    </ExternalLink>
                    <span className="px-6">
                      <ExternalLink url={manifestItems.appleMusic}>
                        <FaApple />
                      </ExternalLink>
                    </span>
                    {manifestItems.amazonMusic && (
                      <ExternalLink url={manifestItems.amazonMusic}>
                        <FaAmazon />
                      </ExternalLink>
                    )}
                  </div> */}
                </ImageCalloutCallout>
              </ImageCalloutWrapper>
            </div>
          ))}
        </Section>
      </div>
    </Layout>
  );
}

export const releases = [
  {
    src: "uo-oui-album-1200px.jpg",
    title: "Oui",
    manifestItems: manifest.oui,
    year: "2022",
  },
  {
    src: "rock-roll-submarine.jpg",
    title: "Rock and Roll Submarine",
    manifestItems: manifest.rnrSubmarine,
    year: "2011",
  },
  {
    src: "album-Exit-06.jpg",
    title: "Exit the Dragon",
    manifestItems: manifest.exitTheDragon,
    year: "1995",
  },
  {
    src: "album-Saturarion-08.jpg",
    title: "Saturation",
    manifestItems: manifest.saturation,
    year: "1993",
  },
  {
    src: "album-stull.jpg",
    title: "Stull",
    manifestItems: manifest.stull,
    year: "1992",
  },
  {
    src: "album-Storybook-04.jpg",
    title: "The Supersonic Storybook",
    manifestItems: manifest.storybook,
    year: "1991",
  },
  {
    src: "album-AmeriJUS-02.jpg",
    title: "Americruiser",
    manifestItems: manifest.americruiser,
    year: "1990",
  },
  {
    src: "album-jesus-urge-superstar.jpg",
    title: "Jesus Urge Superstar",
    manifestItems: manifest.jesusUrgeSuperstar,
    year: "1989",
  },
];

import React from "react";
import LinkButton from "./link-button";
import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";

function SplashOuiAlbum() {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: `/images/uo-oui-album-1200px.jpg`,
          },
        ]}
        style={{ height: "60vh" }}
      >
        <ParallaxBannerChildren>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-center">Oui</h2>
          </div>
        </ParallaxBannerChildren>
      </ParallaxBanner>

      <section className="flex flex-col items-center justify-center">
        <div className="max-w-screen-lg my-6 text-center">
          <h2>First new album from Urge Overkill in a decade.</h2>
          <h3>Out Now!</h3>
          <p>
            When the world was asked if it was time for new music from Urge
            Overkill, it responded with one word — <i>Oui</i>.
          </p>
          <p>
            Oui is the new release from Nash Kato and King Roeser—their first in
            over a decade. It’s full of their signature mix of rock, hooks, and
            fancy bling, which is exactly what a post-pandemic planet has needed
            for far too long.
          </p>
          <LinkButton isExternal href="http://omnivorerecordings.com/shop/oui/">
            Buy Album
          </LinkButton>
        </div>
      </section>
    </div>
  );
}

export default SplashOuiAlbum;

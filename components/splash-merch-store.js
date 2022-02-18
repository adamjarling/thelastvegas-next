import React from "react";
import LinkButton from "./link-button";
import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";

function SplashMerchStore() {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: `/images/OUBULLBANNER_1.png`,
          },
        ]}
        style={{ height: "60vh" }}
      >
        <ParallaxBannerChildren>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-center"></h2>
          </div>
        </ParallaxBannerChildren>
      </ParallaxBanner>

      <section className="flex flex-col items-center justify-center">
        <div className="max-w-screen-lg my-6 text-center">
          <div className="flex-col md:flex-row ">
            <span className="pb-4 md:pr-6 inline-block">
              <LinkButton
                isExternal
                href="https://www.hellomerch.com/collections/the-last-vegas"
              >
                US Store
              </LinkButton>
            </span>
            <LinkButton
              isExternal
              href="https://www.musicglue.com/the-last-vegas/"
            >
              EU/UK Store
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SplashMerchStore;

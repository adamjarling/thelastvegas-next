import React from "react";
import LinkButton from "./link-button";
import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";

function Saturation25(props) {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: `/images/Side-Two.jpeg`,
          },
        ]}
        style={{ height: "60vh" }}
      >
        <ParallaxBannerChildren>
          <h2 className="text-white text-center">
            25th Anniversary Saturation Vinyl
          </h2>
        </ParallaxBannerChildren>
      </ParallaxBanner>
      <div className="my-6 text-center">
        <LinkButton href="https://www.newburycomics.com/collections/pre-orders/products/urge_overkill-saturation_exclusive_lp?variant=21259044454505">
          Get it now
        </LinkButton>
      </div>
    </div>
  );
}

export default Saturation25;

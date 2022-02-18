import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";
import Link from "next/link";

function Splash1({ photo }) {
  return (
    <ParallaxBanner
      layers={[
        {
          amount: 0.2,
          image: `/images/${photo}`,
        },
      ]}
      style={{ height: "80vh" }}
    >
      <ParallaxBannerChildren>
        <div className="flex flex-col items-center">
          {/* <h2 className="text-white text-center">
            Hard Glam Garage Boogie Rock USA
          </h2> */}
        </div>
      </ParallaxBannerChildren>
    </ParallaxBanner>
  );
}

export default Splash1;

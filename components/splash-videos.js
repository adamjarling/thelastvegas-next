import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/parallax-banner-children";

const videos = [
  {
    id: "1fr1iyhkyVs",
    title: "Girl, You'll be a Woman Soon",
  },
  {
    id: "yzFlPdHt1Gk",
    title: "Sister Havana",
  },
  {
    id: "ww-f4glTOdw",
    title: "Positive Bleeding",
  },
  {
    id: "RF5i7mjCGxM",
    title: "The Break",
  },
  {
    id: "5zo2k7HPzjc",
    title: "Crackbabies",
  },
];

function SplashVideos(props) {
  return (
    <>
      {/* <ParallaxBanner
        layers={[
          {
            amount: 0.2,
            image: "images/banner-lake.jpg",
          },
        ]}
        style={{ height: "50vh" }}
      >
        <ParallaxBannerChildren>
          <div className="container flex flex-col items-center">
            <h2 className="banner-headline">Videos</h2>
          </div>
        </ParallaxBannerChildren>
      </ParallaxBanner> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
}

export default SplashVideos;

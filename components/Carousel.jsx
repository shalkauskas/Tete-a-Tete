import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function WelcomeCarousel() {
  const createCarouselItemImage = (index, options = {}) => (
    <div key={index} style={{ width: "max-content" }}>
      <img
        style={{ width: "auto", height: "400px" }}
        src={`carousel_${index}.jpg`}
      />
    </div>
  );

  const baseChildren = <div>{[5, 3, 1, 7].map(createCarouselItemImage)}</div>;

  // handle media query
  const [isMobile, setIsMobile] = useState(false);
  function mqChange(mq) {
    setIsMobile(mq.matches);
  }
  useEffect(() => {
    const mq = window.matchMedia("screen and (max-width: 600px)");
    mq.addListener(mqChange);
    mqChange(mq);

    return () => {
      mq.removeListener(mqChange);
    };
  }, []);
  const mobileSize = () => {
    if (isMobile == true) {
      return 80;
    } else {
      return 40;
    }
  };
  return (
    <div className="container mx-auto mb-6 mt-64">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        autoPlay={true}
        showStatus={false}
        swipeable={true}
        centerMode={true}
        centerSlidePercentage={mobileSize()}
        interval={3000}
      >
        {baseChildren.props.children}
      </Carousel>
      <style jsx>{`
        @media screen and (max-width: 1400px) {
          div {
            max-width: 90%;
          }
        }
        @media screen and (max-width: 1024px) {
          div {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

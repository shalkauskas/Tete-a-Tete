import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function WelcomeCarousel() {
  const getConfigurableProps = () => ({
    showArrows: boolean("showArrows", true, tooglesGroupId),
    showStatus: boolean("showStatus", true, tooglesGroupId),
    showIndicators: boolean("showIndicators", true, tooglesGroupId),
    infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
    showThumbs: boolean("showThumbs", true, tooglesGroupId),
    useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
    autoPlay: boolean("autoPlay", true, tooglesGroupId),
    stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
    swipeable: boolean("swipeable", true, tooglesGroupId),
    dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
    emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
    thumbWidth: number("thumbWidth", 100, {}, valuesGroupId),
    selectedItem: number("selectedItem", 0, {}, valuesGroupId),
    interval: number("interval", 3000, {}, valuesGroupId),
    transitionTime: number("transitionTime", 150, {}, valuesGroupId),
    swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),
  });
  const createCarouselItemImage = (index, options = {}) => (
    <div key={index} style={{ width: "max-content" }}>
      <img
        style={{ width: "auto", height: "400px" }}
        src={`carousel_${index}.jpg`}
      />
    </div>
  );

  const baseChildren = <div>{[5, 3, 1, 7].map(createCarouselItemImage)}</div>;
  return (
    <div className="container mx-auto my-6">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        autoPlay={true}
        showStatus={false}
        swipeable={true}
        centerMode={true}
        centerSlidePercentage={40}
        interval={3000}
        width="1318px"
      >
        {baseChildren.props.children}
      </Carousel>
    </div>
  );
}

import SectionTitle from "../../components/SectionTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ServicesMap from "./ServicesMap";
import HandyInfo from "./HandyInfo";
import Buttons from "../../components/Buttons";
import Refferal from "./Refferal";
import NavMap from "./ServicesNavMap";
import React from "react";
export default function Service(props) {
  // responsive carousel
  const [isMobile, setIsMobile] = React.useState(false);
  function mqChange(mq) {
    setIsMobile(mq.matches);
  }
  React.useEffect(() => {
    const mq = window.matchMedia("screen and (max-width: 1080px)");
    mq.addListener(mqChange);
    mqChange(mq);

    return () => {
      mq.removeListener(mqChange);
    };
  }, []);

  // carousel controls
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };
  const next = () => setCurrentSlide(currentSlide + 1);

  const prev = () => setCurrentSlide(currentSlide - 1);
  // mapping nav buttons
  const renderNav = props.service.length <= 1 || isMobile ? "hidden" : "block";
  const mapNavButtons = props.service.map((item, index) => (
    <NavMap
      key={index}
      title={item[0].title}
      currentSlide={currentSlide}
      index={index}
      clickHandle={() => changeSlide(index)}
      isMobile={isMobile}
    />
  ));

  // mapping service info to slides
  const mapServices = props.service.map((item, index) => (
    <ServicesMap
      key={index}
      list={item}
      showSkinCare={props.title === "Skin care"}
      showMobile={isMobile}
      mapNav={mapNavButtons}
      renderNav={props.service.length <= 1 ? "hidden" : "block"}
    />
  ));
  return (
    <div>
      <div className="pt-40 mx-auto sm:max-w-90">
        <SectionTitle title={props.title} showLink={true} isMobile={isMobile} />
        <div className={`${renderNav} mb-12 xl:ml-32 lg:ml-24 buttons`}>
          {mapNavButtons}
        </div>
        <div className="flex flex-wrap flex-row">
          <div className="ml-auto md:pr-12 slide-query">
            <div className="flex">
              <div className={`${renderNav} inline-block my-auto min-content`}>
                <img
                  onClick={prev}
                  className={`w-5 cursor-pointer mr-2 ${
                    currentSlide == 0 ? "invisible" : "inline-block"
                  }`}
                  src="left.png"
                  alt="Prev service"
                ></img>
              </div>
              <div className="inline-block mx-auto">
                <Carousel
                  showThumbs={false}
                  infiniteLoop={false}
                  showArrows={false}
                  showIndicators={false}
                  autoPlay={false}
                  showStatus={false}
                  swipeable={isMobile ? false : true}
                  width={isMobile ? "375px" : "900px"}
                  selectedItem={currentSlide}
                  transitionTime={isMobile ? 1 : 300}
                >
                  {mapServices}
                </Carousel>
              </div>
              <div className={`${renderNav} inline-block my-auto min-content`}>
                <img
                  onClick={next}
                  className={`w-5 cursor-pointer ml-2 ${
                    currentSlide == props.service.length - 1
                      ? "invisible"
                      : "inline-block"
                  }`}
                  src="right.png"
                  alt="Next service"
                ></img>
              </div>
            </div>
            {isMobile ? <Refferal mobile={isMobile} /> : <Buttons />}
          </div>
          <HandyInfo />
        </div>
      </div>
      <style jsx>{`
        .min-content {
          width: max-content;
        }
        @media (max-width: 1521px) {
          .slide-query {
            margin-right: auto;
          }
        }
        @media (max-width: 1052px) {
          .buttons {
            margin-right: auto;
            margin-left: auto;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

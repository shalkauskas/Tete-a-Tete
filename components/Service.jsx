import SectionTitle from "@/components/SectionTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ServicesMap from "@/components/ServicesMap";
import HandyInfo from "@/components/HandyInfo";
import Buttons from "@/components/Buttons";

export default function Service(props) {
  const renderNav = props.service.length <= 1 ? "hidden" : "block";
  // carousel controls
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };
  const next = () =>
    currentSlide <= props.service.length - 2
      ? setCurrentSlide(currentSlide + 1)
      : setCurrentSlide(0);
  const prev = () =>
    currentSlide == 0
      ? setCurrentSlide(props.service.length - 1)
      : setCurrentSlide(currentSlide - 1);
  // mapping service info to slides
  const mapServices = props.service.map((item, index) => (
    <ServicesMap
      key={index}
      list={item}
      showSkinCare={props.title === "Skin care" ? true : false}
    />
  ));
  // mapping nav buttons
  const mapNavButtons = props.service.map((item, index) => (
    <button
      key={index}
      className={`ml-8 text-black focus:outline-none ${
        currentSlide === index ? "font-bold underline" : ""
      }`}
      onClick={() => changeSlide(index)}
    >
      {item[0].title}
    </button>
  ));
  return (
    <div>
      <div className="pt-32 mx-auto max-w-90">
        <SectionTitle title={props.title} showLink={true} />
        <div className={`${renderNav} mb-12 xl:ml-32 lg:ml-24 buttons`}>
          {mapNavButtons}
        </div>
        <div className="flex flex-wrap flex-row">
          <div className="ml-auto pr-12 slide-query">
            <div className="flex">
              <div className={`${renderNav} inline-block my-auto min-content`}>
                <img
                  onClick={prev}
                  className="w-5 cursor-pointer mr-2 inline-block"
                  src="left.png"
                ></img>
              </div>
              <div className="inline-block">
                <Carousel
                  showThumbs={false}
                  infiniteLoop={false}
                  showArrows={false}
                  showIndicators={false}
                  autoPlay={false}
                  showStatus={false}
                  swipeable={true}
                  width="900px"
                  selectedItem={currentSlide}
                >
                  {mapServices}
                </Carousel>
              </div>
              <div className={`${renderNav} inline-block my-auto min-content`}>
                <img
                  onClick={next}
                  className="w-5 cursor-pointer ml-2 inline-block"
                  src="right.png"
                ></img>
              </div>
            </div>
            <Buttons />
          </div>
          <HandyInfo />
        </div>
      </div>
      <style jsx>{`
        .min-content {
          width: max-content;
        }
        @media (max-width: 1428px) {
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

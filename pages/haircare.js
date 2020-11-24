import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ServicesMap from "@/components/ServicesMap";
import HandyInfo from "@/components/HandyInfo";
import haircare from "@/components/services-haircare";
import Buttons from "@/components/Buttons";

export default function Haircare() {
  // carousel controls
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <Layout>
      <div className="pt-32 mx-auto max-w-90">
        <SectionTitle title="Hair care" showLink={true} />
        <div className="flex flex-wrap flex-row">
          <div className="mb-12 ml-32">
            <button
              className={currentSlide === 0 ? "font-bold underline" : ""}
              onClick={() => changeSlide(0)}
            >
              Haircuts & styling
            </button>
            <button
              className={currentSlide === 1 ? "font-bold underline" : ""}
              onClick={() => changeSlide(1)}
            >
              Hair color
            </button>
            <button
              className={currentSlide === 2 ? "font-bold underline" : ""}
              onClick={() => changeSlide(2)}
            >
              Straightening & treatments
            </button>
            <button
              className={currentSlide === 3 ? "font-bold underline" : ""}
              onClick={() => changeSlide(3)}
            >
              Extensions & hairdreams
            </button>
          </div>

          <div className="ml-auto pr-12 slide-query">
            <Carousel
              showThumbs={false}
              infiniteLoop={false}
              showArrows={true}
              showIndicators={false}
              autoPlay={false}
              showStatus={false}
              swipeable={true}
              width="900px"
              selectedItem={currentSlide}
            >
              <ServicesMap list={haircare[0]} />
              <ServicesMap list={haircare[1]} />
              <ServicesMap list={haircare[2]} />
              <ServicesMap list={haircare[3]} />
            </Carousel>
            <Buttons />
          </div>
          <HandyInfo />
        </div>
      </div>
      <style jsx>{`
        button {
          margin-left: 40px;
          color: #000000;
          outline: none;
        }
        @media (max-width: 1428px) {
          margin-right: auto;
        }
      `}</style>
    </Layout>
  );
}

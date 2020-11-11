import React, { useState } from "react";
import SectionTitle from "components/SectionTitle";
import TeamMember from "components/TeamMember";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function Team() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const next = () => {
    if (currentSlide === 7) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prev = () => {
    if (currentSlide === 1) {
      setCurrentSlide(7);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="container my-20 mx-auto">
      <SectionTitle title={"Meet our team"} />
      <div className="flex flex-wrap flex-row justify-center gap-20 relative">
        <p className="w-1/4 header-color">
          We've been serving the Newton area since 1999 and have a pristine
          reputation for our highly trained stylists who continually upgrade
          their skills. By using the very best products on the market and
          staying tuned in to the latest developments in our industry, we're
          able to offer you an always modern beauty experience. Whether you’re
          here to maintain your look or receive a beauty transformation, you can
          do it all Tête-à-Tête.
        </p>
        <img
          onClick={prev}
          className="arrow"
          style={{ left: "400px" }}
          src="left.png"
        ></img>
        <img
          onClick={next}
          className="arrow"
          style={{ left: "1270px" }}
          src="right.png"
        ></img>
        <Carousel
          showThumbs={false}
          showArrows={false}
          infiniteLoop={false}
          showIndicators={false}
          autoPlay={false}
          showStatus={false}
          swipeable={true}
          centerMode={true}
          centerSlidePercentage={33}
          width="823px"
          selectedItem={currentSlide}
        >
          <TeamMember
            name={"Katya Bababekov"}
            title={"Owner"}
            description={
              "A salon owner and a stylist for over 20 years. Haircut and blow dry expert with a unique approach to each client."
            }
            photo={"katya.png"}
          />
          <TeamMember
            name={"Lilia Kravchuk"}
            title={"Senior stylist and colorist"}
            description={
              "Creates fresh and natural styles using the best coloring techniques."
            }
            photo={"lilia.png"}
          />
          <TeamMember
            name={"Mary B Talbot"}
            title={"Senior stylist and colorist"}
            description={
              "For over X years makes her clients feel young and beautiful. Performs both men’s and women’s haircuts."
            }
            photo={"mary.png"}
          />
          <TeamMember
            name={"Denis Pinhone"}
            title={"Stylist and beauty enthusiast"}
            description={
              "For over a decade of service at Tete-A-Tete, Denis has been keeping up with the latest trends and innovations."
            }
            photo={"denis.png"}
          />
          <TeamMember
            name={"Natalia Llordi"}
            title={"Stylist and color resquer"}
            description={
              "Passionate and dedicated  stylist who shows excellence at everything she does including keratin and extensions."
            }
            photo={"natalia.png"}
          />
          <TeamMember
            name={"Tanya Mitnik"}
            title={"Senior stylist and colorist"}
            description={
              "Tanya has over 30 years of professional experience. Specializes in long-lasting natural looks."
            }
            photo={"tanya.png"}
          />
          <TeamMember
            name={"Victoria Simenkov"}
            title={"Esthetician and nail techician"}
            description={
              "Has over 35 years of experience in working with bees waxing hair removal. And she does nails :-)"
            }
            photo={"Vita.png"}
          />
          <TeamMember
            name={"Svetlana Mirvoda (Lana)"}
            title={"Esthetician and skincare expert"}
            description={
              "Lana uses unique anti-aging approach exclusive to this practice with immediate and long-lasting results."
            }
            photo={"Lana.png"}
          />
          <TeamMember
            name={"Jackie Jordan"}
            title={"Junior stylist"}
            description={
              "Passionate for doing balayage and highlights. Finds personal approach and listens to her clients’ needs."
            }
            photo={"Jackie.png"}
          />
        </Carousel>
      </div>
      <style jsx>{`
        .arrow {
          position: absolute;
          top: calc(50% - 15px);
          width: 26px;
          height: 30px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

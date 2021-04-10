import React, { useState, useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import TeamMember from "./TeamMember";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import members from "./members.js";
export default function Team() {
  // carousel controls
  const [currentSlide, setCurrentSlide] = useState(1);

  const next = () => {
    if (currentSlide === 7 && isMobile == false) {
      setCurrentSlide(1);
    } else if (currentSlide === 7 && isMobile == true) {
      setCurrentSlide(0);
    } else {
      isMobile
        ? setCurrentSlide(currentSlide + 1)
        : setCurrentSlide(currentSlide + 3);
    }
  };
  const prev = () => {
    if (currentSlide === 1 && isMobile == false) {
      setCurrentSlide(7);
    } else if (currentSlide === 0 && isMobile == true) {
      setCurrentSlide(7);
    } else {
      isMobile
        ? setCurrentSlide(currentSlide - 1)
        : setCurrentSlide(currentSlide - 3);
    }
  };
  // members
  const mapMembers = members.map((member) => (
    <TeamMember
      key={member.id}
      name={member.name}
      title={member.title}
      description={member.description}
      photo={member.photo}
      link={member.link}
    />
  ));
  // responsive carousel
  const [isMobile, setIsMobile] = useState(false);
  function mqChange(mq) {
    setIsMobile(mq.matches);
    mq.matches ? setCurrentSlide(0) : setCurrentSlide(1);
  }
  useEffect(() => {
    const mq = window.matchMedia("screen and (max-width: 960px)");
    mq.addListener(mqChange);
    mqChange(mq);

    return () => {
      mq.removeListener(mqChange);
    };
  }, []);
  const mobileSize = () => (isMobile ? false : true);
  const mobileWidth = () => (isMobile ? "250px" : "823px");
  return (
    <div className="container mx-auto">
      <SectionTitle title={"Meet our team"} />
      <div className="flex flex-wrap flex-row justify-center relative team mx-auto">
        <div className="w-11/12 header-color sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-80 mb-6">
          <p className="mt-4">
            We've been serving the Newton area since 1999 and have a pristine
            reputation for our highly trained stylists who continually upgrade
            their skills. By using the very best products on the market and
            staying tuned in to the latest developments in our industry, we're
            able to offer you an always modern beauty experience. Whether you’re
            here to maintain your look or receive a beauty transformation, you
            can do it all Tête-à-Tête.
          </p>
        </div>

        <div className="flex mr-auto ml-auto">
          <div className="inline-block my-auto min-w-content">
            <picture>
              <source type="image/webp" srcSet="left.webp" />
              <source type="image/png" srcSet="left.png" />
              <img
                onClick={prev}
                className="w-5 cursor-pointer mr-2 inline-block"
                src="left.png"
                alt="Previous team member"
              ></img>
            </picture>
          </div>
          <div className="inline-block">
            <Carousel
              showThumbs={false}
              showArrows={false}
              infiniteLoop={false}
              showIndicators={false}
              autoPlay={false}
              showStatus={false}
              swipeable={true}
              centerMode={mobileSize()}
              centerSlidePercentage={33}
              width={mobileWidth()}
              selectedItem={currentSlide}
            >
              {mapMembers}
            </Carousel>
          </div>

          <div className="inline-block my-auto min-w-content">
            <picture>
              <source type="image/webp" srcSet="right.webp" />
              <source type="image/png" srcSet="right.png" />
              <img
                onClick={next}
                className="w-5 cursor-pointer ml-2 inline-block"
                src="right.png"
                alt="Next team member"
              ></img>
            </picture>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 1400px) {
          .team {
            max-width: 90%;
          }
        }
        @media screen and (max-width: 400px) {
          .team {
            max-width: 100%;
          }
        }
        .min-w-content {
          min-width: fit-content;
        }
      `}</style>
    </div>
  );
}

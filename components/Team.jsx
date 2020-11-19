import React, { useState, useEffect } from "react";
import SectionTitle from "components/SectionTitle";
import TeamMember from "components/TeamMember";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import members from "components/members.js";
export default function Team() {
  // carousel controls
  const [currentSlide, setCurrentSlide] = useState(1);

  const next = () => {
    if (currentSlide === 7 && isMobile == false) {
      setCurrentSlide(1);
    } else if (currentSlide === 7 && isMobile == true) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prev = () => {
    if (currentSlide === 1 && isMobile == false) {
      setCurrentSlide(7);
    } else if (currentSlide === 0 && isMobile == true) {
      setCurrentSlide(7);
    } else {
      setCurrentSlide(currentSlide - 1);
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
    />
  ));
  // responsive carousel
  const [isMobile, setIsMobile] = useState(false);
  function mqChange(mq) {
    setIsMobile(mq.matches);
    mq.matches ? setCurrentSlide(0) : setCurrentSlide(1);
  }
  useEffect(() => {
    const mq = window.matchMedia("screen and (max-width: 768px)");
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
      <div className="flex flex-wrap flex-row justify-center gap-20 relative">
        <p className="w-3/4 header-color sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-1/4">
          We've been serving the Newton area since 1999 and have a pristine
          reputation for our highly trained stylists who continually upgrade
          their skills. By using the very best products on the market and
          staying tuned in to the latest developments in our industry, we're
          able to offer you an always modern beauty experience. Whether you’re
          here to maintain your look or receive a beauty transformation, you can
          do it all Tête-à-Tête.
        </p>
        <div>
          <img onClick={prev} className="arrow left" src="left.png"></img>
          <img onClick={next} className="arrow right" src="right.png"></img>
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
      </div>
      <style jsx>{`
        .arrow {
          position: absolute;
          z-index: 2;
          top: calc(50% - 15px);
          width: 26px;
          height: 30px;
          cursor: pointer;
        }
        .right {
          right: 0;
        }
        .left {
          left: 32%;
        }
        @media screen and (max-width: 1280px) {
          .arrow {
            top: 65%;
          }
          .left {
            left: 4%;
          }
          .right {
            right: 5%;
          }
          @media screen and (max-width: 1024px) {
            .arrow {
              top: 68%;
            }
            .left {
              left: -52px;
            }
            .right {
              left: 795px;
            }
          }
          @media screen and (max-width: 768px) {
            .arrow {
              top: 55%;
            }
            .left {
              left: 20%;
            }
            .right {
              left: 79%;
            }
          }
      `}</style>
    </div>
  );
}

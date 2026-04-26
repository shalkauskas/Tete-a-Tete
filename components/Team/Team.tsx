import React, { useState, useEffect } from 'react';
import SectionTitle from '../SectionTitle';
import TeamMember from './TeamMember';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import members from './members';
import styles from './Team.module.css';
export default function Team() {
  // carousel controls
  const [currentSlide, setCurrentSlide] = useState(1);
  const lastSlide = members.length - 1;

  const next = () => {
    if (currentSlide >= lastSlide - 1 && !isMobile) {
      setCurrentSlide(1);
    } else if (currentSlide >= lastSlide && isMobile) {
      setCurrentSlide(0);
    } else {
      isMobile
        ? setCurrentSlide(currentSlide + 1)
        : setCurrentSlide(currentSlide + 3);
    }
  };
  const prev = () => {
    if (currentSlide === 1 && !isMobile) {
      setCurrentSlide(lastSlide);
    } else if (currentSlide === 0 && isMobile) {
      setCurrentSlide(lastSlide);
    } else {
      isMobile
        ? setCurrentSlide(currentSlide - 1)
        : setCurrentSlide(currentSlide - 3);
    }
  };
  // members
  const mapMembers = members.map(member => (
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
    const mq = window.matchMedia('screen and (max-width: 960px)');
    mq.addListener(mqChange);
    mqChange(mq);

    return () => {
      mq.removeListener(mqChange);
    };
  }, []);
  const mobileSize = () => (isMobile ? false : true);
  const mobileWidth = () => (isMobile ? '250px' : '823px');
  return (
    <div className={styles.container}>
      <SectionTitle title={'Meet our team'} />
      <div className={styles.teamWrapper}>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            We&apos;ve been serving the Newton area since 1999 and have a
            pristine reputation for our highly trained stylists who continually
            upgrade their skills. By using the very best products on the market
            and staying tuned in to the latest developments in our industry,
            we&apos;re able to offer you an always modern beauty experience.
            Whether you&apos;re here to maintain your look or receive a beauty
            transformation, you can do it all at Tête-à-Tête.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={`${styles.navArrowContainer} ${styles.minWidthContent}`}>
            <picture>
              <source type="image/webp" srcSet="left.webp" />
              <source type="image/png" srcSet="left.png" />
              <img
                onClick={prev}
                className={`${styles.navArrow} ${styles.navArrowLeft}`}
                src="left.png"
                alt="Previous team member"
              />
            </picture>
          </div>
          <div className={styles.carouselContainer}>
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

          <div className={`${styles.navArrowContainer} ${styles.minWidthContent}`}>
            <picture>
              <source type="image/webp" srcSet="right.webp" />
              <source type="image/png" srcSet="right.png" />
              <img
                onClick={next}
                className={`${styles.navArrow} ${styles.navArrowRight}`}
                src="right.png"
                alt="Next team member"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

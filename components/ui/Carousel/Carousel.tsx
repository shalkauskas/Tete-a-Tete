import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import styles from './Carousel.module.css';
export default function WelcomeCarousel() {
  const createCarouselItemImage = (index: number) => (
    <div key={index} className={styles.slide}>
      <Image
        src={`https://res.cloudinary.com/dyj6lkekg/image/upload/tete/carousel_${index}.jpg`}
        width={562}
        height={400}
        alt="Carousel welcome image"
        quality={75}
        loading={'eager'}
      />
    </div>
  );

  const baseChildren = <div>{[5, 3, 1, 7].map(createCarouselItemImage)}</div>;

  // handle media query
  const [isMobile, setIsMobile] = React.useState(false);
  function mqChange(mq: MediaQueryList | MediaQueryListEvent) {
    setIsMobile(mq.matches);
  }
  React.useEffect(() => {
    const mq = window.matchMedia('screen and (max-width: 600px)');
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
    <div className={styles.container}>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        autoPlay={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={mobileSize()}
        interval={3000}
      >
        {baseChildren.props.children}
      </Carousel>
    </div>
  );
}

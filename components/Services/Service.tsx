import SectionTitle from '../ui/SectionTitle/SectionTitle';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ServicesMap from './ServicesMap';
import HandyInfo from './HandyInfo';
import Buttons from '../Buttons';
import NavMap from './ServicesNavMap';
import React from 'react';
import styles from './Service.module.css';

interface ServiceItem {
  id: string;
  service: string;
  price: string;
  info?: string;
  isVideo?: boolean;
  image: string;
  title?: string;
}

interface ServiceProps {
  title: string;
  service: ServiceItem[][];
}

export default function Service(props: ServiceProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  function mqChange(mq: MediaQueryList | MediaQueryListEvent) {
    setIsMobile(mq.matches);
  }

  React.useEffect(() => {
    const mq = window.matchMedia('screen and (max-width: 1080px)');
    mq.addEventListener('change', mqChange);
    mqChange(mq);

    return () => {
      mq.removeEventListener('change', mqChange);
    };
  }, []);

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const changeSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const next = () => setCurrentSlide(currentSlide + 1);
  const prev = () => setCurrentSlide(currentSlide - 1);

  const shouldShowNav = props.service.length > 1 && !isMobile;

  const mapNavButtons = props.service.map((item, index) => (
    <NavMap
      key={index}
      title={item[0].title || ''}
      currentSlide={currentSlide}
      index={index}
      clickHandle={() => changeSlide(index)}
      isMobile={isMobile}
    />
  ));

  const mapServices = props.service.map((item, index) => (
    <ServicesMap
      key={index}
      list={item}
      showSkinCare={props.title === 'Skin care'}
      showMobile={isMobile}
      mapNav={mapNavButtons}
      renderNav={props.service.length > 1}
    />
  ));

  return (
    <div>
      <div className={styles.container}>
        <SectionTitle title={props.title} showLink={true} isMobile={isMobile} />
        <div
          className={`${styles.navButtons} ${
            shouldShowNav ? '' : styles.navArrowContainerHidden
          }`}
        >
          {mapNavButtons}
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.slideContainer}>
            <div className={styles.carouselWrapper}>
              <div
                className={`${styles.navArrowContainer} ${
                  shouldShowNav ? '' : styles.navArrowContainerHidden
                }`}
              >
                <img
                  onClick={prev}
                  className={`${styles.navArrow} ${styles.navArrowLeft} ${
                    currentSlide === 0
                      ? styles.navArrowInvisible
                      : styles.navArrowVisible
                  }`}
                  src="left.png"
                  alt="Prev service"
                />
              </div>
              <div className={styles.carouselContainer}>
                <Carousel
                  showThumbs={false}
                  infiniteLoop={false}
                  showArrows={false}
                  showIndicators={false}
                  autoPlay={false}
                  showStatus={false}
                  swipeable={isMobile ? false : true}
                  width={isMobile ? '375px' : '900px'}
                  selectedItem={currentSlide}
                  transitionTime={isMobile ? 1 : 300}
                >
                  {mapServices}
                </Carousel>
              </div>
              <div
                className={`${styles.navArrowContainer} ${
                  shouldShowNav ? '' : styles.navArrowContainerHidden
                }`}
              >
                <img
                  onClick={next}
                  className={`${styles.navArrow} ${styles.navArrowRight} ${
                    currentSlide === props.service.length - 1
                      ? styles.navArrowInvisible
                      : styles.navArrowVisible
                  }`}
                  src="right.png"
                  alt="Next service"
                />
              </div>
            </div>
            {isMobile ? (
              <p className={styles.text}>
                Refer a friend and get $15 gift certificate!
              </p>
            ) : (
              <Buttons />
            )}
          </div>
          <HandyInfo />
        </div>
      </div>
    </div>
  );
}

import SectionTitle from '../ui/SectionTitle/SectionTitle';
import IconButton from '../ui/IconButton/IconButton';
import ChevronLeft from '../ui/icons/ChevronLeft';
import ChevronRight from '../ui/icons/ChevronRight';
import ServiceCard from './ServiceCard/ServiceCard';
import HandyInfo from './HandyInfo';
import Buttons from '../Buttons';
import NavMap from './ServicesNavMap';
import React from 'react';
import styles from './Service.module.css';
import Link from 'next/link';
import type { ServiceGroup } from '../../types';

interface ServiceProps {
  title: string;
  service: ServiceGroup[];
}

const VIEWPORT_DESKTOP = 900;
const VIEWPORT_MOBILE = 375;
const SWIPE_THRESHOLD = 50;

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
  const lastSlide = props.service.length - 1;
  const changeSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const next = () => {
    if (currentSlide < lastSlide) setCurrentSlide(currentSlide + 1);
  };
  const prev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const dragStartX = React.useRef<number | null>(null);
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const deltaX = e.clientX - dragStartX.current;
    if (deltaX <= -SWIPE_THRESHOLD) next();
    else if (deltaX >= SWIPE_THRESHOLD) prev();
    dragStartX.current = null;
  };

  const shouldShowNav = props.service.length > 1 && !isMobile;
  const slideWidth = isMobile ? VIEWPORT_MOBILE : VIEWPORT_DESKTOP;

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

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Link
          passHref={true}
          scroll={false}
          href={{
            pathname: '/',
            query: { id: 'services' }
          }}
        >
          <a className={styles.link}>
            <ChevronLeft />
            <span className={styles.label}>Back to services</span>
            <SectionTitle>{props.title}</SectionTitle>
          </a>
        </Link>
        <SectionTitle>{props.title}</SectionTitle>
      </div>
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
            {shouldShowNav && (
              <IconButton
                onClick={prev}
                ariaLabel="Previous service"
                disabled={currentSlide === 0}
                className={`${styles.navArrow} ${styles.navArrowLeft} ${
                  currentSlide === 0 ? styles.navArrowInvisible : ''
                }`}
              >
                <ChevronLeft />
              </IconButton>
            )}
            <div
              className={styles.carouselContainer}
              style={{ width: slideWidth }}
              onPointerDown={isMobile ? undefined : handlePointerDown}
              onPointerUp={isMobile ? undefined : handlePointerUp}
            >
              <div
                className={styles.track}
                style={{
                  transform: `translateX(${-currentSlide * slideWidth}px)`
                }}
              >
                {props.service.map((item, index) => {
                  const [category, ...items] = item;
                  return (
                    <div
                      className={styles.slide}
                      key={index}
                      style={{ width: slideWidth }}
                    >
                      <ServiceCard
                        category={category}
                        items={items}
                        showSkinCare={props.title === 'Skin care'}
                        mapNav={mapNavButtons}
                        renderNav={props.service.length > 1}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {shouldShowNav && (
              <IconButton
                onClick={next}
                ariaLabel="Next service"
                disabled={currentSlide === lastSlide}
                className={`${styles.navArrow} ${styles.navArrowRight} ${
                  currentSlide === lastSlide ? styles.navArrowInvisible : ''
                }`}
              >
                <ChevronRight />
              </IconButton>
            )}
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
  );
}

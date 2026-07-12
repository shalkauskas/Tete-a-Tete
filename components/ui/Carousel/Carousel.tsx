import React from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

const IMAGE_IDS = [5, 3, 1, 7];
const CLONE_COUNT = 2;
const AUTOPLAY_INTERVAL = 3000;
const SLIDE_PERCENTAGE_DESKTOP = 40;
const SLIDE_PERCENTAGE_MOBILE = 80;

const SLIDES = [
  ...IMAGE_IDS.slice(-CLONE_COUNT).map(id => ({ id, key: `head-${id}` })),
  ...IMAGE_IDS.map(id => ({ id, key: `real-${id}` })),
  ...IMAGE_IDS.slice(0, CLONE_COUNT).map(id => ({ id, key: `tail-${id}` }))
];
const FIRST_REAL = CLONE_COUNT;
const LAST_REAL = CLONE_COUNT + IMAGE_IDS.length - 1;

export default function WelcomeCarousel() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(FIRST_REAL);
  const [isAnimating, setIsAnimating] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('screen and (max-width: 600px)');
    const handleChange = (event: MediaQueryList | MediaQueryListEvent) =>
      setIsMobile(event.matches);
    mq.addEventListener('change', handleChange);
    handleChange(mq);

    return () => mq.removeEventListener('change', handleChange);
  }, []);

  React.useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(
      () => setActiveIndex(index => index + 1),
      AUTOPLAY_INTERVAL
    );

    return () => window.clearInterval(id);
  }, [isPaused]);

  // After sliding onto a cloned edge slide, jump back to its real counterpart
  // with the transition disabled so the loop looks seamless.
  React.useEffect(() => {
    if (isAnimating) return;
    const id = window.requestAnimationFrame(() => setIsAnimating(true));

    return () => window.cancelAnimationFrame(id);
  }, [isAnimating]);

  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>
  ) => {
    if (event.propertyName !== 'transform') return;
    if (activeIndex > LAST_REAL) {
      setIsAnimating(false);
      setActiveIndex(index => index - IMAGE_IDS.length);
    } else if (activeIndex < FIRST_REAL) {
      setIsAnimating(false);
      setActiveIndex(index => index + IMAGE_IDS.length);
    }
  };

  const slidePercentage = isMobile
    ? SLIDE_PERCENTAGE_MOBILE
    : SLIDE_PERCENTAGE_DESKTOP;
  const trackOffset = 50 - (activeIndex + 0.5) * slidePercentage;

  return (
    <div className={styles.container}>
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={styles.track}
          style={{
            transform: `translateX(${trackOffset}%)`,
            transition: isAnimating ? undefined : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {SLIDES.map((slide, index) => (
            <div
              key={slide.key}
              className={styles.slide}
              style={{ flex: `0 0 ${slidePercentage}%` }}
              aria-hidden={index < FIRST_REAL || index > LAST_REAL}
            >
              <Image
                src={`https://res.cloudinary.com/dyj6lkekg/image/upload/tete/carousel_${slide.id}.jpg`}
                width={562}
                height={500}
                layout="responsive"
                alt="Carousel welcome image"
                quality={75}
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

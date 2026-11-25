import React from 'react';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import IconButton from '../ui/IconButton/IconButton';
import ChevronLeft from '../ui/icons/ChevronLeft';
import ChevronRight from '../ui/icons/ChevronRight';
import TestimonialCard from './TestimonialCard';
import testimonials from 'constants/testimonials';
import styles from './Testimonials.module.css';

const DESKTOP_QUERY = 'screen and (min-width: 961px)';
const CARDS_PER_VIEW_DESKTOP = 3;
const SWIPE_THRESHOLD = 50;

const subscribeToDesktop = (onChange: () => void) => {
  const mq = window.matchMedia(DESKTOP_QUERY);
  mq.addEventListener('change', onChange);

  return () => mq.removeEventListener('change', onChange);
};

export default function Testimonials() {
  const isDesktop = React.useSyncExternalStore(
    subscribeToDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => true
  );
  const [page, setPage] = React.useState(0);
  const touchStartX = React.useRef(0);

  const cardsPerView = Math.min(
    isDesktop ? CARDS_PER_VIEW_DESKTOP : 1,
    testimonials.length
  );
  const pageCount = Math.ceil(testimonials.length / cardsPerView);
  const currentPage = Math.min(page, pageCount - 1);
  const startIndex = Math.min(
    currentPage * cardsPerView,
    testimonials.length - cardsPerView
  );

  const goTo = (target: number) => setPage((target + pageCount) % pageCount);
  const next = () => goTo(currentPage + 1);
  const prev = () => goTo(currentPage - 1);

  const handleTouchEnd = (event: React.TouchEvent) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (deltaX < -SWIPE_THRESHOLD) next();
    if (deltaX > SWIPE_THRESHOLD) prev();
  };

  return (
    <section className={styles.container} aria-roledescription="carousel">
      <SectionTitle>From our clients</SectionTitle>
      <div className={styles.carousel}>
        {pageCount > 1 && (
          <IconButton
            onClick={prev}
            ariaLabel="Previous reviews"
            className={styles.navArrow}
          >
            <ChevronLeft />
          </IconButton>
        )}
        <div
          className={styles.viewport}
          onTouchStart={event => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles.track}
            style={
              {
                '--cards-per-view': cardsPerView,
                '--start-index': startIndex
              } as React.CSSProperties
            }
          >
            {testimonials.map((testimonial, index) => {
              const isVisible =
                index >= startIndex && index < startIndex + cardsPerView;

              return (
                <div
                  key={testimonial.author}
                  className={styles.slide}
                  aria-hidden={!isVisible}
                  inert={!isVisible}
                >
                  {/* Remount on visibility change so an expanded card collapses and stops stretching the row. */}
                  <TestimonialCard
                    key={String(isVisible)}
                    testimonial={testimonial}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {pageCount > 1 && (
          <IconButton
            onClick={next}
            ariaLabel="Next reviews"
            className={styles.navArrow}
          >
            <ChevronRight />
          </IconButton>
        )}
      </div>
      {pageCount > 1 && (
        <div className={styles.dots}>
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              className={
                index === currentPage
                  ? `${styles.dot} ${styles.dotActive}`
                  : styles.dot
              }
              aria-label={`Show reviews page ${index + 1}`}
              aria-current={index === currentPage}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

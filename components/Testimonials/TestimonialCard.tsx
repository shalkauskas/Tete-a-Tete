import React from 'react';
import { Testimonial } from '../../types';
import { googleReviewsUrl } from 'constants/links';
import styles from './TestimonialCard.module.css';

const COLLAPSED_LENGTH = 320;

export default function TestimonialCard({
  testimonial
}: {
  testimonial: Testimonial;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const isLong = testimonial.text.length > COLLAPSED_LENGTH;

  return (
    <figure className={styles.card}>
      <span className={styles.quoteMark} aria-hidden="true">
        &ldquo;
      </span>
      <span className={styles.stars} role="img" aria-label="5 out of 5 stars">
        ★★★★★
      </span>
      <blockquote
        className={expanded ? styles.text : `${styles.text} ${styles.clamped}`}
      >
        {testimonial.text}
      </blockquote>
      {isLong && (
        <button
          type="button"
          className={styles.readMore}
          onClick={() => setExpanded(prev => !prev)}
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      )}
      <hr className={styles.divider} />
      <figcaption className={styles.author}>
        <span className={styles.authorName}>{testimonial.author}</span>
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.source}
        >
          Google review
        </a>
      </figcaption>
    </figure>
  );
}

import ReviewsItem from "./ReviewsItem";
import React from "react";
import { GoogleReview } from "../../types";
import { googleReviewsUrl } from "constants/links";
import styles from "./Reviews.module.css";
export default function Reviews({ reviews }: { reviews: GoogleReview[] }) {
  return (
    <div className={styles.reviews}>
      <div>
        {reviews.length < 1 ? (
          <p className={styles.empty}>Reviews are currently unavailable.</p>
        ) : (
          reviews
            .slice(0, 4)
            .map((item, index) => (
              <ReviewsItem item={item} index={index} key={index} />
            ))
        )}

        <div className={styles.moreLink}>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.moreLinkAnchor}
          >
            More reviews
          </a>
        </div>
      </div>
    </div>
  );
}

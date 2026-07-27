import ReviewsItem from "./ReviewsItem";
import React from "react";
import { GoogleReview } from "../../types";
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
            href="https://maps.google.com/?cid=13262548078072798292"
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

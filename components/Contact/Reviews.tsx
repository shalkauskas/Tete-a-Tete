import ReviewsItem from "./ReviewsItem";
import React from "react";
import styles from "./Reviews.module.css";
export default function Reviews(props) {
  const placeid = process.env.NEXT_PUBLIC_placeid;
  const placesAPIkey = process.env.NEXT_PUBLIC_placesAPIkey;
  const url = `https://cors-anywhere-is.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${placesAPIkey}&language=en`;

  React.useEffect(() => {
    let isActive = true;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        if (isActive) {
          const data = result.result;
          setReviews(data.reviews);
        }
      })
      .catch((error) => console.log(error.message));
    return () => {
      isActive = false;
    };
  }, []);

  const [reviews, setReviews] = React.useState([]);

  return (
    <div className={styles.reviews}>
      <div>
        {reviews.length < 1 ? (
          <div className={"loader"} />
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

import React from "react";
import styles from "./ReviewsItem.module.css";
export default function ReviewsItem(props) {
  const { item, index } = props;
  const [expand, setExpand] = React.useState(false);
  const expandButton = (
    <span className={item.text.length > 150 ? styles.expandWrap : styles.expandWrapHidden}>
      {expand ? "" : "..."}
      <a
        onClick={() => setExpand((prevState) => !prevState)}
        className={styles.expandLink}
      >
        {`Read ${expand ? "less" : "more"}`}
      </a>
    </span>
  );
  const text = item.text.substring(0, expand ? 4000 : 150);
  return (
    <div className={styles.item} key={index}>
      <div className={styles.imageWrapper}>
        <img
          width="50px"
          src={item.profile_photo_url}
          className={styles.profileImage}
          loading="lazy"
        />
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href={item.author_url}>
          <h2 className={styles.authorName}>
            {item.author_name}
          </h2>
        </a>
        <span className={styles.timestamp}>
          {item.relative_time_description}
        </span>
        <div>
          <img
            width="100px"
            height="20px"
            src="stars.png"
            className={styles.stars}
            loading="lazy"
          />
          <p className={styles.text}>
            {text}
            {expandButton}
          </p>
        </div>
      </div>
    </div>
  );
}

import ReviewsItem from "./ReviewsItem";
import React from "react";
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
    <div
      style={{ height: "calc(100% - 180px)" }}
      className={`fixed bottom-0 left-0 bg-white 2xl:w-1/4 lg:w-1/3 sm:w-1/2 w-3/4 p-5 z-20 shadow-inner border overflow-y-scroll`}
    >
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

        <div className="text-center">
          <a
            href="https://maps.google.com/?cid=13262548078072798292"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 text-sm"
          >
            More reviews
          </a>
        </div>
      </div>
    </div>
  );
}

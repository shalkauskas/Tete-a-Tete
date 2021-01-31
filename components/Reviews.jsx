export default function Reviews(props) {
  const placeid = process.env.NEXT_PUBLIC_placeid;
  const placesAPIkey = process.env.NEXT_PUBLIC_placesAPIkey;
  const url = `https://stark-hollows-81263.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${placesAPIkey}&language=en`;

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
  const [expand, setExpand] = React.useState(false);

  const mapReviews = reviews.slice(0, 4).map((item, index) => {
    const expandButton = (
      <span className={`${item.text.length > 150 ? "inline-block" : "hidden"}`}>
        {expand ? "" : "..."}
        <a
          onClick={() => setExpand((prevState) => !prevState)}
          className={`ml-2 text-blue-600 cursor-pointer underline`}
        >
          {`Read ${expand ? "less" : "more"}`}
        </a>
      </span>
    );
    const text = item.text.substring(0, expand ? 4000 : 150);
    return (
      <div className="flex mb-4 flex-row" key={index}>
        <div className="flex-shrink-0">
          <img
            width="50px"
            src={item.profile_photo_url}
            className="mr-4 mt-2"
            loading="lazy"
          />
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href={item.author_url}>
            <h2 className="text-blue-500 font-bold text-sm">
              {item.author_name}
            </h2>
          </a>
          <span className="text-gray-500 text-xs align-text-top">
            {item.relative_time_description}
          </span>
          <div className="">
            <img
              width="100px"
              height="20px"
              src="stars.png"
              className="mr-3"
              loading="lazy"
            />
            <p style={{ fontSize: "14px" }} className="leading-snug">
              {text}
              {expandButton}
            </p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div
      style={{ height: "calc(100% - 180px)" }}
      className={`${
        props.open ? "block" : "hidden"
      } fixed bottom-0 left-0 bg-white 2xl:w-1/4 lg:w-1/3 sm:w-1/2 w-3/4 p-5 z-20 shadow-inner border overflow-y-scroll`}
    >
      <div>
        {mapReviews}
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

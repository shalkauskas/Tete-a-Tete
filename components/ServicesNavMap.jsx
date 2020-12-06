export default function NavMap(props) {
  return (
    <button
      className={`text-black focus:outline-none py-2 ${
        props.currentSlide === props.index ? "font-bold underline" : ""
      } ${props.isMobile ? "block ml-3" : "ml-8"}`}
      onClick={props.clickHandle}
    >
      <img
        src="arrow-nav-mobile.png"
        style={{ width: "14px", verticalAlign: "middle" }}
        className={`${props.isMobile ? "inline-block" : "hidden"} mr-3`}
      />
      {props.title}
    </button>
  );
}

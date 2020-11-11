export default function TeamMember(props) {
  return (
    <div
      key="slide1"
      style={{ padding: 20, height: 500, background: "white", width: "272px" }}
    >
      <img style={{ width: "223px" }} src={props.photo}></img>
      <p
        className="header-color font-bold italic"
        style={{ fontSize: "16px", lineHeight: "40px" }}
      >
        {props.name}
        <img style={{ width: "39px" }} src="instagram.png"></img>
      </p>
      <p
        className="header-color italic font-semibold mt-2"
        style={{ fontSize: "16px" }}
      >
        {props.title}
      </p>
      <p className="header-color italic mt-3" style={{ fontSize: "16px" }}>
        {props.description}
      </p>
    </div>
  );
}

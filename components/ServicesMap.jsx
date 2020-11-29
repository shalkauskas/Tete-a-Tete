export default function ServicesMap(props) {
  // mapping slide content
  const list = props.list;
  const mapServices = list.map((item, index) => (
    <div
      key={index}
      className={`max-w-90 mx-auto grid ${
        props.showSkinCare ? "grid-flow-row" : "grid-flow-col grid-cols-6"
      } mb-4`}
    >
      <p
        style={{ fontSize: "16px" }}
        className={`text-black ${
          props.showSkinCare ? "" : "col-start-1 col-end-5"
        } mr-auto`}
      >
        {item.service}
      </p>
      <p
        style={{ fontSize: "16px" }}
        className={`${
          props.showSkinCare ? "mr-auto" : "col-end-7 col-span-2 ml-auto"
        }`}
      >
        {item.price}
      </p>
    </div>
  ));
  const skinCareLogo = (
    <div
      className={`${
        props.showSkinCare ? "block" : "hidden"
      } max-w-90 mx-auto text-left`}
    >
      <p className="mb-3">We Use The Rezâge Skin Care Line</p>
      <img src="rezage-logo.png" style={{ width: "60px" }} />
    </div>
  );
  return (
    <div
      className="flex"
      style={{
        height: props.showSkinCare ? 679 : 500,
        background: "#EDE6DD",
      }}
    >
      {/* image */}
      <div style={{ width: "max-content" }}>
        <img style={{ width: "611px" }} src={list[0].image} />
      </div>
      {/* description */}
      <div className="w-full my-auto">
        {mapServices}
        {skinCareLogo}
        <p className="font-bold text-black pt-6">
          Refer a friend and get $15 gift certificate!
        </p>
      </div>
      <style jsx>{``}</style>
    </div>
  );
}

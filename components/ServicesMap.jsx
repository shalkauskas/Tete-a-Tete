export default function ServicesMap(props) {
  const list = props.list;
  const mapServices = list.map((item, index) => (
    <div
      key={index}
      className="max-w-90 mx-auto grid grid-flow-col grid-cols-6 mb-6"
    >
      <p className="text-black col-start-1 col-end-5 mr-auto">{item.service}</p>
      <p className="col-end-7 col-span-2 ml-auto">{item.price}</p>
    </div>
  ));

  return (
    <div
      className="flex"
      style={{
        height: 500,
        background: "#EDE6DD",
      }}
    >
      {/* image */}
      <div style={{ width: "max-content" }}>
        <img style={{ width: "600px" }} src={list[0].image} />
      </div>
      {/* description */}
      <div className="w-full my-auto">
        {mapServices}
        <p className="font-bold text-black pt-6">
          Refer a friend and get $15 gift certificate!
        </p>
      </div>
      <style jsx>{`
        p {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}

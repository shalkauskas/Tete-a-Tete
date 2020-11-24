export default function SectionTitle(props) {
  return (
    <div className="relative">
      <h1 className="font-bold text-center text-color text-2xl pt-16 my-10">
        {props.title}
      </h1>
      <a
        style={{ fontSize: "16px" }}
        className={`text-color font-light italic text underline inline-block absolute bottom-0 ${
          props.showLink ? "inline-block" : "hidden"
        }`}
        href="/"
      >
        <img src="left.png" className="w-3 inline-block mr-2" /> Back to
        services
      </a>
    </div>
  );
}

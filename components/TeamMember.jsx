import Image from "next/image";
export default function TeamMember(props) {
  return (
    <div
      key="slide1"
      style={{ padding: 20, height: 500, background: "white", width: "272px" }}
    >
      <div style={{ marginLeft: "-20px" }}>
        <Image
          src={props.photo}
          alt="Team member"
          quality={75}
          width={223}
          height={250}
          loading={"eager"}
        />
      </div>

      <p
        className="header-color font-bold italic"
        style={{ fontSize: "16px", lineHeight: "40px" }}
      >
        {props.name}
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
          <picture>
            <source type="image/webp" srcSet="instagram.webp" />
            <source type="image/png" srcSet="instagram.png" />
            <img
              style={{ width: "39px", height: "39px" }}
              src="instagram.png"
              alt="Instagram link"
            />
          </picture>
        </a>
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

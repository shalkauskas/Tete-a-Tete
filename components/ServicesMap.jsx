import Buttons from "@/components/Buttons";
import Refferal from "@/components/Refferal";
import Image from "next/image";
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
        style={{ fontSize: "16px", textAlign: "left" }}
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
      className={`${props.showMobile ? "flex" : ""} ${
        props.showSkinCare ? "block" : "hidden"
      } max-w-90 mx-auto text-left justify-evenly`}
    >
      <p className="mb-3 mt-auto">We Use The Rezâge Skin Care Line</p>
      <picture>
        <source type="image/webp" srcSet="rezage-logo.webp" />
        <source type="image/png" srcSet="rezage-logo.png" />
        <img src="rezage-logo.png" style={{ width: "60px", height: "60px" }} />
      </picture>
    </div>
  );
  return (
    <div
      className={`flex ${props.showMobile ? "flex-col" : ""}`}
      style={{
        background: "#EDE6DD",
        height: props.showMobile ? "auto" : "600px",
      }}
    >
      {/* image */}
      <div className="flex">
        <Image
          src={`/${list[0].image}`}
          width={props.showMobile ? 210 : 590}
          height={props.showMobile ? 320 : 940}
          alt="Service image"
          quality={75}
          loading={"eager"}
        />
        {/* <img
          className={`${props.showMobile ? "float-left" : ""}`}
          style={{ width: props.showMobile ? "179px" : "611px" }}
          src={list[0].image}
          alt="Service image"
        /> */}
        <div
          className={`${props.renderNav} ${
            props.showMobile ? "inline-block" : "hidden"
          }  mt-6 w-40 mx-3`}
        >
          {props.mapNav}
        </div>
      </div>

      {/* description */}
      <div className={`w-full ${props.showMobile ? "my-8" : "my-auto"}`}>
        {mapServices}
        {skinCareLogo}
        {props.showMobile ? (
          <Buttons mobile={props.showMobile} />
        ) : (
          <Refferal />
        )}
      </div>
      <style jsx>{`
        .bottom {
          position: absolute;
          bottom: 20px;
          left: 13%;
        }
        .w-60 {
          width: 15rem;
        }
      `}</style>
    </div>
  );
}

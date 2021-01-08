import Image from "next/image";
export default function CovidPolicy() {
  const [showPolicy, setShowPolicy] = React.useState(false);
  const openPolicy = showPolicy ? "block" : "hidden";
  return (
    <div
      className="flex justify-center py-2 text-color"
      style={{ backgroundColor: "#F0EAE7" }}
    >
      <div className="cursor-pointer" onClick={() => setShowPolicy(true)}>
        <picture>
          <source type="image/webp" srcSet="bell.webp" />
          <source type="image/png" srcSet="bell.png" />
          <img
            src="/bell.png"
            alt="Policy"
            className="w-5 h-6 mr-2 inline-block"
          />
        </picture>
        <span className="font-bold">Covid-19 policy</span>
        <span
          className="ml-3 underline font-light italic hidden lg:inline-block"
          style={{ fontSize: "16px", lineHeight: "27px" }}
        >
          learn more
        </span>
      </div>
      {/* Policy modal */}
      <div className={`${openPolicy} absolute sm:w-max z-50`}>
        <div className="relative text-center">
          <Image
            src="/covid-policy.png"
            alt="COVID-19 Policy"
            width={597}
            height={657}
            quality={75}
          />
        </div>
        <span
          className="absolute cursor-pointer right-0 top-0 text-3xl"
          onClick={() => setShowPolicy(false)}
        >
          &times;
        </span>
      </div>
      <style jsx>{`
        .backdrop {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(5px);
        }
      `}</style>
      <div
        className={`z-30 backdrop ${openPolicy}`}
        onClick={() => setShowPolicy(false)}
      />
    </div>
  );
}

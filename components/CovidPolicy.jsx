export default function CovidPolicy() {
  const [showPolicy, setShowPolicy] = React.useState(false);
  const openPolicy = showPolicy ? "block" : "hidden";
  return (
    <div
      className="flex justify-center py-2 text-color"
      style={{ backgroundColor: "#F0EAE7" }}
    >
      <div className="cursor-pointer" onClick={() => setShowPolicy(true)}>
        <img src="/bell.png" alt="Policy" className="w-5 mr-2 inline-block" />
        <span className="font-bold">Covid-19 policy</span>
        <span
          className="ml-3 underline font-light italic hidden lg:inline-block"
          style={{ fontSize: "16px", lineHeight: "27px" }}
        >
          learn more
        </span>
      </div>
      {/* Policy modal */}
      <div
        className={`${openPolicy} absolute w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 z-50`}
      >
        <img src="covid-policy.png" className=" mx-auto mt-16" />
        <span
          className="absolute cursor-pointer close-button"
          onClick={() => setShowPolicy(false)}
        >
          &times;
        </span>
      </div>
      <style jsx>{`
        .close-button {
          top: 65px;
          right: 6px;
          font-size: 28px;
        }
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

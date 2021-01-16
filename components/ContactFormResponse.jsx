const ContactFormResponse = (params) => {
  const openResponse = params.showResponse ? "block" : "hidden";
  return (
    <div
      className={`${openResponse} absolute w-full flex justify-center py-2  bottom-0 left-0 h-full`}
    >
      <div
        className="text-center z-50 md:w-3/4 w-11/12 absolute inset-x-2/4 rounded-lg py-12"
        style={{ backgroundColor: "#F0EAE7", bottom: "8%" }}
      >
        <div className="px-10 sm:px-2">
          <h2 className="sm:text-xl font-bold text-color">
            Thank you for contacting Tete-a-Tete salon
          </h2>
          <p>We'll get back to you shortly!</p>
        </div>
        <span
          className="absolute cursor-pointer right-0 text-3xl leading-none"
          onClick={() => params.setShowResponse(false)}
          style={{ top: "-6px" }}
        >
          &times;
        </span>{" "}
      </div>

      <style jsx>{`
        .backdrop {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(5px);
        }
      `}</style>
      <div
        className={`z-30 backdrop ${openResponse}`}
        onClick={() => params.setShowResponse(false)}
      />
    </div>
  );
};
export default ContactFormResponse;

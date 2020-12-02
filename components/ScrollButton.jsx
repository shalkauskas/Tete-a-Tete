import useDocumentScrollThrottled from "components/useDocumentScrollThrottled";
export default function ScrollButton() {
  const [showScroll, setShowScroll] = React.useState(false);
  const [moveScroll, setMoveScroll] = React.useState(false);
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    const bottom = document.body.scrollHeight - 1100;
    setShowScroll(currentScrollTop > 400);
    setMoveScroll(currentScrollTop > bottom);
  });
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <img
        src="scrollToTop.png"
        className={`${moveScroll ? "moveDown" : "moveUp"} scrollTop`}
        onClick={scrollTop}
        style={{
          height: 40,
          // marginBottom: moveScroll ? "120px" : "",
          display: showScroll ? "flex" : "none",
        }}
      />
      <style jsx>{`
        .scrollTop {
          position: fixed;
          bottom: 60px;
          z-index: 1000;
          cursor: pointer;
          animation: fadeIn 0.3s;
          transition: opacity 0.4s;
          opacity: 0.5;
          right: 10px;
        }
        .moveUp {
          transition: transform 0.3s linear;
          transform: translateY(30px);
        }
        .moveDown {
          transition: transform 0.3s linear;
          transform: translateY(-110px);
        }
        .scrollTop:hover {
          opacity: 1;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

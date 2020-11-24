export default function Buttons() {
  return (
    <div className="mb-24">
      <a href="https://swipeit.com/product/1218/tete-a-tete">
        <button
          className="shadow-lg text-white"
          style={{ backgroundColor: "#895b4a", marginLeft: "20rem" }}
        >
          Buy a gift card
        </button>
      </a>

      <button className="shadow-lg border ml-24" style={{ color: "#895b4a" }}>
        See other services
      </button>
      <style jsx>{`
        button {
          border-color: #895b4a;
          border-radius: 15px;
          padding: 10px 40px;
          font-weight: bold;
          font-size: 16px;
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}

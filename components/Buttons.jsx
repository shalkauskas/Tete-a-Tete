export default function Buttons() {
  return (
    <div className="mb-24">
      <a href="https://swipeit.com/product/1218/tete-a-tete">
        <button
          className="shadow-lg text-white py-2 px-6"
          style={{ backgroundColor: "#895b4a", marginLeft: "20rem" }}
        >
          Buy a gift card
        </button>
      </a>
      <a href="/">
        <button className="border ml-24 py-2 px-3" style={{ color: "#895b4a" }}>
          See other services
        </button>
      </a>

      <style jsx>{`
        button {
          border-color: #895b4a;
          border-radius: 15px;
          font-weight: bold;
          font-size: 16px;
          margin-top: 50px;
          outline: none;
        }
      `}</style>
    </div>
  );
}

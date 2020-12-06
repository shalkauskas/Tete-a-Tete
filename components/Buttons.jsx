import { useRouter } from "next/router";
export default function Buttons() {
  const router = useRouter();
  return (
    <div className="mb-24">
      <a href="https://swipeit.com/product/1218/tete-a-tete">
        <button
          className="shadow-lg text-white py-2 px-6 ml-80"
          style={{ backgroundColor: "#895b4a" }}
        >
          Buy a gift card
        </button>
      </a>
      <a
        onClick={() =>
          router.push("/", "/services").then(() =>
            window.scrollTo({
              top: 600,
              behavior: "smooth",
            })
          )
        }
      >
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
        .ml-80 {
          margin-left: 20rem;
        }
        @media (max-width: 1080px) {
          .ml-80 {
            margin-left: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

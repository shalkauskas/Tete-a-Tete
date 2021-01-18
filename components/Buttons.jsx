import { useRouter } from "next/router";
import smoothscroll from "smoothscroll-polyfill";
export default function Buttons(props) {
  const router = useRouter();
  return (
    <div className="mb-12">
      <a href="https://swipeit.com/product/1218/tete-a-tete">
        <button
          className="shadow-lg text-white py-2 px-6 ml-80 hover:opacity-75"
          style={{ backgroundColor: "#895b4a" }}
        >
          Buy a gift card
        </button>
      </a>
      <a
        onClick={() =>
          router.push("/").then(() => {
            smoothscroll.polyfill();
            window.scrollTo({
              top: 600,
              behavior: "smooth",
            });
          })
        }
      >
        <button
          className={`border ${
            props.mobile ? "ml-3" : "ml-24"
          } py-2 px-3 hover:opacity-75`}
          style={{ color: "#895b4a" }}
        >
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
            margin-left: 0rem;
          }
        }
      `}</style>
    </div>
  );
}

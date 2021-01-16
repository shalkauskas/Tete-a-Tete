import { useRouter } from "next/router";
export default function SectionTitle(props) {
  const router = useRouter();
  return (
    <div className="relative">
      <h1 className="font-bold text-center text-color text-2xl pt-16 my-10">
        {props.title}
      </h1>
      {/* conditional rendering of "Back to services button" */}
      <a
        style={{ fontSize: "16px" }}
        className={`text-color font-light italic text underline inline-block absolute bottom-0 cursor-pointer ${
          props.showLink ? "inline-block" : "hidden"
        }`}
        onClick={() =>
          router.push("/", "/").then(() =>
            window.scrollTo({
              top: 600,
              behavior: "smooth",
            })
          )
        }
      >
        <img src="left.png" className="w-3 inline-block mr-2" /> Back to
        services
      </a>
    </div>
  );
}

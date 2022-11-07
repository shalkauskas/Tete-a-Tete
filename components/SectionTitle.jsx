import Link from "next/link";
import { useRouter } from "next/router";
export default function SectionTitle(props) {
  const router = useRouter();
  return (
    <div className="relative">
      <h1 className="font-bold text-center text-color text-2xl pt-10 mb-5 mt-7">
        {props.title}
      </h1>
      {/* conditional rendering of "Back to services button" */}
      <Link
        passHref={true}
        scroll={false}
        href={{
          pathname: "/",
          query: { id: "services" },
        }}
      >
        <a
          style={{ fontSize: "1rem" }}
          className={`text-color font-light italic text underline inline-block absolute bottom-0 cursor-pointer ${
            props.showLink ? "inline-block" : "hidden"
          }`}
        >
          <img
            src="left.png"
            className="w-3 inline-block mr-2"
            alt="Go back to services"
          />
          <span>Back to services</span>
        </a>
      </Link>
      <style jsx>
        {`
          @media (max-width: 415px) {
            span {
              display: none;
            }
            img {
              margin-left: 25%;
              margin-bottom: 0.5rem;
            }
            a {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

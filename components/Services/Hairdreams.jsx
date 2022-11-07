import Image from "next/image";
import Button from "../Button";

export default function Hairdreams(props) {
  return (
    <div
      style={{ background: "#EDE6DD", maxWidth: "75.25rem" }}
      className="mx-auto mt-6 rounded shadow-lg flex flex-wrap"
    >
      <div className="lg:flex-1 w-full">
        <Image
          width={590}
          height={436}
          layout="responsive"
          loading={"eager"}
          priority={true}
          src={"/hairdreams.png"}
          alt="Hairdreams"
        />
      </div>

      <div className="flex-1 px-6 py-10">
        <h2 className="font-bold mb-4 text-xl">Hairdreams</h2>
        <p className="mb-4">
          Hairdreams© is the leading supplier internationally of hair extensions
          and hair thickening in Premium quality, with partner salons in over 60
          countries and millions of customers worldwide.
        </p>
        <h2 className="mb-4 font-semibold">
          Do you have less and less hair? Is it brittle, getting thinner or
          there are even bald patches forming?
        </h2>
        <p>
          You are not alone in this. Thousands of women have already entrusted
          Hairdreams with their hair problem. Our solutions will help you to
          gain natural hair volume. So that you can enjoy a carefree life again.
        </p>
        <a
          className="contents"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.hairdreamsusa.com/en/"
        >
          <Button className="mx-auto mt-6">Learn more</Button>
        </a>
      </div>
    </div>
  );
}

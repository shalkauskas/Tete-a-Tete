import Image from "next/image";
import Button from "../Button";

export default function Hairdreams(props) {
  return (
    <div
      style={{ background: "#EDE6DD", maxWidth: "75.25rem" }}
      className="mx-auto mt-6 rounded shadow-lg grid xl:grid-cols-3 grid-cols-2"
    >
      <div className="flex rounded-l overflow-hidden h-full col-span-2">
        <Image
          width={600}
          height={800}
          loading={"eager"}
          priority={true}
          src={
            "https://res.cloudinary.com/dyj6lkekg/image/upload/v1711816297/tete/hairdreams1.jpg"
          }
          alt="Hairdreams"
        />
        <Image
          width={600}
          height={800}
          loading={"eager"}
          priority={true}
          src={
            "https://res.cloudinary.com/dyj6lkekg/image/upload/v1711816297/tete/hairdreams2.jpg"
          }
          alt="Hairdreams"
        />
      </div>

      <div className="flex-1 xl:px-6 px-10 py-10 xl:col-span-1 col-span-2">
        <h2 className="font-bold mb-4 text-xl">Hairdreams by KATYA</h2>
        <p className="mb-4">
          Hairdreams© is the leading supplier internationally of hair extensions
          and hair thickening in Premium quality, with partner salons in over 60
          countries and millions of customers worldwide.
        </p>
        <h2 className="mb-4 font-semibold">
          Do you have less and less hair? Is it brittle, getting thinner or
          there are even bald patches forming?
        </h2>
        <p className="mb-4">
          You are not alone in this. Thousands of women have already entrusted
          Hairdreams with their hair problem. Our solutions will help you to
          gain natural hair volume. So that you can enjoy a carefree life again.
        </p>
        <p className="underline">
          Katya does exclusive service in applying Hairdreams microlines. Book
          your appointment for free consultation!
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

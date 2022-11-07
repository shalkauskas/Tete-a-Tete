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
        <p>
          Would you like long hair? Strong right into the tips? With extra shine
          and volume? With a Hairdreams hair extension, you can achieve
          wonderful voluminous hair quickly and easily. From bondings to tapes,
          brilliant hair colours and hair lengths up to 80cm, we have everything
          in our product range to fulfil your hairstyle wishes. Hairdreams hair
          is made in our own manufacturing facility and boasts the highest
          quality.
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

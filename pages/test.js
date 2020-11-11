import Head from "next/head";
import Service from "components/Service";

export default function Test() {
  return (
    <div>
      <div className="container mx-auto ">
        <h1 className="font-bold text-center text-color text-2xl py-5">
          Our services
        </h1>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <Service service={"Hair care"} background={"haircare"} />
          <Service service={"Skin care"} background={"skincare"} />
          <Service service={"Nails"} background={"nails"} />
          <Service service={"Waxing"} background={"waxing"} />
        </div>
      </div>
    </div>
  );
}

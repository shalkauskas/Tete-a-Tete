import Service from "@/components/ServiceMenuItem";
import SectionTitle from "components/SectionTitle";
import Link from "next/link";
export default function Services() {
  return (
    <div className="container mx-auto">
      <SectionTitle title={"Our Services"} />
      <div className="flex flex-row flex-wrap justify-center gap-16 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <Link href="/haircare" passHref>
          <a>
            <Service service={"Hair care"} background={"haircare"} />
          </a>
        </Link>
        <Service service={"Skin care"} background={"skincare"} />
        <Service service={"Nails"} background={"nails"} />
        <Service service={"Waxing"} background={"waxing"} />
      </div>
    </div>
  );
}

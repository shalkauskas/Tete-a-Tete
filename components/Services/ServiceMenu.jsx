import Service from "@/components/Services/ServiceMenuItem";
import SectionTitle from "components/SectionTitle";
import Link from "next/link";
export default function Services() {
  return (
    <div className="container mx-auto">
      <SectionTitle title={"Our Services"} />
      <div className="flex flex-row flex-wrap justify-center">
        <Link href="/haircare" passHref>
          <a className="ml-auto mr-auto mb-16">
            <Service service={"Hair care"} background={"haircare"} />
          </a>
        </Link>
        <Link href="/skincare" passHref>
          <a className="ml-auto mr-auto mb-16">
            <Service service={"Skin care"} background={"skincare"} />
          </a>
        </Link>
        <Link href="/nails" passHref>
          <a className="mx-auto mb-16">
            <Service service={"Nails"} background={"nails"} />
          </a>
        </Link>
        <Link href="/waxing" passHref>
          <a className="mx-auto">
            <Service service={"Waxing"} background={"waxing"} />
          </a>
        </Link>
      </div>
    </div>
  );
}

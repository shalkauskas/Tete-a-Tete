import Service from "./ServiceMenuItem";
import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
import Hairdreams from "./Hairdreams";
export default function Services() {
  return (
    <div className="mx-auto">
      <SectionTitle title={"Our Services"} />
      <div className="grid lg:grid-rows-2 grid-rows-1 lg:grid-flow-col justify-center gap-6">
        <Link href="/haircare" passHref>
          <a>
            <Service service={"Hair care"} background={"haircare"} />
          </a>
        </Link>
        <Link href="/skincare" passHref>
          <a>
            <Service service={"Skin care"} background={"skincare"} />
          </a>
        </Link>
        <Link href="/nails" passHref>
          <a>
            <Service service={"Nails"} background={"nails"} />
          </a>
        </Link>
        <Link href="/waxing" passHref>
          <a>
            <Service service={"Waxing"} background={"waxing"} />
          </a>
        </Link>
      </div>
      <Hairdreams />
    </div>
  );
}

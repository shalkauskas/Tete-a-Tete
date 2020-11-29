import Layout from "@/components/Layout";
import waxing from "@/components/services-waxing";
import Service from "@/components/Service";
export default function Waxing() {
  return (
    <Layout>
      <Service service={waxing} title="Hair care" />
    </Layout>
  );
}

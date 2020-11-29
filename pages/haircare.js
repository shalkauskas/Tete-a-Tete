import Layout from "@/components/Layout";
import haircare from "@/components/services-haircare";
import Service from "@/components/Service";

export default function Haircare() {
  return (
    <Layout>
      <Service service={haircare} title="Hair care" />
    </Layout>
  );
}

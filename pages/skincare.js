import Layout from "@/components/Layout";
import skincare from "@/components/services-skincare";
import Service from "@/components/Service";

export default function Skincare() {
  return (
    <Layout>
      <Service service={skincare} title="Skin care" />
    </Layout>
  );
}

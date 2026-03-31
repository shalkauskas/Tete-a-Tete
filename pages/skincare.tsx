import Layout from "../components/Layout/Layout";
import skincare from "../components/Services/services-skincare";
import Service from "../components/Services/Service";

export default function Skincare() {
  return (
    <Layout>
      <Service service={skincare} title="Skin care" />
    </Layout>
  );
}

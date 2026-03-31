import Layout from "../components/Layout/Layout";
import haircare from "../components/Services/services-haircare";
import Service from "../components/Services/Service";

export default function Haircare() {
  return (
    <Layout>
      <Service service={haircare} title="Hair care" />
    </Layout>
  );
}

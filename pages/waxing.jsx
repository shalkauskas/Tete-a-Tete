import Layout from "../components/Layout/Layout";
import waxing from "../components/Services/services-waxing";
import Service from "../components/Services/Service";
export default function Waxing() {
  return (
    <Layout>
      <Service service={waxing} title="Hair care" />
    </Layout>
  );
}

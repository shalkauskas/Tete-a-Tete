import Layout from "../components/Layout/Layout";
import nails from "../components/Services/services-nails";
import Service from "../components/Services/Service";

export default function Nails() {
  return (
    <Layout>
      <Service service={nails} title="Nails" />
    </Layout>
  );
}

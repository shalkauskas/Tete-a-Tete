import Layout from "@/components/Layout";
import nails from "@/components/services-nails";
import Service from "@/components/Service";

export default function Nails() {
  return (
    <Layout>
      <Service service={nails} title="Nails" />
    </Layout>
  );
}

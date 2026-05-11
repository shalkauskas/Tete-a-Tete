import servicesNails from 'constants/services/nails';
import Layout from '../components/Layout/Layout/Layout';
import Service from '../components/Services/Service';

export default function Nails() {
  return (
    <Layout>
      <Service service={servicesNails} title="Nails" />
    </Layout>
  );
}

import servicesWaxing from 'constants/services/waxing';
import Layout from '../components/Layout/Layout/Layout';
import Service from '../components/Services/Service';
export default function Waxing() {
  return (
    <Layout>
      <Service service={servicesWaxing} title="Hair care" />
    </Layout>
  );
}

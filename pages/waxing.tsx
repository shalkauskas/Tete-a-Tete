import servicesWaxing from 'constants/services/waxing';
import Layout from '../components/Layout/Layout/Layout';
import Service from '../components/Services/Service';
export default function Waxing() {
  return (
    <Layout
      title="Waxing Services | Tête-à-Tête Salon, Newton MA"
      description="Professional waxing and hair removal at Tête-à-Tête Salon in Newton Centre, MA."
      canonicalPath="/waxing"
    >
      <Service service={servicesWaxing} title="Hair care" />
    </Layout>
  );
}

import servicesNails from 'constants/services/nails';
import Layout from '../components/Layout/Layout/Layout';
import Service from '../components/Services/Service';

export default function Nails() {
  return (
    <Layout
      title="Nail Services | Tête-à-Tête Salon, Newton MA"
      description="Manicures, pedicures and nail care at Tête-à-Tête Salon in Newton Centre, MA."
      canonicalPath="/nails"
    >
      <Service service={servicesNails} title="Nails" />
    </Layout>
  );
}

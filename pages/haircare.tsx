import servicesHaircare from 'constants/services/haircare';
import Layout from '../components/Layout/Layout/Layout';
import Service from '../components/Services/Service';

export default function Haircare() {
  return (
    <Layout>
      <Service service={servicesHaircare} title="Hair care" />
    </Layout>
  );
}

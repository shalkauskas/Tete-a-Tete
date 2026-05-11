import servicesSkincare from 'constants/services/skincare';
import Layout from '../components/Layout/Layout/Layout';
import Service from '../components/Services/Service';

export default function Skincare() {
  return (
    <Layout>
      <Service service={servicesSkincare} title="Skin care" />
    </Layout>
  );
}

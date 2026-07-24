import servicesSkincare from 'constants/services/skincare';
import Layout from '../components/Layout/Layout/Layout';
import Service from '../components/Services/Service';

export default function Skincare() {
  return (
    <Layout
      title="Skin Care & Facials | Tête-à-Tête Salon, Newton MA"
      description="Facials, skin treatments and body care at Tête-à-Tête Salon in Newton Centre, MA."
      canonicalPath="/skincare"
    >
      <Service service={servicesSkincare} title="Skin care" />
    </Layout>
  );
}

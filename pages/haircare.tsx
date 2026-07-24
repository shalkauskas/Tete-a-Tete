import servicesHaircare from 'constants/services/haircare';
import Layout from '../components/Layout/Layout/Layout';
import Service from '../components/Services/Service';

export default function Haircare() {
  return (
    <Layout
      title="Hair Care Services | Tête-à-Tête Salon, Newton MA"
      description="Haircuts, styling, organic color, balayage and highlights at Tête-à-Tête Salon in Newton Centre, MA."
      canonicalPath="/haircare"
    >
      <Service service={servicesHaircare} title="Hair care" />
    </Layout>
  );
}

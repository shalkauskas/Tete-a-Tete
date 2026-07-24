import Layout from '../components/Layout/Layout/Layout';
import HairdreamsLanding from '../components/Hairdreams/HairdreamsLanding';

export default function HairdreamsPage() {
  return (
    <Layout
      title="Hairdreams by Katya | Tête-à-Tête Salon, Newton"
      description="Hairdreams hair extensions and thickening at Tête-à-Tête Salon in Newton, MA. Natural-looking length and volume for thinning or fine hair. Book a free consultation with Katya."
      canonicalPath="/hairdreams"
    >
      <HairdreamsLanding />
    </Layout>
  );
}

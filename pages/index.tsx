import React from 'react';
import WelcomeCarousel from '../components/ui/Carousel/Carousel';
import Services from '../components/Services/ServiceMenu';
import Team from '../components/Team/Team';
import Products from '../components/Products';
import Contact from '../components/Contact/Contact';
import ContactForm from '../components/Contact/ContactForm';
import Layout from '../components/Layout/Layout/Layout';
import ScrollButton from '../components/ui/ScrollButton/ScrollButton';
import { useRouter } from 'next/router';
import Giftcard from '@/components/Layout/Giftcard/Giftcard';
import { GooglePlaceDetails } from '../types';
import { fetchGooglePlaceDetails } from '../lib/googleReviews';
import styles from './index.module.css';

export async function getStaticProps() {
  const place = await fetchGooglePlaceDetails();
  return { props: { place }, revalidate: 86400 };
}

export default function Home({ place }: { place: GooglePlaceDetails }) {
  const router = useRouter();
  // refs
  const servicesRef = React.useRef<HTMLDivElement>(null),
    teamRef = React.useRef<HTMLDivElement>(null),
    productsRef = React.useRef<HTMLDivElement>(null),
    contactRef = React.useRef<HTMLDivElement>(null);
  const { id } = router.query;
  React.useEffect(() => {
    if (id === 'services') {
      scroll(servicesRef);
      router.replace('/', undefined, { shallow: true });
    }
    if (id === 'products') {
      scroll(productsRef);
      router.replace('/', undefined, { shallow: true });
    }
    if (id === 'team') {
      scroll(teamRef);
      router.replace('/', undefined, { shallow: true });
    }
    if (id === 'contact') {
      scroll(contactRef);
      router.replace('/', undefined, { shallow: true });
    }
  }, [id, router]);
  const scroll = (tag: React.RefObject<HTMLDivElement | null>) => {
    if (tag.current) {
      tag.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout
      title="Tête-à-Tête Salon | Hair, Color & Beauty in Newton, MA"
      description="Tête-à-Tête is a full-service hair and beauty salon in Newton Centre, MA — expert cuts, color, balayage, Hairdreams extensions, nails, skin care and waxing."
      canonicalPath="/"
    >
      <WelcomeCarousel />
      <div className={styles.content}>
        <div className={styles.section}>
          <div
            ref={servicesRef}
            className={styles.scrollAnchor}
            id="services"
          />
          <Services />
        </div>
        <div className={styles.section}>
          <div ref={teamRef} className={styles.scrollAnchor} />
          <Team />
        </div>
        <div className={styles.section}>
          <div ref={productsRef} className={styles.scrollAnchor} />
          <Products />
        </div>
        <div className={styles.section}>
          <div ref={contactRef} className={styles.scrollAnchor} />
          <Contact place={place} />
        </div>
        <ContactForm />
      </div>
      <Giftcard />
      <ScrollButton />
    </Layout>
  );
}

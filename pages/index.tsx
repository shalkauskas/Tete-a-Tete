import React from 'react';
import WelcomeCarousel from '../components/Carousel';
import Services from '../components/Services/ServiceMenu';
import Team from '../components/Team/Team';
import Products from '../components/Products';
import Contact from '../components/Contact/Contact';
import ContactForm from '../components/Contact/ContactForm';
import Layout from '../components/Layout/Layout/Layout';
import ScrollButton from '../components/ScrollButton';
import smoothscroll from 'smoothscroll-polyfill';
import { useRouter } from 'next/router';
import Giftcard from '@/components/Layout/Giftcard/Giftcard';
import styles from './index.module.css';

export default function Home() {
  const router = useRouter();
  // refs
  const servicesRef = React.useRef(null),
    teamRef = React.useRef(null),
    productsRef = React.useRef(null),
    contactRef = React.useRef(null);
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
  }, [id]);
  const scroll = tag => {
    smoothscroll.polyfill();
    tag.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  return (
    <Layout>
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
          <Contact />
        </div>
        <ContactForm />
      </div>
      <Giftcard />
      <ScrollButton />
    </Layout>
  );
}

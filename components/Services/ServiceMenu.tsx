import Service from './ServiceMenuItem';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import Link from 'next/link';
import Hairdreams from './Hairdreams';
import styles from './ServiceMenu.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <SectionTitle>Our Services</SectionTitle>
      <div className={styles.grid}>
        <Link href="/haircare">
          <Service background={'haircare'}>Hair care</Service>
        </Link>
        <Link href="/skincare">
          <Service background={'skincare'}>Skin care</Service>
        </Link>
        <Link href="/nails">
          <Service background={'nails'}>Nails</Service>
        </Link>
        <Link href="/waxing">
          <Service background={'waxing'}>Waxing</Service>
        </Link>
      </div>
      <Hairdreams />
    </div>
  );
}

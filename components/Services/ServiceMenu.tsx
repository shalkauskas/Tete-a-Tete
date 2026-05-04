import Service from './ServiceMenuItem';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import Link from 'next/link';
import Hairdreams from './Hairdreams';
import styles from './ServiceMenu.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <SectionTitle title={'Our Services'} />
      <div className={styles.grid}>
        <Link href="/haircare" passHref>
          <a>
            <Service background={'haircare'}>Hair care</Service>
          </a>
        </Link>
        <Link href="/skincare" passHref>
          <a>
            <Service background={'skincare'}>Skin care</Service>
          </a>
        </Link>
        <Link href="/nails" passHref>
          <a>
            <Service background={'nails'}>Nails</Service>
          </a>
        </Link>
        <Link href="/waxing" passHref>
          <a>
            <Service background={'waxing'}>Waxing</Service>
          </a>
        </Link>
      </div>
      <Hairdreams />
    </div>
  );
}

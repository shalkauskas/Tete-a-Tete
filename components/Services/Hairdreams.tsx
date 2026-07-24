import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button/Button';
import styles from './Hairdreams.module.css';

export default function Hairdreams() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          width={600}
          height={800}
          loading={'eager'}
          priority={true}
          src={
            'https://res.cloudinary.com/dyj6lkekg/image/upload/v1711816297/tete/hairdreams1.jpg'
          }
          alt="Hairdreams"
        />
        <Image
          width={600}
          height={800}
          loading={'eager'}
          priority={true}
          src={
            'https://res.cloudinary.com/dyj6lkekg/image/upload/v1711816297/tete/hairdreams2.jpg'
          }
          alt="Hairdreams"
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Hairdreams by KATYA</h2>
        <p>
          Hairdreams© is the leading supplier internationally of hair extensions
          and hair thickening in Premium quality, with partner salons in over 60
          countries and millions of customers worldwide.
        </p>
        <h2 className={styles.subtitle}>
          Do you have less and less hair? Is it brittle, getting thinner or
          there are even bald patches forming?
        </h2>
        <p>
          You are not alone in this. Thousands of women have already entrusted
          Hairdreams with their hair problem. Our solutions will help you to
          gain natural hair volume. So that you can enjoy a carefree life again.
        </p>
        <p className={styles.highlight}>
          Katya does exclusive service in applying Hairdreams microlines. Book
          your appointment for free consultation!
        </p>

        <Link href="/hairdreams" passHref>
          <a className={styles.buttonWrapper}>
            <Button>Learn more</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}

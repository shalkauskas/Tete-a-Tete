import Image from 'next/image';
import SectionTitle from './ui/SectionTitle/SectionTitle';
import Accordion from './ui/Accordion/Accordion';
import styles from './Products.module.css';

export default function Products() {
  return (
    <div className={styles.container}>
      <SectionTitle>High-quality products</SectionTitle>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Accordion
            title={
              <>
                <picture>
                  <source type="image/webp" srcSet="top-brands-icon.webp" />
                  <source type="image/png" srcSet="top-brands-icon.png" />
                  <img
                    src="/top-brands-icon.png"
                    alt="Top brands"
                    className={styles.icon}
                  />
                </picture>
                <h2 className={styles.title}>Top brands</h2>
              </>
            }
          >
            <Image
              src="https://res.cloudinary.com/dyj6lkekg/image/upload/tete/top-brands.png"
              alt="Top brands"
              width={604}
              height={426}
              quality={75}
              loading="eager"
            />
          </Accordion>
          <hr className={styles.divider} />
        </div>
        <div className={`${styles.item} ${styles.itemSecond}`}>
          <Accordion
            title={
              <>
                <picture>
                  <source type="image/webp" srcSet="green-choices-icon.webp" />
                  <source type="image/png" srcSet="green-choices-icon.png" />
                  <img
                    src="/green-choices-icon.png"
                    alt="Green choices"
                    className={styles.icon}
                  />
                </picture>
                <h2 className={styles.title}>Green choices</h2>
              </>
            }
          >
            <Image
              src="https://res.cloudinary.com/dyj6lkekg/image/upload/tete/green-choices.png"
              alt="Green choices"
              width={604}
              height={426}
              quality={75}
              loading="eager"
            />
          </Accordion>
        </div>
      </div>
    </div>
  );
}

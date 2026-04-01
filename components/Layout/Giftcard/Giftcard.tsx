import styles from './styles.module.css';

export default function Giftcard() {
  return (
    <div className={styles.giftcard}>
      <a href="https://swipeit.com/product/1218/tete-a-tete">
        <picture>
          <source type="image/webp" srcSet="giftcard.webp" />
          <source type="image/png" srcSet="giftcard.png" />
          <img src="giftcard.png" className={styles.image} alt="Gift cards" />
        </picture>
      </a>
    </div>
  );
}

import styles from "./styles.module.css";

export default function Phone() {
  return (
    <div className={styles.wrapper}>
      <picture>
        <source type="image/webp" srcSet="phone.webp" />
        <source type="image/png" srcSet="phone.png" />
        <img src="/phone.png" alt="Phone" className={styles.icon} />
      </picture>
      <a href="tel:617-559-0660">
        <span className={styles.callUs}>Call us</span> 617-559-0660
      </a>
    </div>
  );
}

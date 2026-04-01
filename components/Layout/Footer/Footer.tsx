import styles from "./styles.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © 2009-{year} Tête-à-Tête Salon. All rights reserved.
          <br />
          617.559.0660 | 765 Beacon St. Newton Centre, MA 02459
        </p>
      </div>
    </footer>
  );
}

import styles from './SectionTitle.module.css';

export default function SectionTitle({ children }: { children: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}

import Link from 'next/link';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  showLink?: boolean;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      {/* conditional rendering of "Back to services button" */}
      <Link
        passHref={true}
        scroll={false}
        href={{
          pathname: '/',
          query: { id: 'services' }
        }}
      >
        <a
          className={`${styles.link} ${
            props.showLink ? styles.shown : styles.hidden
          }`}
        >
          <img
            src="left.png"
            className={styles.icon}
            alt="Go back to services"
          />
          <span className={styles.label}>Back to services</span>
        </a>
      </Link>
    </div>
  );
}

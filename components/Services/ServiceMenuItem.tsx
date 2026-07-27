import styles from './ServiceMenuItem.module.css';

interface ServiceMenuItemProps {
  background: string;
  children: string;
}

export default function ServiceMenuItem(props: ServiceMenuItemProps) {
  return (
    <div
      className={styles.serviceBox}
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dyj6lkekg/image/upload/tete/${props.background}.png)`
      }}
    >
      <p className={styles.backgroundBox}>{props.children}</p>
    </div>
  );
}

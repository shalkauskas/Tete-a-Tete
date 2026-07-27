import Image from 'next/image';
import styles from './TeamMember.module.css';

type Props = {
  photo: string;
  link?: string;
  name: string;
  title: string;
  description: string;
};
export default function TeamMember(props: Props) {
  return (
    <div className={styles.container}>
      <Image
        src={props.photo}
        alt="Team member"
        quality={75}
        width={232}
        height={250}
        loading={'eager'}
      />

      <div className={styles.titleContainer}>
        <p className={styles.name}>{props.name}</p>
        {props.link && (
          <a target="_blank" rel="noopener noreferrer" href={props.link}>
            <picture>
              <source type="image/webp" srcSet="instagram.webp" />
              <source type="image/png" srcSet="instagram.png" />
              <img
                className={styles.instagramIcon}
                src="instagram.png"
                alt="Instagram link"
              />
            </picture>
          </a>
        )}
      </div>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}

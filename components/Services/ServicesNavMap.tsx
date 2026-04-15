import styles from './ServicesNavMap.module.css';

interface NavMapProps {
  title: string;
  currentSlide: number;
  index: number;
  clickHandle: () => void;
  isMobile: boolean;
}

export default function NavMap(props: NavMapProps) {
  const isActive = props.currentSlide === props.index;

  return (
    <button
      className={`${styles.navButton} ${
        props.isMobile ? styles.navButtonMobile : styles.navButtonDesktop
      } ${isActive ? styles.active : ''}`}
      onClick={props.clickHandle}
    >
      <img
        src="arrow-nav-mobile.png"
        className={`${styles.arrow} ${
          props.isMobile ? styles.arrowVisible : styles.arrowHidden
        }`}
        alt=""
      />
      {props.title}
    </button>
  );
}

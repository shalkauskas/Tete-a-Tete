import Backdrop from '../Backdrop';
import styles from './ContactFormResponse.module.css';
type Props = {
  showResponse: boolean;
  setShowResponse: (arg0: { display: boolean; code: number | null }) => void;
  responseCode: number | null;
};
export const ContactFormResponse = (props: Props) => {
  return (
    <div
      className={`${styles.overlay} ${props.showResponse ? styles.shown : styles.hidden}`}
    >
      <div className={styles.dialog}>
        <div className={styles.body}>
          <h2 className={styles.title}>
            {props.responseCode === 200
              ? 'Thank you for contacting Tete-A-Tete!'
              : 'Ooops! Something went wrong!'}
          </h2>
          <p>
            {props.responseCode === 200
              ? 'We will get back to you shortly. If you are willing to book, change or cancel the appointment, please call us at (617) 559‑0660.'
              : 'If you are willing to book, change or cancel the appointment, please call us at (617) 559‑0660.'}
          </p>
          <picture>
            <source type="image/webp" srcSet="contact-confirmation.webp" />
            <source type="image/png" srcSet="contact-confirmation.png" />
            <img
              src="/contact-confirmation.png"
              alt="Phone"
              className={styles.image}
            />
          </picture>
        </div>
        <span
          className={styles.close}
          onClick={() => props.setShowResponse({ display: false, code: null })}
        >
          &times;
        </span>
      </div>
      <Backdrop
        toggle={props.showResponse}
        onClick={() => props.setShowResponse({ display: false, code: null })}
        blur={true}
      />
    </div>
  );
};

import React from 'react';
import SectionTitle from '../SectionTitle';
import Map from './GoogleMap';
import Reviews from './Reviews';
import Backdrop from '../Backdrop';
import styles from './Contact.module.css';
export default function Contact() {
  const [openReview, setOpenReview] = React.useState(false);
  return (
    <div className={styles.container}>
      <SectionTitle title={'Contact'} />
      {/* contact section grid*/}
      <div className={styles.grid}>
        {/* left side info grid */}
        <div className={styles.info}>
          {/* location */}
          <div className={styles.row}>
            <picture className={styles.iconWrapper}>
              <source type="image/webp" srcSet="location.webp" />
              <source type="image/png" srcSet="location.png" />
              <img src="location.png" alt="Location" />
            </picture>
            <div className={styles.detail}>
              <p className={styles.inlineText}>
                <b>Tête‑à‑Tête Salon </b>
                <br />
                765 Beacon Street, Newton Centre, MA 02459
              </p>
            </div>
          </div>
          {/* phone */}
          <div className={styles.row}>
            <picture className={styles.iconWrapper}>
              <source type="image/webp" srcSet="phone-contact.webp" />
              <source type="image/png" srcSet="phone-contact.png" />
              <img src="phone-contact.png" alt="Phone" />
            </picture>
            <div className={styles.detail}>
              <p className={styles.inlineText}>(617) 559‑0660</p>
            </div>
          </div>
          {/* hours */}
          <div className={styles.row}>
            <picture className={styles.iconWrapper}>
              <img src="clock-regular.svg" alt="Hours" className={styles.icon} />
            </picture>
            <div className={styles.detailHours}>
              <p className={styles.bold}>Hours of Operation:</p>
              <p className={styles.hoursList}>
                Monday: 9am - 5pm <br />
                Tuesday: 9am - 5pm <br />
                Wednesday: 9am - 5pm <br />
                Thursday: 9am - 5pm <br />
                Friday: 9am - 5pm <br />
                Saturday: 9am - 5pm <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          {/* social media and direction button */}
          <div className={styles.row}>
            <span className={styles.spacer}></span>
            <div className={styles.social}>
              <picture>
                <source type="image/webp" srcSet="google.webp" />
                <source type="image/png" srcSet="google.png" />
                <img
                  onClick={() => setOpenReview(prevState => !prevState)}
                  src="google.png"
                  alt="Google rating"
                  className={styles.googleImage}
                />
              </picture>
              {openReview && (
                <>
                  <Reviews />
                  <Backdrop
                    toggle={openReview}
                    onClick={() => setOpenReview(prevState => !prevState)}
                    blur={true}
                  />
                </>
              )}

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/teteateteccg/"
                className={styles.socialLink}
              >
                <picture>
                  <source type="image/webp" srcSet="instagram-contact.webp" />
                  <source type="image/png" srcSet="instagram-contact.png" />
                  <img
                    src="instagram-contact.png"
                    alt="Instagram"
                    className={styles.socialIcon}
                  />
                </picture>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/TeteATeteSalon"
                className={styles.socialLink}
              >
                <picture>
                  <source type="image/webp" srcSet="facebook.webp" />
                  <source type="image/png" srcSet="facebook.png" />
                  <img
                    src="facebook.png"
                    alt="Facebook"
                    className={styles.socialIconLast}
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
        {/* map */}
        <div className={styles.mapColumn}>
          <Map />
        </div>
      </div>
    </div>
  );
}

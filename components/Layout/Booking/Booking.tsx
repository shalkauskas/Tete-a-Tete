import Backdrop from '../../Backdrop';
import React from 'react';
import styles from './Booking.module.css';

type Props = {
  showBooking: boolean;
  setShowBooking: (arg: boolean) => void;
};

export default function Booking({ showBooking, setShowBooking }: Props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Booking Policy</h2>
          <span
            className={styles.closeBtn}
            onClick={() => setShowBooking(false)}
          >
            &times;
          </span>
        </div>
        <div className={styles.content}>
          <p>
            Welcome to Tete-a-Tete Cut & Color Group. Important to remember:
          </p>
          <ol className={styles.list}>
            <li>
              Schedule any color/chemical services before a haircut or blow-dry.
            </li>
            <li>
              In order to book an appointment for extensions, straightening
              treatments, or permanent wave, we require a credit card on file.
            </li>
          </ol>
          <p className={styles.bold}>Appointment Cancellations</p>
          <p>
            We require 24 hours advance notice to cancel or reschedule any
            service. Otherwise, you will be charged 100% of the total estimated
            service, and a credit card will be required to book future
            appointments.
          </p>
          <p className={styles.bold}>Methods of Payment</p>
          <p>
            We accept all major credit cards and cash. Regretfully, gratuity
            cannot be charged to the credit card.
          </p>
          <p className={styles.bold}>Children</p>
          <p>
            For the safety and comfort of our guests we cannot accommodate
            children without adult supervision.
          </p>
        </div>
        <div className={styles.bookingFooter}>
          <a
            className={styles.bookLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://login.meevo.com/teteatete/ob?locationId=106145"
          >
            <button className={styles.bookButton}>Book Online </button>
          </a>
        </div>
      </div>
      <Backdrop
        toggle={showBooking}
        onClick={() => setShowBooking(false)}
        blur={true}
      />
    </div>
  );
}

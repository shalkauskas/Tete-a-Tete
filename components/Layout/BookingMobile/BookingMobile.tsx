import React from 'react';
import Button from '../../ui/Button/Button';
import styles from './styles.module.css';

type Props = {
  onClick: (arg: boolean) => void;
};

export default function BookingMobile({ onClick }: Props) {
  return (
    <div className={styles.bookMobile}>
      <Button onClick={() => onClick(true)}>Book an Appointment</Button>
    </div>
  );
}

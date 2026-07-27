import React, { useState } from 'react';
import styles from './styles.module.css';

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}>
        {title}
        <picture>
          <source type="image/webp" srcSet="arrow.webp" />
          <source type="image/png" srcSet="arrow.png" />
          <img
            src="arrow.png"
            alt="Toggle"
            className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          />
        </picture>
      </button>
      <div className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
}

import React from 'react';
import useDocumentScrollThrottled from './Hooks/useDocumentScrollThrottled';
import styles from './ScrollButton.module.css';
export default function ScrollButton() {
  const [showScroll, setShowScroll] = React.useState(false);
  const [moveScroll, setMoveScroll] = React.useState(false);
  useDocumentScrollThrottled(callbackData => {
    const { currentScrollTop } = callbackData;
    const bottom = document.body.scrollHeight - 1100;
    setShowScroll(currentScrollTop > 400);
    setMoveScroll(currentScrollTop > bottom);
  });
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <picture>
        <source type="image/webp" srcSet="scrollToTop.webp" />
        <source type="image/png" srcSet="scrollToTop.png" />
        <img
          src="scrollToTop.png"
          alt="Scroll to top"
          className={`${styles.scrollTop} ${
            moveScroll ? styles.moveDown : styles.moveUp
          }`}
          onClick={scrollTop}
          style={{ display: showScroll ? 'flex' : 'none' }}
        />
      </picture>
    </div>
  );
}

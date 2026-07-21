import Buttons from '../../Buttons';
import Image from 'next/image';
import InfoIcon from '../../ui/icons/InfoIcon';
import React from 'react';
import styles from './ServiceCard.module.css';
import type { ServiceCategory, ServiceItem } from '../../../types';

type Props = {
  category: ServiceCategory;
  items: ServiceItem[];
  showSkinCare: boolean;
  mapNav: React.ReactNode;
  renderNav: boolean;
};

export default function ServiceCard({
  category,
  items,
  showSkinCare,
  mapNav,
  renderNav
}: Props) {
  const [activeId, setActiveId] = React.useState<number | null>(null);

  const toggleInfo = (id: number) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={showSkinCare ? styles.image : styles.imageWide}>
          <Image
            src={category.image}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 1080px) 210px, 400px"
            alt="Service image"
            quality={50}
            priority={true}
          />
        </div>
        {renderNav && <div className={styles.navContainer}>{mapNav}</div>}
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.serviceList}>
          {items.map(item => {
            const hasInfo = item.info !== undefined;
            const nameClasses = `${styles.serviceName} ${
              showSkinCare ? '' : styles.serviceNameGrid
            } ${hasInfo ? styles.serviceNameClickable : ''}`;
            const isActive = item.id === activeId;
            const popupClasses = `${styles.infoPopup} ${
              item.isVideo ? styles.infoPopupVideo : ''
            }`;
            const itemClasses = `${styles.serviceItem} ${
              showSkinCare ? styles.serviceItemRow : ''
            }`;
            return (
              <div key={item.id} className={itemClasses}>
                {hasInfo ? (
                  <button
                    type="button"
                    onClick={() => toggleInfo(item.id)}
                    className={nameClasses}
                  >
                    {item.service}
                  </button>
                ) : (
                  <p className={nameClasses}>{item.service}</p>
                )}
                <p
                  className={`${styles.servicePrice} ${
                    showSkinCare
                      ? styles.servicePriceRow
                      : styles.servicePriceGrid
                  }`}
                >
                  {item.price}
                </p>
                {isActive && (
                  <button
                    type="button"
                    className={popupClasses}
                    aria-label="Close info"
                    onClick={() => toggleInfo(item.id)}
                  >
                    {item.isVideo ? (
                      <span className={styles.videoContainer}>
                        <video width={180} autoPlay muted loop playsInline>
                          <source src="/airtouch.mp4" type="video/mp4" />
                        </video>
                      </span>
                    ) : (
                      <>
                        <InfoIcon className={styles.infoIcon} />
                        <span className={styles.infoText}>{item.info}</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
        {showSkinCare && (
          <div className={styles.skincareLogo}>
            <p className={styles.skincareText}>
              We Use The Rezâge Skin Care Line
            </p>
            <picture>
              <source type="image/webp" srcSet="rezage-logo.webp" />
              <source type="image/png" srcSet="rezage-logo.png" />
              <img
                src="rezage-logo.png"
                className={styles.skincareImage}
                alt="We Use The Rezâge Skin Care Line"
              />
            </picture>
          </div>
        )}
        <div className={styles.mobileButtons}>
          <Buttons />
        </div>
        <p className={styles.referText}>
          Refer a friend and get $15 gift certificate!
        </p>
      </div>
    </div>
  );
}

import Buttons from '../Buttons';
import Image from 'next/image';
import Backdrop from '../Backdrop';
import React from 'react';
import styles from './ServicesMap.module.css';

interface ServiceItem {
  id: string;
  service: string;
  price: string;
  info?: string;
  isVideo?: boolean;
  image: string;
  title?: string;
}

interface ServicesMapProps {
  list: ServiceItem[];
  showSkinCare: boolean;
  showMobile: boolean;
  mapNav: React.ReactNode;
  renderNav: boolean;
}

interface InfoNoteProps {
  showMobile: boolean;
}

export default function ServicesMap(props: ServicesMapProps) {
  const list = props.list;
  const [showInfo, setShowInfo] = React.useState({
    display: false,
    id: '',
    isVideo: false
  });
  const node = React.useRef<HTMLDivElement>(null);

  function InfoNote({ showMobile }: InfoNoteProps) {
    let infoText: string | null = null;
    list.filter(item => {
      if (item.id === showInfo.id) {
        infoText = item.info || null;
      }
    });

    const popupClasses = [
      styles.infoPopup,
      showInfo.display ? styles.infoPopupVisible : styles.infoPopupHidden,
      showInfo.isVideo ? styles.infoPopupVideo : '',
      showMobile ? styles.infoPopupMobile : styles.infoPopupDesktop
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div onClick={() => handleClick()} className={popupClasses}>
        {showInfo.isVideo ? (
          <div className={styles.videoContainer}>
            <video width={180} autoPlay muted loop playsInline>
              <source src="/airtouch.mp4" type="video/mp4" />
            </video>
          </div>
        ) : (
          <>
            <img
              src="info.png"
              className={`${styles.infoIcon} ${
                showMobile ? styles.infoIconMobile : styles.infoIconDesktop
              }`}
              alt=""
            />
            <p className={styles.infoText}>{infoText}</p>
          </>
        )}
      </div>
    );
  }

  const handleClick = (id?: string, isVideo?: boolean) => {
    setShowInfo(() => ({
      id: id || '',
      display: !showInfo.display,
      isVideo: isVideo || false
    }));
  };

  const mapServices = list.map((item, index) => {
    const hasInfo = 'info' in item;
    return (
      <div
        ref={node}
        key={index}
        className={`${styles.serviceItem} ${
          props.showSkinCare ? styles.serviceItemRow : styles.serviceItemGrid
        }`}
      >
        <p
          onClick={() => (hasInfo ? handleClick(item.id, item.isVideo) : null)}
          className={`${styles.serviceName} ${
            props.showSkinCare ? '' : styles.serviceNameGrid
          } ${hasInfo ? styles.serviceNameClickable : ''}`}
        >
          {item.service}
        </p>
        <p
          className={`${styles.servicePrice} ${
            props.showSkinCare
              ? styles.servicePriceRow
              : styles.servicePriceGrid
          }`}
        >
          {item.price}
        </p>
      </div>
    );
  });

  const skinCareLogo = (
    <div
      className={`${styles.skincareLogo} ${
        props.showMobile ? styles.skincareLogoMobile : ''
      } ${props.showSkinCare ? styles.skincareLogoVisible : styles.skincareLogoHidden}`}
    >
      <p className={styles.skincareText}>We Use The Rezâge Skin Care Line</p>
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
  );

  const width = () => {
    if (props.showSkinCare === true) {
      return props.showMobile ? 190 : 670;
    } else if (props.showMobile === true) {
      return 210;
    } else {
      return 820;
    }
  };

  return (
    <div
      className={`${styles.container} ${
        props.showMobile ? styles.containerMobile : ''
      }`}
    >
      {/* image */}
      <div className={styles.imageContainer}>
        <Image
          src={`${list[0].image}`}
          width={width()}
          height={props.showMobile ? 320 : 1250}
          alt="Service image"
          quality={50}
          loading={'eager'}
          priority={true}
        />
        {/* rendering navigation for services */}
        <div
          className={`${styles.navContainer} ${
            props.renderNav && props.showMobile
              ? styles.navContainerVisible
              : styles.navContainerHidden
          }`}
        >
          {props.mapNav}
        </div>
      </div>

      {/* description */}
      <div
        className={`${styles.descriptionContainer} ${
          props.showMobile
            ? styles.descriptionMobile
            : styles.descriptionDesktop
        }`}
      >
        {mapServices}
        <InfoNote showMobile={props.showMobile} />
        {skinCareLogo}
        {props.showMobile ? (
          <Buttons mobile={props.showMobile} />
        ) : (
          <p className={styles.text}>
            Refer a friend and get $15 gift certificate!
          </p>
        )}
      </div>
      <Backdrop
        toggle={showInfo.display}
        onClick={() =>
          setShowInfo(() => ({ ...showInfo, display: !showInfo.display }))
        }
        blur={false}
      />
    </div>
  );
}

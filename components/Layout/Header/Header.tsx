import React from "react";
import Phone from "../Phone/Phone";
import useDocumentScrollThrottled from "../../Hooks/useDocumentScrollThrottled";
import { useRouter } from "next/router";
import Link from "next/link";
import smoothscroll from "smoothscroll-polyfill";
import styles from "./styles.module.css";

export default function Header(props) {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  // Resize navbar on scroll //
  const [showMiniNav, setShowMiniNav] = React.useState(false);
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    setShowMiniNav(currentScrollTop > 100);
  });
  const navClass = showMiniNav ? styles.navSmall : styles.navFull;
  const logoClass = showMiniNav ? styles.logoHidden : styles.logo;
  const textLogoClass = showMiniNav ? styles.textLogo : styles.textLogoHidden;

  return (
    <div className={styles.wrapper}>
      <Phone />
      <nav className={`${styles.nav} ${navClass}`}>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <a
              className={styles.logoLink}
              onClick={() =>
                router.push("/").then(() => {
                  smoothscroll.polyfill();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                })
              }
            >
              <picture>
                <source type="image/webp" srcSet="logo.webp" />
                <source type="image/png" srcSet="logo.png" />
                <img
                  src="/logo.png"
                  alt="Logo"
                  className={logoClass}
                />
              </picture>
              <span className={textLogoClass}>
                Tête-à-Tête
              </span>
            </a>
            <button
              className={styles.hamburger}
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className={styles.hamburgerIcon}>
                &#9776;
              </span>
            </button>
          </div>
          <div
            className={`${styles.navMenu} ${
              navbarOpen ? styles.navMenuOpen : styles.navMenuClosed
            }`}
          >
            <ul className={styles.navList}>
              <li>
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "services" },
                  }}
                >
                  <a
                    className={styles.navItem}
                    onClick={() => {
                      setNavbarOpen(false);
                    }}
                  >
                    Services
                  </a>
                </Link>
                <hr className={styles.hr} />
              </li>

              <li>
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "team" },
                  }}
                >
                  <a
                    className={styles.navItem}
                    onClick={() => {
                      setNavbarOpen(false);
                    }}
                  >
                    Team
                  </a>
                </Link>
                <hr className={styles.hr} />
              </li>

              <li>
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "products" },
                  }}
                >
                  <a
                    className={styles.navItem}
                    onClick={() => {
                      setNavbarOpen(false);
                    }}
                  >
                    Products
                  </a>
                </Link>
                <hr className={styles.hr} />
              </li>

              <li>
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "contact" },
                  }}
                >
                  <a
                    className={styles.navItem}
                    onClick={() => {
                      setNavbarOpen(false);
                    }}
                  >
                    Contact
                  </a>
                </Link>
              </li>
              <li className={styles.bookingItemWrapper}>
                <a
                  onClick={() => props.onClick(true)}
                  className={styles.bookingItem}
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

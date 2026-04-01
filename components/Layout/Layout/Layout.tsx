import React from 'react';
import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BookingMobile from '../BookingMobile/BookingMobile';
import Booking from '../Booking/Booking';
import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [showBooking, setShowBooking] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Tete-a-Tete Salon | Newton</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Tete-a-Tete hair salon in Newton, MA, 02459"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=News+Cycle&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#706d6c" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#f0eae7" />
        <meta property="og:url" content="https://teteatetesalon.com/" />
        <meta
          name="keywords"
          content="Hair salon, Newton, Hairdreams, hair color, nails, skin care, Organic coloring, Balayage, highlights"
        />
        <link rel="canonical" href="https://teteatetesalon.com/" />
        <meta
          name="google-site-verification"
          content="ACxh2FEhQYkgtjFFbBKYBqdCaXctMgTMTvzlSlqI0BM"
        />
        <meta
          name="google-site-verification"
          content="L9WVy8fDJV8puodulOqjeOIh3Pg_0odyE4hbv23KrdQ"
        />
        <meta property="og:title" content="Tete-a-Tete salon" />
        <meta property="og:site_name" content="Tete-a-Tete salon" />
        <meta
          property="og:description"
          content="Whether you're here to maintain your look or receive a beauty transformation, you can do it all Tête-à-Tête."
        />
        <meta property="og:image" content="/android-chrome-512x512.png" />
      </Head>
      <Header onClick={() => setShowBooking(true)} />
      {showBooking && (
        <Booking showBooking={showBooking} setShowBooking={setShowBooking} />
      )}
      {children}
      <BookingMobile onClick={() => setShowBooking(true)} />
      <Footer />
    </div>
  );
}

import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import useDocumentScrollThrottled from "../Hooks/useDocumentScrollThrottled";
import BookingMobile from "./BookingMobile";
import Booking from "./Booking";
export default function Layout({ children, props }) {
  const [footerFixed, setFooterFixed] = React.useState(true);
  const [showBooking, setShowBooking] = React.useState(false);

  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    const footerHeight =
      document.documentElement.scrollHeight - document.body.clientHeight - 154;
    setFooterFixed(currentScrollTop < footerHeight);
  });
  return (
    <div className="overflow-y-hidden overflow-x-hidden relative">
      <Head>
        <title>Tete-a-Tete Salon</title>
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
      </Head>
      <Header onClick={() => setShowBooking(true)} />
      <BookingMobile
        onClick={() => setShowBooking(true)}
        position={footerFixed}
      />
      {showBooking && (
        <Booking showBooking={showBooking} setShowBooking={setShowBooking} />
      )}
      {children}
      <Footer />
    </div>
  );
}

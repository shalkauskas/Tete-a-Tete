import React from 'react';
import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BookingMobile from '../BookingMobile/BookingMobile';
import Booking from '../Booking/Booking';
import styles from './styles.module.css';

const SITE_URL = 'https://teteatetesalon.com';
const DEFAULT_TITLE = 'Tete-a-Tete Salon | Newton';
const DEFAULT_DESCRIPTION = 'Tete-a-Tete hair salon in Newton, MA, 02459';
const OG_IMAGE = `${SITE_URL}/android-chrome-512x512.png`;

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Tête-à-Tête Salon',
  image: OG_IMAGE,
  url: SITE_URL,
  telephone: '+1-617-559-0660',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '765 Beacon Street',
    addressLocality: 'Newton Centre',
    addressRegion: 'MA',
    postalCode: '02459',
    addressCountry: 'US'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '09:00',
      closes: '17:00'
    }
  ],
  sameAs: [
    'https://www.instagram.com/teteateteccg/',
    'https://www.facebook.com/TeteATeteSalon'
  ]
};

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonicalPath?: string;
};

export default function Layout({
  children,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '/'
}: Props) {
  const [showBooking, setShowBooking] = React.useState(false);
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta key="description" name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
        <meta
          name="keywords"
          content="Hair salon, Newton, Hairdreams, hair color, nails, skin care, Organic coloring, Balayage, highlights"
        />
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta
          name="google-site-verification"
          content="ACxh2FEhQYkgtjFFbBKYBqdCaXctMgTMTvzlSlqI0BM"
        />
        <meta
          name="google-site-verification"
          content="L9WVy8fDJV8puodulOqjeOIh3Pg_0odyE4hbv23KrdQ"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:title" property="og:title" content={title} />
        <meta property="og:site_name" content="Tete-a-Tete salon" />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta key="og:image" property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        <meta key="twitter:image" name="twitter:image" content={OG_IMAGE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd)
          }}
        />
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

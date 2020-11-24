import Head from "next/head";
import Header from "@/components/Header";
import Giftcard from "@/components/Giftcard";
import Footer from "@/components/Footer";

export default function Layout({ children, title }) {
  return (
    <div className="overflow-y-hidden relative pb-40">
      <Head>
        <title>Tete-a-Tete Salon</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=News+Cycle&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header
        el1={() => goTo("Services")}
        el2={() => goTo("Team")}
        el3={() => goTo("Products")}
        el4={() => goTo("Contact")}
      />
      <Giftcard />
      {children}
      <Footer />
    </div>
  );
}

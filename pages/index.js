import Head from "next/head";
import Header from "@/components/Header";
import WelcomeCarousel from "@/components/Carousel";
import Services from "@/components/ServiceMenu";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Giftcard from "@/components/Giftcard";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";

export default function Home() {
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
      <Header />
      <WelcomeCarousel />
      <Services />
      <Team />
      <Products />
      <Contact />
      <ContactForm />
      <Giftcard />
      <ScrollButton />
      <Footer />
    </div>
  );
}

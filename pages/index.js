import Head from "next/head";
import ScrollNavigation from "react-single-page-navigation";
import Header from "@/components/Header";
import WelcomeCarousel from "@/components/Carousel";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Giftcard from "@/components/Giftcard";
import Footer from "@/components/Footer";

export default function Home() {
  const elements = {
    Services: {},
    Team: {},
    Products: {},
    Contact: {},
  };

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

      <ScrollNavigation
        elements={elements}
        offset={-120}
        //  shouldEnableHistory={true}
        //  shouldModifyUrl={true}
      >
        {({ refs, activeElement, goTo }) => (
          <div>
            <Header
              el1={() => goTo("Services")}
              el2={() => goTo("Team")}
              el3={() => goTo("Products")}
              el4={() => goTo("Contact")}
            />
            <WelcomeCarousel />
            <div className="content mx-auto">
              <div ref={refs.Services}>
                <Services />
              </div>
              <div ref={refs.Team}>
                <Team />
              </div>
              <div ref={refs.Products}>
                <Products />
              </div>
              <div ref={refs.Contact}>
                <Contact />
              </div>
            </div>
          </div>
        )}
      </ScrollNavigation>
      <ContactForm />
      <Giftcard />
      <Footer />
    </div>
  );
}

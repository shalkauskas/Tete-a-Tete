import Head from "next/head";
import ScrollNavigation from "react-single-page-navigation";
import Header from "@/components/Header";
import WelcomeCarousel from "@/components/Carousel";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useState } from "react";
import useDocumentScrollThrottled from "components/useDocumentScrollThrottled";

export default function Home() {
  const elements = {
    Services: {},
    Team: {},
    Products: {},
    Contact: {},
  };
  // Resize navbar on scroll //
  const [shouldHideLogo, setShouldHideLogo] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 100;
  const TIMEOUT_DELAY = 0;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 100);

    setTimeout(() => {
      setShouldHideLogo(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  const header = shouldShowShadow ? "nav-small" : "nav-full";
  const logo = shouldShowShadow ? "hidden" : "inline-block";
  const textLogo = shouldShowShadow ? "inline-block" : "hidden";

  return (
    <div className="overflow-y-hidden">
      <Head>
        <title>Tete-a-Tete Salon</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=News+Cycle&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <ScrollNavigation
        elements={elements}
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
              headerHeight={header}
              logo={logo}
              textLogo={textLogo}
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
      <Footer />
    </div>
  );
}

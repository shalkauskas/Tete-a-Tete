import Head from "next/head";
import ScrollNavigation from "react-single-page-navigation";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const elements = {
    Services: {},
    Team: {},
    Products: {},
    Contact: {},
  };
  const styles = {
    section: {
      width: "100%",
      height: "70vh",
    },
  };
  // Resize navbar on scroll //
  const [header, setHeader] = useState("nav-full");
  const [logo, setLogo] = useState("inline-block");
  const [textLogo, setTextLogo] = useState("hidden");
  React.useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);
  });
  function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200;

    if (distanceY > shrinkOn) {
      setLogo("hidden");
      setHeader("nav-small");
      setTextLogo("inline-block");
    } else {
      setLogo("inline-block");
      setHeader("nav-full");
      setTextLogo("hidden");
    }
  }
  return (
    <div className="">
      <Head>
        <title>Tete-a-Tete Salon</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap"
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
            <Carousel />
            <div className="content mx-auto">
              <div
                ref={refs.Services}
                style={{ ...styles.section, background: "#62B6CB" }}
              >
                <Services />
              </div>
              <div
                ref={refs.Team}
                style={{ ...styles.section, background: "#1B4965" }}
              >
                <Team />
              </div>
              <div
                ref={refs.Products}
                style={{ ...styles.section, background: "#62B6CB" }}
              >
                <Products />
              </div>
              <div
                ref={refs.Contact}
                style={{ ...styles.section, background: "#1B4965" }}
              >
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

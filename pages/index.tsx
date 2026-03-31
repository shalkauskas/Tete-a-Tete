import React from "react";
import WelcomeCarousel from "../components/Carousel";
import Services from "../components/Services/ServiceMenu";
import Team from "../components/Team/Team";
import Products from "../components/Products";
import Contact from "../components/Contact/Contact";
import ContactForm from "../components/Contact/ContactForm";
import Layout from "../components/Layout/Layout";
import ScrollButton from "../components/ScrollButton";
import smoothscroll from "smoothscroll-polyfill";
import { useRouter } from "next/router";
import Giftcard from "@/components/Layout/Giftcard";
import useDocumentScrollThrottled from "@/components/Hooks/useDocumentScrollThrottled";

export default function Home() {
  const [giftcardFixed, setGiftcardFixed] = React.useState(false);

  const router = useRouter();
  // refs
  const servicesRef = React.useRef(null),
    teamRef = React.useRef(null),
    productsRef = React.useRef(null),
    contactRef = React.useRef(null);
  const { id } = router.query;
  React.useEffect(() => {
    if (id === "services") {
      scroll(servicesRef);
      router.replace("/", undefined, { shallow: true });
    }
    if (id === "products") {
      scroll(productsRef);
      router.replace("/", undefined, { shallow: true });
    }
    if (id === "team") {
      scroll(teamRef);
      router.replace("/", undefined, { shallow: true });
    }
    if (id === "contact") {
      scroll(contactRef);
      router.replace("/", undefined, { shallow: true });
    }
  }, [id]);
  const scroll = (tag) => {
    smoothscroll.polyfill();
    tag.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    setGiftcardFixed(currentScrollTop > 600);
  });
  return (
    <Layout>
      <WelcomeCarousel />
      <div className="content relative">
        <div className="relative">
          <div
            ref={servicesRef}
            className="absolute"
            style={{ top: "-170px" }}
            id="services"
          />
          <Services />
        </div>
        <div className="relative">
          <div ref={teamRef} className="absolute" style={{ top: "-170px" }} />
          <Team />
        </div>
        <div className="relative">
          <div
            ref={productsRef}
            className="absolute"
            style={{ top: "-170px" }}
          />
          <Products />
        </div>
        <div className="relative">
          <div
            ref={contactRef}
            className="absolute"
            style={{ top: "-170px" }}
          />
          <Contact />
        </div>
        <ContactForm />
        <Giftcard position={giftcardFixed} />
      </div>
      <ScrollButton />
    </Layout>
  );
}

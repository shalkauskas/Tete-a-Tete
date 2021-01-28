import WelcomeCarousel from "@/components/Carousel";
import Services from "@/components/ServiceMenu";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
import ScrollButton from "@/components/ScrollButton";
import smoothscroll from "smoothscroll-polyfill";
import { useRouter } from "next/router";
export default function Home() {
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
      router.push({
        query: {},
      });
    }
    if (id === "team") {
      scroll(teamRef);
      router.push({
        query: {},
      });
    }
    if (id === "products") {
      scroll(productsRef);
      router.push({
        query: {},
      });
    }
    if (id === "contact") {
      scroll(contactRef);
      router.push({
        query: {},
      });
    }
  }, [id]);

  const scroll = (tag) => {
    tag.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    smoothscroll.polyfill();
  };

  return (
    <Layout>
      <WelcomeCarousel />
      <div className="relative">
        <div ref={servicesRef} className="absolute" style={{ top: "-170px" }} />
        <Services />
      </div>
      <div className="relative">
        <div ref={teamRef} className="absolute" style={{ top: "-170px" }} />
        <Team />
      </div>
      <div className="relative">
        <div ref={productsRef} className="absolute" style={{ top: "-170px" }} />
        <Products />
      </div>
      <div className="relative">
        <div ref={contactRef} className="absolute" style={{ top: "-170px" }} />
        <Contact />
      </div>
      <ContactForm />
      <ScrollButton />
    </Layout>
  );
}

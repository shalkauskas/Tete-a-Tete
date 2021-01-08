import WelcomeCarousel from "@/components/Carousel";
import Services from "@/components/ServiceMenu";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
import ScrollButton from "@/components/ScrollButton";

export default function Home() {
  return (
    <Layout>
      <WelcomeCarousel />
      <Services />
      <Team />
      <Products />
      <Contact />
      <ContactForm />
      <ScrollButton />
    </Layout>
  );
}

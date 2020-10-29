import Head from "next/head";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import ScrollNavigation from "react-single-page-navigation";

export default function Test() {
  const elements = {
    EL1: {},
    EL2: {},
    EL3: {},
    EL4: {},
  };
  const goEL1 = () => {
    goTo("EL1");
  };
  const goEL2 = () => {
    goTo("EL2");
  };
  const goEL3 = () => {
    goTo("EL3");
  };
  const goEL4 = () => {
    goTo("EL4");
  };
  const styles = {
    menuLink: {
      // cursor: "pointer",
      // padding: "5px 0",
      // transition: "all .2s ease-out",
    },
    menuLinkActive: {
      // cursor: "pointer",
      // fontWeight: "bold",
      // padding: "5px 20px",
      // transition: "all .2s ease-out",
    },
    section: {
      width: "100%",
      height: "70vh",
    },
  };
  return (
    <div>
      <Head>
        <title>Tete-a-Tete Salon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollNavigation
        elements={elements}
        //  shouldEnableHistory={true}
        //  shouldModifyUrl={true}
      >
        {({ refs, activeElement, goTo }) => (
          <div>
            <Header
              el1={() => goTo("EL1")}
              el2={() => goTo("EL2")}
              el3={() => goTo("EL3")}
              el4={() => goTo("EL4")}
            />

            <div className="content mx-auto">
              <div
                ref={refs.EL1}
                style={{ ...styles.section, background: "#62B6CB" }}
              >
                <Services />
              </div>
              <div
                ref={refs.EL2}
                style={{ ...styles.section, background: "#1B4965" }}
              >
                <Team />
              </div>
              <div
                ref={refs.EL3}
                style={{ ...styles.section, background: "#62B6CB" }}
              >
                <Products />
              </div>
              <div
                ref={refs.EL4}
                style={{ ...styles.section, background: "#1B4965" }}
              >
                <Contact />
              </div>
            </div>
          </div>
        )}
      </ScrollNavigation>
    </div>
  );
}

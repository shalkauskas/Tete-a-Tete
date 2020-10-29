import * as React from "react";
import ScrollNavigation from "react-single-page-navigation";
import Team from "@/components/Team";
function Navigation() {
  const elements = {
    EL1: {},
    EL2: {},
    EL3: {},
    EL4: {},
  };
  const styles = {
    menuLink: {
      cursor: "pointer",
      padding: "5px 0",
      transition: "all .2s ease-out",
    },
    menuLinkActive: {
      cursor: "pointer",
      fontWeight: "bold",
      padding: "5px 20px",
      transition: "all .2s ease-out",
    },
    section: {
      width: "100%",
      height: "70vh",
    },
  };

  return (
    <ScrollNavigation
      elements={elements}
      //  shouldEnableHistory={true}
      //  shouldModifyUrl={true}
    >
      {({ refs, activeElement, goTo }) => (
        <div className="container">
          <div className="colNav">
            <div className="menu">
              <div
                style={
                  activeElement === "EL1"
                    ? styles.menuLinkActive
                    : styles.menuLink
                }
                onClick={() => goTo("EL1")}
              >
                ONE
              </div>
              <div
                style={
                  activeElement === "EL2"
                    ? styles.menuLinkActive
                    : styles.menuLink
                }
                onClick={() => goTo("EL2")}
              >
                TWO
              </div>
              <div
                style={
                  activeElement === "EL3"
                    ? styles.menuLinkActive
                    : styles.menuLink
                }
                onClick={() => goTo("EL3")}
              >
                THREE
              </div>
              <div
                style={
                  activeElement === "EL4"
                    ? styles.menuLinkActive
                    : styles.menuLink
                }
                onClick={() => goTo("EL4")}
              >
                FOUR
              </div>
            </div>
          </div>
          <div className="content">
            <div
              ref={refs.EL1}
              style={{ ...styles.section, background: "#62B6CB" }}
            />
            <div
              ref={refs.EL2}
              style={{ ...styles.section, background: "#1B4965" }}
            />
            <div
              ref={refs.EL3}
              style={{ ...styles.section, background: "#62B6CB" }}
            />
            <div
              ref={refs.EL4}
              style={{ ...styles.section, background: "#1B4965" }}
            >
              <Team />
            </div>
          </div>
        </div>
      )}
    </ScrollNavigation>
  );
}

export default Navigation;

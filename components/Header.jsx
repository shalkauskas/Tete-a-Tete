import React, { useState } from "react";
import Phone from "components/Phone";
import CovidPolicy from "components/CovidPolicy";
import useDocumentScrollThrottled from "components/useDocumentScrollThrottled";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Header() {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Resize navbar on scroll //
  const [showMiniNav, setShowMiniNav] = useState(false);

  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    setShowMiniNav(currentScrollTop > 100);
  });
  const header = showMiniNav ? "nav-small" : "nav-full";
  const logo = showMiniNav ? "w-0 transition-all duration-500 ease" : "logo";
  const textLogo = showMiniNav
    ? "font-logo"
    : "hidden transition-all duration-300 ease-in-out";
  const dropdown = showMiniNav ? "" : "";
  return (
    <div className="fixed z-40 top-0 w-screen">
      <Phone />
      <nav
        className={`relative flex flex-wrap items-center justify-between ${header} px-2 navbar-expand-lg navbar-bg`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={`${dropdown} w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start`}
          >
            <Link href="/" passHref>
              <a>
                <img src="/logo.png" alt="Logo" className={`${logo}`} />
                <span
                  className={`${textLogo} font-logo uppercase text-4xl xl:leading-4 lg:leading-4 md:leading-normal leading-relaxed inline-block mr-4 py-3 whitespace-no-wrap text-white`}
                >
                  Tête-à-Tête
                </span>
              </a>
            </Link>
            <button
              className={`text-white cursor-pointer text-xl leading-none px-3 pt-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`}
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span style={{ color: "#C4C4C4" }} className="text-5xl">
                &#9776;
              </span>
            </button>
          </div>
          <div
            className={
              `justify-center lg:flex flex-grow items-center` +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                  <span
                    onClick={() =>
                      router.push("/", "/services").then(() =>
                        window.scrollTo({
                          top: 600,
                          behavior: "smooth",
                        })
                      )
                    }
                    className="ml-2"
                  >
                    Services
                  </span>
                </a>
              </li>
              <hr />
              <li className="nav-item">
                <a className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                  <span
                    onClick={() =>
                      router.push("/", "/team").then(() =>
                        window.scrollTo({
                          top: 1650,
                          behavior: "smooth",
                        })
                      )
                    }
                    className="ml-2"
                  >
                    Team
                  </span>
                </a>
              </li>
              <hr />
              <li className="nav-item">
                <a className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                  <span
                    onClick={() =>
                      router.push("/", "/products").then(() =>
                        window.scrollTo({
                          top: 2350,
                          behavior: "smooth",
                        })
                      )
                    }
                    className="ml-2"
                  >
                    Products
                  </span>
                </a>
              </li>
              <hr />
              <li className="nav-item">
                <a className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                  <span
                    onClick={() =>
                      router.push("/", "/contact").then(() =>
                        window.scrollTo({
                          top: 3150,
                          behavior: "smooth",
                        })
                      )
                    }
                    className="ml-2"
                  >
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CovidPolicy />
      <style jsx>{`
        .navbar-bg {
          background-color: #706d6c;
        }
        .font-logo {
          font-family: "News Cycle", sans-serif;
          transition: all 0.5s;
        }
        .logo {
          width: 238px;
          height: 145px;
          transition: all 0.5s ease;
        }
        .nav-full {
          height: 137px;
          transition: all 0.5s;
        }
        .nav-small {
          height: 86px;
          transition: all 0.5s;
        }
        #example-navbar-danger {
          background-color: #716c6c;
        }
        @media screen and (max-width: 1023px) {
          #example-navbar-danger {
            padding: 30px 0;
            position: absolute;
            width: 70%;
            top: 100%;
            left: 50%;
            transform: translate(-50%, 0%);
            right: 50%;
          }
          li a {
            padding-left: 4.75rem;
          }
          hr {
            width: 250px;
          }
        }
      `}</style>
    </div>
  );
}

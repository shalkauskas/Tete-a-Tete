import React from "react";
import Phone from "./Phone";
import useDocumentScrollThrottled from "../Hooks/useDocumentScrollThrottled";
import { useRouter } from "next/router";
import Link from "next/link";
import smoothscroll from "smoothscroll-polyfill";
export default function Header(props) {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  // Resize navbar on scroll //
  const [showMiniNav, setShowMiniNav] = React.useState(false);
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    setShowMiniNav(currentScrollTop > 100);
  });
  const header = showMiniNav ? "nav-small" : "nav-full";
  const logo = showMiniNav ? "w-0" : "logo";
  const textLogo = showMiniNav ? "font-logo" : "hidden";
  const dropdown = showMiniNav ? "" : "";
  return (
    <div className="fixed z-30 top-0 w-screen">
      <Phone />
      <nav
        className={`relative flex flex-wrap items-center justify-between ${header} px-2 navbar-expand-lg navbar-bg`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={`${dropdown} w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start`}
          >
            <a
              className="cursor-pointer"
              onClick={() =>
                router.push("/").then(() => {
                  smoothscroll.polyfill();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                })
              }
            >
              <picture>
                <source type="image/webp" srcSet="logo.webp" />
                <source type="image/png" srcSet="logo.png" />
                <img
                  src="/logo.png"
                  alt="Logo"
                  className={`${logo} hover:opacity-75 logo-transition`}
                />
              </picture>
              <span
                className={`${textLogo} logo-transition font-logo uppercase sm:text-4xl text-2xl xl:leading-4 lg:leading-4 md:leading-normal leading-relaxed inline-block mr-4 py-3 whitespace-no-wrap text-white`}
              >
                Tête-à-Tête
              </span>
            </a>
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
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "services" },
                  }}
                >
                  <a className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                    Services
                  </a>
                </Link>

                <hr />
              </li>

              <li className="nav-item">
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "team" },
                  }}
                >
                  <a className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                    Team
                  </a>
                </Link>

                <hr />
              </li>

              <li className="nav-item">
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "products" },
                  }}
                >
                  <a className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                    Products
                  </a>
                </Link>

                <hr />
              </li>

              <li className="nav-item">
                <Link
                  passHref={true}
                  scroll={false}
                  href={{
                    pathname: "/",
                    query: { id: "contact" },
                  }}
                >
                  <a className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                    Contact
                  </a>
                </Link>
              </li>
              <li className="nav-item bookingItem">
                <a
                  onClick={() => props.onClick(true)}
                  className="cursor-pointer px-3 py-4 lg:py-2 xl:py-2 flex items-center text-lg md:leading-snug hover:opacity-75 booking rounded-2xl ml-2 shadow-md"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .booking {
          background-color: #f0eae7;
          font-weight: 600;
        }
        .navbar-bg {
          background-color: #706d6c;
        }
        .font-logo {
          font-family: "News Cycle", sans-serif;
        }
        .logo {
          width: 238px;
          height: 136px;
        }
        .logo-transition {
          transition: all 0.7s cubic-bezier(0.01, 0.81, 1, 1.26);
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
        hr {
          display: none;
        }
        @media screen and (max-width: 1023px) {
          .bookingItem {
            display: none;
          }
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
            display: block;
          }
        }
      `}</style>
    </div>
  );
}

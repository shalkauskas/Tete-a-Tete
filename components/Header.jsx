export default function Header(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="sticky top-0">
      <nav
        className={`relative flex flex-wrap items-center justify-between ${props.headerHeight} px-2 navbar-expand-lg navbar-bg`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className={`logo ${props.logo}`}
              />
              <span
                className={`${props.textLogo} font-logo uppercase text-4xl leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-white`}
              >
                Tête-à-Tête
              </span>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars">|||</i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a className="cursor-pointer px-3 py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                  <span onClick={props.el1} className="ml-2">
                    Services
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="cursor-pointer px-3 py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                  <span onClick={props.el2} className="ml-2">
                    Team
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="cursor-pointer px-3 py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                  <span onClick={props.el3} className="ml-2">
                    Products
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="cursor-pointer px-3 py-2 flex items-center text-lg leading-snug text-white hover:opacity-75">
                  <span onClick={props.el4} className="ml-2">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

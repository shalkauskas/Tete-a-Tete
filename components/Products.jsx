import SectionTitle from "components/SectionTitle";
export default function Products() {
  const [brand, setBrandOpen] = React.useState(false);
  const [green, setGreenOpen] = React.useState(false);
  return (
    <div className="container mx-auto max-w-screen-xl products">
      <SectionTitle title={"High-quality products"} />
      {/* wraper */}
      <div className="flex flex-wrap flex-row">
        {/* top brands */}
        <div className="w-full p-4 sm:w-full md:w-1/2 lg:w-1/2">
          <div
            className="mb-8 text-center cursor-pointer sm:cursor-pointer lg:cursor-default md:cursor-default xl:cursor-default"
            onClick={() => setBrandOpen(!brand)}
          >
            <img
              src="/top-brands-icon.png"
              alt="Brands"
              className="w-10 mr-2 inline-block"
            />
            <h3 className="inline-block">Top brands</h3>
            <img
              src="arrow.png"
              className={
                "inline-block w-6 ml-4 sm:inline-block md:hidden lg:hidden " +
                (brand ? "transform rotate-180" : null)
              }
            />
          </div>
          <div
            className={
              "lg:block md:block " +
              (brand ? "block sm:block" : "hidden sm:hidden")
            }
          >
            <img
              src="top-brands.png"
              alt="Top brands"
              className="w-3/4 md:w-full mx-auto mb-6"
            />
          </div>
          <hr className="block sm:block md:hidden lg:hidden" />
        </div>

        {/* green choices */}
        <div className="w-full p-4 sm:w-full md:w-1/2 lg:w-1/2">
          <div
            className="mb-8 text-center cursor-pointer sm:cursor-pointer lg:cursor-default md:cursor-default xl:cursor-default"
            onClick={() => setGreenOpen(!green)}
          >
            <img
              src="/green-choices-icon.png"
              alt="Green choices"
              className="w-10 mr-2 inline-block"
            />
            <h3 className="inline-block">Green choices</h3>
            <img
              src="arrow.png"
              className={
                "inline-block w-6 ml-4 sm:inline-block md:hidden lg:hidden " +
                (green ? "transform rotate-180" : null)
              }
            />
          </div>
          <div
            className={
              "lg:block md:block " +
              (green ? "block sm:block" : "hidden sm:hidden")
            }
          >
            <img
              src="green-choices.png"
              alt="Green choices"
              className="w-3/4 md:w-full mx-auto"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        h3 {
          font-size: 24px;
          line-height: 29px;
          color: #4d4949;
        }
        @media screen and (max-width: 1400px) {
          .products {
            max-width: 90%;
          }
        }
        @media screen and (max-width: 1024px) {
          .products {
            max-width: 86%;
          }
        }
      `}</style>
    </div>
  );
}

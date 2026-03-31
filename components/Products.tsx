import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
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
            <picture>
              <source type="image/webp" srcSet="top-brands-icon.webp" />
              <source type="image/png" srcSet="top-brands-icon.png" />
              <img
                src="/top-brands-icon.png"
                alt="Top brands"
                className="w-10 mr-2 inline-block"
              />
            </picture>
            <h2 className="inline-block">Top brands</h2>
            <picture>
              <source type="image/webp" srcSet="arrow.webp" />
              <source type="image/png" srcSet="arrow.png" />
              <img
                src="arrow.png"
                className={
                  "inline-block w-6 ml-4 sm:inline-block md:hidden lg:hidden " +
                  (brand ? "transform rotate-180" : null)
                }
              />
            </picture>
          </div>
          <div
            className={"lg:block md:block " + (brand ? "block mb-6" : "hidden")}
          >
            <Image
              src="https://res.cloudinary.com/dyj6lkekg/image/upload/tete/top-brands.png"
              alt="Top brands"
              width={604}
              height={426}
              quality={75}
              loading={"eager"}
            />
          </div>
          <hr className="block sm:block md:hidden lg:hidden" />
        </div>

        {/* green choices */}
        <div className="w-full sm:p-4 pt-4 sm:w-full md:w-1/2 lg:w-1/2">
          <div
            className="mb-8 text-center cursor-pointer sm:cursor-pointer lg:cursor-default md:cursor-default xl:cursor-default"
            onClick={() => setGreenOpen(!green)}
          >
            <picture>
              <source type="image/webp" srcSet="green-choices-icon.webp" />
              <source type="image/png" srcSet="green-choices-icon.png" />
              <img
                src="/green-choices-icon.png"
                alt="Green choices"
                className="w-10 mr-2 inline-block"
              />
            </picture>
            <h2 className="inline-block">Green choices</h2>
            <picture>
              <source type="image/webp" srcSet="arrow.webp" />
              <source type="image/png" srcSet="arrow.png" />
              <img
                src="arrow.png"
                alt="Open/Hide arrow"
                className={
                  "inline-block w-6 ml-4 sm:inline-block md:hidden lg:hidden " +
                  (green ? "transform rotate-180" : null)
                }
              />
            </picture>
          </div>
          <div
            className={
              "lg:block md:block " +
              (green ? "block sm:block" : "hidden sm:hidden")
            }
          >
            <Image
              src="https://res.cloudinary.com/dyj6lkekg/image/upload/tete/green-choices.png"
              alt="Green choices"
              width={604}
              height={426}
              quality={75}
              loading={"eager"}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        h2 {
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

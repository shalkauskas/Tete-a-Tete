import SectionTitle from "components/SectionTitle";
import Map from "components/GoogleMap";
import Reviews from "./Reviews";
import Backdrop from "@/components/Backdrop";
export default function Contact() {
  const [openReview, setOpenReview] = React.useState(false);
  return (
    <div className="container mx-auto md:max-w-90">
      <SectionTitle title={"Contact"} />
      {/* contact section grid*/}
      <div className="pt-6 grid grid-row-2 grid-flow-row gap-4 sm:grid-flow-row md:grid-flow-col-row lg:grid-flow-col-dense xl:grid-flow-col md:justify-items-center">
        {/* left side info grid */}
        <div className="map text-left w-screen md:w-full lg:w-full xl:w-full sm:w-3/4 grid grid-row-2 grid-flow-row gap-4 mx-auto">
          {/* location */}
          <div className="grid grid-flow-col grid-cols-5">
            <picture className="w-10 h-10 inline mx-auto">
              <source type="image/webp" srcSet="location.webp" />
              <source type="image/png" srcSet="location.png" />
              <img src="location.png" alt="Location" />
            </picture>
            <div className="col-span-4">
              <p className="inline">
                <b>Tête‑à‑Tête Salon </b>
                <br />
                765 Beacon Street, Newton Centre, MA 02459
              </p>
            </div>
          </div>
          {/* phone */}
          <div className="grid grid-flow-col grid-cols-5">
            <picture className="w-10 mx-auto inline">
              <source type="image/webp" srcSet="phone-contact.webp" />
              <source type="image/png" srcSet="phone-contact.png" />
              <img src="phone-contact.png" alt="Phone" />
            </picture>
            <div className="col-span-4">
              <p className="inline">(617) 559‑0660</p>
            </div>
          </div>
          {/* parking */}
          <div className="grid grid-flow-col grid-cols-5">
            <picture className="w-10 mx-auto inline">
              <source type="image/webp" srcSet="parking.webp" />
              <source type="image/png" srcSet="parking.png" />
              <img src="parking.png" alt="Parking" />
            </picture>
            <div className="col-span-4">
              <p className="inline">
                2 hour metered parking available in front of the salon from
                8am-6pm.
              </p>
            </div>
          </div>
          {/* hours */}
          <div className="grid grid-flow-col grid-cols-5">
            <span></span>
            <div className="col-span-4 leading-relaxed">
              <p className="font-bold">Hours of Operation:</p>
              <p className="pt-3">
                Monday: 9am - 5pm <br />
                Tuesday: 8am ‑ 8pm <br />
                Wednesday: 8am ‑ 5pm <br />
                Thursday: 8am ‑ 8pm <br />
                Friday: 8am ‑ 5pm <br />
                Saturday: 8am ‑ 5pm <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          {/* social media and direction button */}
          <div className="grid grid-flow-col grid-cols-5">
            <span className="md:block hidden"></span>
            <div className="md:col-span-4 col-span-5">
              <picture>
                <source type="image/webp" srcSet="google.webp" />
                <source type="image/png" srcSet="google.png" />
                <img
                  onClick={() => setOpenReview((prevState) => !prevState)}
                  src="google.png"
                  alt="Google rating"
                  className="w-48 mx-auto md:mr-12 mr-5 ml-2 md:ml-0 inline my-4 hover:opacity-75 cursor-pointer"
                />
              </picture>
              <Reviews open={openReview} />
              <Backdrop
                toggle={openReview}
                onClick={() => setOpenReview((prevState) => !prevState)}
                blur={true}
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/teteateteccg/"
                className="contents"
              >
                <picture>
                  <source type="image/webp" srcSet="instagram-contact.webp" />
                  <source type="image/png" srcSet="instagram-contact.png" />
                  <img
                    src="instagram-contact.png"
                    alt="Instagram"
                    className="w-10 h-10 mx-auto inline mr-5 my-auto hover:opacity-75"
                  />
                </picture>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/TeteATeteSalon"
                className="contents"
              >
                <picture>
                  <source type="image/webp" srcSet="facebook.webp" />
                  <source type="image/png" srcSet="facebook.png" />
                  <img
                    src="facebook.png"
                    alt="Facebook"
                    className="w-10 h-10 mx-auto inline my-auto mr-2 hover:opacity-75"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
        {/* map */}
        <div className="w-screen md:w-full map md:max-w-full sm:max-w-3/4 sm:mx-auto text-center sm:max-w-90">
          <Map />
          <a
            className="contents"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/dir//Tete+A+Tete+Salon,+Beacon+Street,+Newton,+MA/@42.3306046,-71.2623209,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89e37882776a3071:0xb80e093582119c54!2m2!1d-71.192109!2d42.330626?hl=en"
          >
            <button className="sm:float-right shadow-lg mr-3 hover:opacity-75">
              Get directions
            </button>
          </a>
        </div>
      </div>
      <style jsx>{`
        button {
          background-color: #4d4949;
          border-radius: 15px;
          padding: 10px 50px;
          color: white;
          font-weight: bold;
          font-size: 16px;
          margin-top: 50px;
        }
        @media screen and (max-width: 500px) {
          .map {
            width: 100vw;
          }
          .contact {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

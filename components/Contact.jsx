import SectionTitle from "components/SectionTitle";
import Map from "components/GoogleMap";
export default function Contact() {
  return (
    <div className="container mx-auto">
      <SectionTitle title={"Contact"} />
      {/* contact section grid*/}
      <div className="pt-6 grid grid-row-2 grid-flow-row gap-4 sm:grid-flow-row md:grid-flow-col-row lg:grid-flow-col-dense xl:grid-flow-col md:justify-items-center">
        {/* left side info grid */}
        <div className="map text-left w-screen md:w-full lg:w-full xl:w-full sm:w-3/4 grid grid-row-2 grid-flow-row gap-4">
          {/* location */}
          <div className="grid grid-flow-col grid-cols-5">
            <img
              src="location.png"
              alt="Location"
              className="w-10 inline mx-auto"
            />
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
            <img
              src="phone-contact.png"
              alt="Phone"
              className="w-10 mx-auto inline"
            />
            <div className="col-span-4">
              <p className="inline">(617) 559‑0660</p>
            </div>
          </div>
          {/* parking */}
          <div className="grid grid-flow-col grid-cols-5">
            <img
              src="parking.png"
              alt="Parking"
              className="w-10 mx-auto inline"
            />
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
          <div className="grid grid-flow-col grid-cols-1">
            <img
              src="google.png"
              alt="Google rating"
              className="w-48 mx-auto mr-16 inline"
            />
            <a
              href="https://www.instagram.com/teteateteccg/"
              className="contents"
            >
              <img
                src="instagram-contact.png"
                alt="Instagram"
                className="w-10 mx-auto inline mr-5 my-auto hover:opacity-75"
              />
            </a>
            <a
              href="https://www.facebook.com/TeteATeteSalon"
              className="contents"
            >
              <img
                src="facebook.png"
                alt="Facebook"
                className="w-10 mx-auto inline my-auto mr-2 hover:opacity-75"
              />
            </a>
          </div>
        </div>
        {/* map */}
        <div className="w-screen md:w-full map md:max-w-full sm:max-w-3/4 sm:mx-auto">
          <Map />
          <a
            className="contents"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/dir//Tete+A+Tete+Salon,+Beacon+Street,+Newton,+MA/@42.3306046,-71.2623209,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89e37882776a3071:0xb80e093582119c54!2m2!1d-71.192109!2d42.330626?hl=en"
          >
            <button className="float-right shadow-lg mr-3 hover:opacity-75">
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

import Image from "next/image";
import Backdrop from "../Backdrop";
import React from "react";
export default function Booking(props) {
  return (
    <div className="justify-center flex fixed z-50 inset-x-0">
      <div className={`absolute sm:w-max z-50 bg-white container top-0 my-24`}>
        <div className="mx-auto">
          <div className="py-4 px-8 border-b-2 relative flex justify-between items-center">
            <h2 className="text-xl font-bold">Booking Policy</h2>
            <span
              className="cursor-pointer text-3xl"
              onClick={() => props.setShowBooking(false)}
            >
              &times;
            </span>
          </div>
          <div className="flex gap-4 flex-col py-6 px-8 content">
            <p className="font-bold">First-Time Clients</p>
            <p>
              Welcome to Tete-a-Tete Cut & Color Group. All first-time visitors,
              please call the salon at{" "}
              <a href="tel:617-559-0660" className="font-bold">
                617-559-0660{" "}
              </a>
              in order for us to properly assess your service needs and provide
              the best possible stylist.
            </p>
            <p className="font-bold">Returning Clients</p>
            <p>Welcome back. Important to remember:</p>
            <ol className="list-decimal	px-6">
              <li>
                Schedule any color/chemical services before a haircut or
                blow-dry.
              </li>
              <li>
                In order to book an appointment for extensions, straightening
                treatments, or permanent wave, we require a credit card on file.
              </li>
            </ol>
            <p className="font-bold">Appointment Cancellations</p>
            <p>
              We require 24 hours advance notice to cancel or reschedule any
              service. Otherwise, you will be charged 100% of the total
              estimated service, and a credit card will be required to book
              future appointments.
            </p>
            <p className="font-bold">Methods of Payment</p>
            <p>
              We accept all major credit cards and cash. Regretfully, gratuity
              cannot be charged to the credit card.
            </p>
            <p className="font-bold">Children</p>
            <p>
              For the safety and comfort of our guests we cannot accommodate
              children without adult supervision.
            </p>
          </div>
          <div className="border-t-2">
            <a
              className="contents "
              target="_blank"
              rel="noopener noreferrer"
              href="https://login.meevo.com/teteatete/ob?locationId=106145"
            >
              <button className="block mx-auto hover:opacity-75 shadow-lg my-3">
                Book Online{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      <Backdrop
        toggle={props.showBooking}
        onClick={() => props.setShowBooking(false)}
        blur={true}
      />
      <style jsx>{`
        button {
          background-color: #895b4a;
          border-radius: 1rem;
          padding: 0.8rem 3rem;
          color: white;
          font-weight: bold;
          font-size: 1rem;
        }
        .content {
          height: 60vh;
          overflow-y: scroll;
        }
      `}</style>
    </div>
  );
}

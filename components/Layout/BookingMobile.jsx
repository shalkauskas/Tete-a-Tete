import Image from "next/image";
import Backdrop from "../Backdrop";
import React from "react";
import Button from "../Button";
export default function BookingMobile(props) {
  return (
    <div
      className="flex justify-center py-2 text-color booking"
      style={{ backgroundColor: "#F0EAE7" }}
    >
      <Button onClick={() => props.onClick(true)}>Book an Appointment</Button>
      <style jsx>{`
        @media screen and (min-width: 1023px) {
          .booking {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

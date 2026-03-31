import Image from "next/image";
import Backdrop from "../Backdrop";
import React from "react";
import Button from "../Button";
export default function BookingMobile(props) {
  return (
    <div
      className={`${
        props.position ? "fixed" : "absolute"
      } flex justify-center py-2 text-color booking inset-x-0 z-10 border-t-2`}
      style={{ bottom: props.position ? 0 : "9.625rem" }}
    >
      <Button onClick={() => props.onClick(true)}>Book an Appointment</Button>
      <style jsx>{`
        .booking {
          background-color: #f0eae7;
        }
        @media screen and (min-width: 1023px) {
          .booking {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

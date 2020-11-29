export default function HandyInfo() {
  return (
    <div
      className="w-1/4 ml-auto slide-query"
      style={{ background: "#F1E9E8", height: "500px" }}
    >
      <div className="max-w-90 mx-auto">
        <h2 className="text-center font-bold text-black mt-8 mb-3">
          Handy info
        </h2>
        {/* Blowdry */}
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <img
            src="blowdry.png"
            alt="Schedule blowdry"
            className="w-10 mx-auto inline"
          />
          <div className="col-span-4">
            <p className="inline">
              Schedule blowdry along with your color appoitment.
            </p>
          </div>
        </div>
        {/* Kids */}
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <img src="baby.png" alt="Children" className="w-8 mx-auto inline" />
          <div className="col-span-4">
            <p className="inline">
              Kids must be under adult supervision at all times.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <img
            src="phone-contact.png"
            alt="Contact"
            className="w-8 mx-auto inline my-auto"
          />
          {/* Contact */}
          <div className="col-span-4">
            <p className="inline">
              To schedule, change or cancel your appointmet please call us at
              617-559-0660.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <img
            src="schedule.png"
            alt="Schedule"
            className="w-8 mx-auto inline my-auto"
          />
          {/* Cancellations */}
          <div className="col-span-4">
            <p className="inline">
              Cancellations less than 24 hours in advance may result in a fee.
            </p>
          </div>
        </div>
        {/* Payment */}
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <img
            src="payment.png"
            alt="Payment"
            className="w-10 mx-auto inline"
          />
          <div className="col-span-4">
            <p className="inline">
              Visa, Mastercard and Сash are accepted payment methods.
              <br />
              (regretfully gratuity cannot be charged to the credit card).
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        p {
          font-size: 15px;
          color: black;
        }
        @media (max-width: 1428px) {
          .slide-query {
            margin-right: auto;
            width: auto;
          }
        }
      `}</style>
    </div>
  );
}

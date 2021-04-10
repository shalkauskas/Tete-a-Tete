export default function HandyInfo() {
  return (
    <div
      className="w-1/4 ml-auto slide-query"
      style={{ background: "#F1E9E8" }}
    >
      <div className="max-w-90 mx-auto">
        <h2 className="text-center font-bold text-black mt-10 mb-8">
          Handy info
        </h2>
        {/* Blowdry */}
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-10 h-10 mx-auto inline">
            <source type="image/webp" srcSet="blowdry.webp" />
            <source type="image/png" srcSet="blowdry.png" />
            <img src="blowdry.png" alt="Schedule blowdry" />
          </picture>
          <div className="col-span-4">
            <p className="inline">
              Schedule blowdry along with your color appoitment.
            </p>
          </div>
        </div>
        {/* Kids */}
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-8 h-8 mx-auto inline">
            <source type="image/webp" srcSet="baby.webp" />
            <source type="image/png" srcSet="baby.png" />
            <img src="baby.png" alt="Children" />
          </picture>
          <div className="col-span-4">
            <p className="inline">
              Kids must be under adult supervision at all times.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-8 h-8 mx-auto inline my-auto">
            <source type="image/webp" srcSet="phone-contact.webp" />
            <source type="image/png" srcSet="phone-contact.png" />
            <img src="phone-contact.png" alt="Contact" />
          </picture>
          {/* Contact */}
          <div className="col-span-4">
            <p className="inline">
              To schedule, change or cancel your appointmet please call us at
              617-559-0660.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-8 mx-auto inline my-auto">
            <source type="image/webp" srcSet="schedule.webp" />
            <source type="image/png" srcSet="schedule.png" />
            <img src="schedule.png" alt="Schedule" />
          </picture>
          {/* Cancellations */}
          <div className="col-span-4">
            <p className="inline">
              Cancellations less than 24 hours in advance may result in a fee.
            </p>
          </div>
        </div>
        {/* Payment */}
        <div className="grid grid-flow-col grid-cols-5 mb-5 leading-snug">
          <picture className="w-10 h-10 mx-auto inline">
            <source type="image/webp" srcSet="payment.webp" />
            <source type="image/png" srcSet="payment.png" />
            <img src="payment.png" alt="Payment" />
          </picture>
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
        .slide-query {
          height: 600px;
        }
        @media (max-width: 1521px) {
          .slide-query {
            margin-right: auto;
            width: auto;
            height: auto;
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

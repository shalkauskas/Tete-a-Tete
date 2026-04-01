export default function ServiceMenuItem(props) {
  return (
    <div
      className="relative rounded shadow-lg service-box flex justify-center"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dyj6lkekg/image/upload/tete/${props.background}.png)`,
      }}
    >
      <p className="absolute background-box px-10 py-2.5">{props.service}</p>
      <style jsx>{`
        .background-box {
          background: rgba(255, 255, 255);
          box-decoration-break: clone;
          bottom: 0;
          justify-content: center;
          border: 1px solid #c4c4c4;
          box-sizing: border-box;
          font-size: 1.5rem;
          line-height: 29px;
          color: #4c4949;
        }
        .service-box {
          width: 36.875rem;
          height: 27.25rem;
          background-size: cover;
        }
        @media screen and (max-width: 550px) {
          .service-box {
            width: 100vw;
          }
        }
      `}</style>
    </div>
  );
}

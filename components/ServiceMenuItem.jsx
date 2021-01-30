export default function ServiceMenuItem(props) {
  return (
    <div
      className="relative rounded shadow-lg service-box"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dyj6lkekg/image/upload/tete/${props.background}.png)`,
      }}
    >
      <p className="absolute background-box">{props.service}</p>
      <style jsx>{`
        .background-box {
          background: rgba(255, 255, 255);
          box-decoration-break: clone;
          padding: 10px 40px;
          margin: auto;
          bottom: 0;
          left: 200px;
          border: 1px solid #c4c4c4;
          box-sizing: border-box;
          font-size: 24px;
          line-height: 29px;
          color: #4c4949;
        }
        .service-box {
          width: 547px;
          height: 404px;
          background-size: cover;
        }
        @media screen and (max-width: 550px) {
          .service-box {
            width: 100vw;
          }
          .background-box {
            left: 120px;
          }
        }
      `}</style>
    </div>
  );
}

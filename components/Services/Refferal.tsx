export default function Refferal(props) {
  return (
    <div>
      <p
        style={{ left: "54%" }}
        className={`font-bold text-black pt-6 pb-6 ${
          props.mobile ? "text-center" : "absolute bottom-0"
        }`}
      >
        Refer a friend and get $15 gift certificate!
      </p>
    </div>
  );
}

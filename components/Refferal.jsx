export default function Refferal(props) {
  return (
    <p
      className={`font-bold text-black pt-6 pb-6 ${
        props.mobile ? "text-center" : ""
      }`}
    >
      Refer a friend and get $15 gift certificate!
    </p>
  );
}

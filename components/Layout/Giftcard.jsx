export default function Giftcard(props) {
  return (
    <div
      className={`${props.position ? "fixed" : "absolute"} bg-white rounded-xl`}
    >
      <a href="https://swipeit.com/product/1218/tete-a-tete">
        <picture>
          <source type="image/webp" srcSet="giftcard.webp" />
          <source type="image/png" srcSet="giftcard.png" />
          <img
            src="giftcard.png"
            className="w-10 hidden lg:block hover:opacity-75"
            alt="Gift cards"
          />
        </picture>
      </a>

      <style jsx>{`
        div {
          top: 300px;
          right: 0px;
        }
      `}</style>
    </div>
  );
}

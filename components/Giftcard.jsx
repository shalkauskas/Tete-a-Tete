export default function Giftcard() {
  return (
    <div>
      <a href="https://swipeit.com/product/1218/tete-a-tete">
        <img
          src="giftcard.png"
          className="fixed w-10 hidden lg:block hover:opacity-75"
        />
      </a>

      <style jsx>{`
        img {
          top: 400px;
          right: 0px;
        }
      `}</style>
    </div>
  );
}

export default function Phone() {
  return (
    <div
      className="flex justify-center py-2"
      style={{ backgroundColor: "#DACCBA", color: "#4D4949" }}
    >
      <picture>
        <source type="image/webp" srcSet="phone.webp" />
        <source type="image/png" srcSet="phone.png" />
        <img src="/phone.png" alt="Phone" className="w-6 h-6 mr-2" />
      </picture>
      <a href="tel:617-559-0660">
        <span className="font-bold">Call us</span> 617-559-0660
      </a>
    </div>
  );
}

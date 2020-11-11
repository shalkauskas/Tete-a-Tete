export default function CovidPolicy() {
  return (
    <div
      className="flex justify-center py-2 text-color"
      style={{ backgroundColor: "#F0EAE7" }}
    >
      <img src="/bell.png" alt="Policy" className="w-5 mr-2" />
      <span className="font-bold">Covid-19 policy</span>
      <a
        href=""
        className="ml-3 underline font-light italic"
        style={{ fontSize: "16px", lineHeight: "27px" }}
      >
        learn more
      </a>
    </div>
  );
}

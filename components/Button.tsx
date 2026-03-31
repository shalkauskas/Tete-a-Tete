export default function Button(props) {
  return (
    <>
      <button
        onClick={() => props.onClick()}
        type={props.type}
        className={`block hover:opacity-75 shadow-lg px-10 py-2 ${props.className}`}
      >
        {props.children}
      </button>
      <style jsx>{`
        button {
          background-color: #895b4a;
          border-radius: 1rem;
          color: white;
          font-weight: bold;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}

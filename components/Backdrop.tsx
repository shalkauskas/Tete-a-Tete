export default function Backdrop(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "1000%",
        height: "100vh",
        minHeight: "100%",
        zIndex: "10",
        display: props.toggle ? "block" : "none",
        background: props.blur ? "rgba(0, 0, 0, 0.3)" : "",
        backdropFilter: props.blur ? "blur(5px)" : "",
      }}
      onClick={props.onClick}
    />
  );
}

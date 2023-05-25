export default function mainThread({ threadId, pilot }) {
  const boxStyle = {
    border: "grey solid 2px",
    borderRadius: "10px",
    padding: "5px",
  };

  return <div style={boxStyle}>{pilot}</div>;
}

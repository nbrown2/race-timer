//Setting up for Contestant to be used in other functions
function Contestant(props) {
  return (
    <div
      style={{
        position: "relative",
        left: props.xpos,
        top: props.ypos,
        width: "800px",
        height: "10px",
      }}
    >
      {props.name}
    </div>
  );
}

export default Contestant;

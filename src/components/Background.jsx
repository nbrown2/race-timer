//Setting up for Background to be used in other functions
function Background(props) {
  return (
    <div
      style={{
        backgroundColor: "#eaeaea",
        maxWidth: "1200px",
        height: "1000px",
        padding: "10px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Background;

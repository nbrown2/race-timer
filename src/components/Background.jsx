function Background(props) {
  return (
    <div
      style={{
        backgroundColor: '#eaeaea',
        maxWidth: '1200px',
        height: '1000px',
        padding: '10px',
      }}
    >
      {props.children}
    </div>
  );
}

export default Background;

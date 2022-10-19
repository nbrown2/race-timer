function Configuration(props) {
  return (
    <form>
      <label>Length of Timer:</label>
      <input type="text" value={length} onChange={setLength} />
      <br />
      <label>Number of Contestants:</label>
      <input type="number" value={numPlayers} onChange={setNumContestants} />
    </form>
  );
}
export default Configuration;

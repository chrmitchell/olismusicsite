const style: React.CSSProperties = {
  backgroundColor: "#E5D2C0",
  color: "black",
  fontSize: "1rem",
  padding: "1rem 1.75rem",
  textTransform: "uppercase",
  borderRadius: "3rem",
  marginTop: "1rem",
  transition: "color .3s",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
};

const ListenOnSpotifyButton = () => (
  <div style={style}>
    <div>L</div>
    <div>Listen on Spotify</div>
    <div>&lt;</div>
  </div>
);

export default ListenOnSpotifyButton;

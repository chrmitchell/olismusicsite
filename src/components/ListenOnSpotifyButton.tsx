import "./ListenOnSpotifyButton.scss";
import RightArrow from "./RightArrow";
import SpotifyLogo from "./platform-logos/SpotifyLogo";

const ListenOnSpotifyButton = () => (
  <div className="button">
    <SpotifyLogo />
    <div>Listen on Spotify</div>
    <div>
      <RightArrow />
    </div>
  </div>
);

export default ListenOnSpotifyButton;

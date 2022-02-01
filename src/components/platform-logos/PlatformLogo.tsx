import urls from "../../urls";
import InstagramLogo from "./InstagramLogo";
import SpotifyLogo from "./SpotifyLogo";
import YouTubeLogo from "./YouTubeLogo";

const PlatformLogo = ({
  size = 1.75,
  platform,
}: {
  platform: keyof typeof urls.olis.social;
  size?: number;
}) => {
  if (platform === "spotify")
    return <SpotifyLogo size={`${size}rem`} vNudge={2} />;
  else if (platform === "youtube")
    return <YouTubeLogo size={`${size}rem`} vNudge={2} />;
  else if (platform === "instagram")
    return <InstagramLogo size={`${size * 1.15}rem`} vNudge={2} />;
  else throw new Error(`unsupported platform logo ${platform}`);
};

export default PlatformLogo;

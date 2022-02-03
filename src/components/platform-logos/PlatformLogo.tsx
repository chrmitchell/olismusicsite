import InstagramLogo from "./InstagramLogo";
import SpotifyLogo from "./SpotifyLogo";
import YouTubeLogo from "./YouTubeLogo";
import FacebookLogo from "./FacebookLogo";
import { TPlatform } from "../../types/TPlatform";

const PlatformLogo = ({
  size = 1.75,
  platform,
}: {
  platform: TPlatform;
  size?: number;
}) => {
  if (platform === "Spotify")
    return <SpotifyLogo size={`${size}rem`} vNudge={0} />;
  else if (platform === "YouTube")
    return <YouTubeLogo size={`${size}rem`} vNudge={0} />;
  else if (platform === "Instagram")
    return <InstagramLogo size={`${size * 1.15}rem`} vNudge={0} />;
  else if (platform === "Facebook")
    return <FacebookLogo size={size * 0.92} variation={1} vNudge={0} />;
  else throw new Error(`unsupported platform logo ${platform}`);
};

export default PlatformLogo;

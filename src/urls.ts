import { TPlatform } from "./types/TPlatform";
import { TSongId } from "./types/TSong";

const songUrls: Record<TSongId, { spotify: string }> = {
  radHeroineBallet: {
    spotify:
      "https://open.spotify.com/track/2qYK9RccG9DsBQgEl5tkdy?si=070acbfefe1340ff",
  },
  tinyStreetFeels: {
    spotify:
      "https://open.spotify.com/track/1iXCvX12YqM9LbNBwytQy3?si=aa3cb6ddd6bb4107",
  },
};

const socialUrls: Record<TPlatform, string> = {
  Instagram: "https://www.instagram.com/olis.music/",
  Spotify: songUrls.radHeroineBallet.spotify,
  YouTube:
    "https://www.youtube.com/watch?v=PqrBwgQHWCk&list=PLN3CphWGoGqG9F6Ork2DTLTMHCvtyjtsd",
  // appleMusic: "https://music.apple.com/us/artist/olis/1592365013",
  // soundCloud: "https://soundcloud.com/olismusic?id=1502701",
  // pandora: "https://www.pandora.com/artist/olis/ARb4d5VfXnvpmZc",
  Facebook: "https://www.facebook.com/Olisforears",
  Soundcloud: "https://soundcloud.com/olismusic/sets/brightsome-1",
  Bandcamp: "https://olis.bandcamp.com/",
};

const URLs = {
  brightsome: {
    // spotify:
    // "https://open.spotify.com/album/5p1jaTHTdPAs2GBZP4OQ4Y?si=yzJzR1OxSA6gFUaDYTyutw",
    // spotifyDistrokid:
    // "https://open.spotify.com/album/5p1jaTHTdPAs2GBZP4OQ4Y?referral=labelaffiliate&utm_source=1011liP4oE3g&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate",
    // spotifyURI: "spotify:album:5p1jaTHTdPAs2GBZP4OQ4Y",
    youTubePlaylist:
      "https://www.youtube.com/watch?v=PqrBwgQHWCk&list=PLN3CphWGoGqG9F6Ork2DTLTMHCvtyjtsd",
  },
  songs: songUrls,
  olis: {
    social: socialUrls,
  },
};

export default URLs;

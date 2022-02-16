import { TSongId } from "./../types/TSong";
import URLs from "../urls";

const getSongIdFromSpotifyUrl = (songLink: string) => {
  const ids = Object.keys(URLs.songs) as TSongId[];
  return ids.find((songId) => URLs.songs[songId].spotify === songLink);
};

export default getSongIdFromSpotifyUrl;

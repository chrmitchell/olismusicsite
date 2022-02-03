import URLs from "../urls";

const getSongNameFromSpotifyUrl = (songLink: string) => {
  const foundKey = Object.keys(URLs.brightsome).find((key) => {
    // @ts-ignore
    return URLs.brightsome[key] === songLink;
  });
  return foundKey?.replace("Spotify", "");
};

export default getSongNameFromSpotifyUrl;

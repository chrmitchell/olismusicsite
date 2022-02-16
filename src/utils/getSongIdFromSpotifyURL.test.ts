import { TSongId } from "./../types/TSong";
import URLs from "../urls";
import f from "./getSongIdFromSpotifyURL";

const runIt = (url: string, resultId: TSongId | undefined) => {
  expect(f(url)).toBe(resultId);
};

it("should return a camel-cased songId when passed the spotify url for that song", () => {
  runIt(URLs.songs.radHeroineBallet.spotify, TSongId.radHeroineBallet);
  runIt(URLs.songs.tinyStreetFeels.spotify, TSongId.tinyStreetFeels);
});

it("should return undefined when a match is not found for the url", () => {
  runIt("some wrong url", undefined);
});

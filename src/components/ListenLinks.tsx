import { useCallback } from "react";
import analytics from "../analytics";
import URLs from "../urls";

const links = [
  { displayName: "Spotify", url: URLs.brightsome.radHeroineSpotify },
];

const ListenLinks = () => {
  return (
    <div>
      {links.map((link) => (
        <a
          key={link.displayName}
          href={link.url}
          style={{
            display: "flex",
            backgroundColor: "black",
            padding: "0.5rem",
            color: "white",
            justifyContent: "space-between",
          }}
        >
          <div>{link.displayName}</div>
          <div>Listen</div>
        </a>
      ))}
    </div>
  );
};

export default ListenLinks;

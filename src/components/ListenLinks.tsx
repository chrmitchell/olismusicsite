import { useCallback } from "react";
import analytics from "../analytics";
import URLs from "../urls";

const links = [{ displayName: "Spotify", url: URLs.brightsome.spotify }];

const ListenLinks = () => {
  const trackClick = useCallback((contentName: string) => {
    analytics.logEvent(`clicked-${contentName}`, {
      category: "listen-link",
      label: contentName,
    });
    fbq("track", "ViewContent", { content_name: contentName });
  }, []);

  return (
    <div>
      {links.map((link) => (
        <a
          key={link.displayName}
          onClick={() => trackClick(link.displayName)}
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

const YouTubeLogo = ({
  size = "1rem",
  vNudge = 3,
}: {
  size?: string;
  vNudge?: number;
}) => (
  <svg
    viewBox="0 0 24 24"
    style={{
      fill: "currentcolor",
      width: size,
      height: size,
      opacity: "1",
      position: "relative",
      top: vNudge,
    }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.124 4.617c1.127.256 2.097 1.075 2.301 2.2.718 3.591.679 7.13.104 10.737-.206 1.177-1.177 1.944-2.301 2.2-4.808 1.092-12.069 1-16.467 0-1.124-.256-2.095-1.075-2.3-2.2-.699-3.49-.614-7.235-.05-10.738.203-1.176 1.176-1.943 2.3-2.199 4.448-1.01 11.71-1.068 16.413 0zm-4.704 7.568-6.238-3.58v7.16l6.238-3.58z"
    ></path>
  </svg>
);

export default YouTubeLogo;

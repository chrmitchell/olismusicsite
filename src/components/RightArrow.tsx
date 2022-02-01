const RightArrow = ({
  vNudge = 0,
  size = 1.4,
}: {
  vNudge?: number;
  size?: number;
}) => (
  <svg
    viewBox="0 0 24 24"
    style={{
      fill: "currentcolor",
      transform: "rotate(90deg)",
      color: "currentcolor",
      width: `${size}rem`,
      height: `${size}rem`,
      position: "relative",
      top: vNudge,
    }}
  >
    <path d="M19.5 16 12 9l-7.5 7-1-1L12 7l8.5 8-1 1z"></path>
  </svg>
);

export default RightArrow;

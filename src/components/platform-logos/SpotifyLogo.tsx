const SpotifyLogo = ({
  size = "1.5rem",
  vNudge = 2,
}: {
  size?: string;
  vNudge?: number;
}) => (
  <svg
    className="serviceIcon jsx-3696517491"
    viewBox="0 0 24 24"
    style={{
      fill: "currentcolor",
      width: size,
      height: size,
      opacity: "1",
      position: "relative",
      top: `${vNudge}px`,
    }}
  >
    <path
      fillRule="evenodd"
      d="M2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10S2 17.514 2 12zm13.479 4.36c.64.518 1.521-.604.64-1.12-2.79-1.635-6.117-1.718-9.197-1-.722.1-.663 1.239.08 1.239 2.998-.479 5.584-.856 8.477.88zm1.066-2.486C12.982 12.028 10.5 12 6.802 12.8c-.93 0-.988-1.313-.16-1.56 3.524-.917 7.46-.653 10.636 1.24.722.52.36 1.826-.733 1.394zm1.094-2.994c.996.752 1.964-.998.918-1.6-3.542-2.099-8.586-2.394-12.515-1.238-.973.32-.542 1.958.24 1.838 4.118-1.012 7.983-1.038 11.357 1z"
    ></path>
  </svg>
);

export default SpotifyLogo;

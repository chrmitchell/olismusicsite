const BandcampLogo = ({ size }: { size: number }) => (
  <svg
    viewBox="0 0 24 24"
    style={{
      fill: "currentcolor",
      width: `${size}rem`,
      height: `${size}rem`,
      opacity: "1",
    }}
  >
    <path d="M12 2C6.476 2 2 6.476 2 12s4.476 10 10 10 10-4.476 10-10S17.524 2 12 2zm1.944 13.15H6.644l3.415-6.295h7.299l-3.416 6.294z"></path>
  </svg>
);

export default BandcampLogo;

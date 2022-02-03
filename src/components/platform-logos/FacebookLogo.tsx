const FacebookLogo = ({
  size = 1,
  variation = 1,
  vNudge = 2,
}: {
  size?: number;
  variation?: 1 | 2;
  vNudge?: number;
}) => {
  if (variation === 1) {
    return (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          fill: "white",
          width: `${size}rem`,
          height: `${size}rem`,
          opacity: 1,
          position: "relative",
          top: `${vNudge}px`,
        }}
      >
        <path
          fill="currentColor"
          d="M30 16.0856C30 8.30633 23.732 2 16 2C8.26801 2 2 8.30633 2 16.0856C2 23.1161 7.1196 28.9434 13.8125 30V20.1572H10.2578V16.0856H13.8125V12.9824C13.8125 9.45216 15.9026 7.50219 19.1005 7.50219C20.6322 7.50219 22.2344 7.7773 22.2344 7.7773V11.2437H20.469C18.7299 11.2437 18.1875 12.3294 18.1875 13.4434V16.0856H22.0703L21.4496 20.1572H18.1875V30C24.8804 28.9434 30 23.1161 30 16.0856Z"
        ></path>
      </svg>
    );
  } else {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        enable-background="new 0 0 1000 1000"
        xmlSpace="preserve"
        style={{
          fill: "white",
          width: `${size * 0.9}rem`,
          height: `${size * 0.9}rem`,
          opacity: 1,
          position: "relative",
          top: `${vNudge}px`,
        }}
      >
        <g>
          <path d="M425,355.4v95.1h-76.1v114H425v266.2H539V564.6h114.1v-114H539.1v-76.1c0-22.8,15.2-38,38-38h76.1V222.4H558C485.8,222.4,425,283.2,425,355.4L425,355.4z" />
          <path d="M500,10C230.5,10,10,230.5,10,500c0,269.4,220.5,490,490,490c269.5,0,490-220.5,490-490C990,230.5,769.5,10,500,10z M500,949.2C252.9,949.2,50.8,747,50.8,500C50.8,253,252.9,50.8,500,50.8S949.2,253,949.2,500C949.2,747,747.1,949.2,500,949.2z" />
        </g>
      </svg>
    );
  }
};

export default FacebookLogo;

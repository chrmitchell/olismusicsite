const SoundcloudLogo = ({ size }: { size: number }) => (
  <svg
    viewBox="0 0 24 24"
    style={{
      fill: "currentcolor",
      width: `${size}rem`,
      height: `${size}rem`,
      opacity: "1",
    }}
  >
    <path d="M10.08 7.344c2.793-4.216 9.187-2.149 9.6 2.75C25 9.5 25.51 17.5 20.4 17.5H10.08V7.344zm-2.88.25c.289-.051.624-.094.96-.094v10H7.2V7.594zM8.64 7.5v10h.96V7.75c-.289-.1-.624-.2-.96-.25zm-2.88.75c.289-.2.624-.35.96-.5v9.75h-.96V8.25zm-.48.406a4.26 4.26 0 0 0-.96 1.297V17.5h.96V8.656zm-2.4 1.89c.283-.1.683-.097.96 0V17.5c-.303 0-.67.055-.96-.047v-6.906zm-.48.11c-.336.1-.671.25-.96.5v5.688c.289.199.624.4.96.5v-6.688zM.96 16.453v-4.906a3.676 3.676 0 0 0 0 4.906z"></path>
  </svg>
);

export default SoundcloudLogo;

const CurvedLine = ({ id }) => (
  <svg
    id={id}
    xmlns="http://www.w3.org/2000/svg"
    width={349}
    height={52}
    fill="none"
  >
    <path
      class="path-anim"
      stroke="#646464"
      strokeWidth={3}
      d="M0 2C0 2 128 2 173.5 2C219 2 347 2 347 2"
      data-path-to="M 1 2 C 1 2 108 38 174.5 36.5 C 240 37 348 2 348 2"
    />
  </svg>
);
export default CurvedLine;

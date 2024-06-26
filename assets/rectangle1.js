const Rectangle1 = ({ imgSrc, customStlyes, id, ...props }) => {
  const scaleX = 1 / 393;
  const scaleY = 1 / 796;
  return (
    <svg
      id={id}
      className={`relative m-auto ${customStlyes}`}
      width="100%"
      height="80vh"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <clipPath id="shape1" clipPathUnits="objectBoundingBox">
          <path
            class="path-anim"
            d="M 0 8 C 174 8 213 8 393 8 V 758 C 288 758 215 758 0 758 V 8 Z"
            data-path-to="M0 7.99999C154 198 215.5 -43 393 7.99999V758C292.395 804.751 214.814 812.237 0 758V7.99999Z"
            transform={`scale(${scaleX}, ${scaleY})`}
          />
        </clipPath>
      </defs>
      <image
        clip-path="url(#shape1)"
        href={imgSrc}
        x="0"
        y="0"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
};

export default Rectangle1;

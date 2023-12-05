const Rectangle1 = ({
  imgSrc,
  dimX,
  dimY,
  path,
  destPathTo,
  customStlyes,
  id,
  ...props
}) => {
  const scaleX = 1 / dimX;
  const scaleY = 1 / dimY;
  const clipPathId = `clipPath${id}`;
  return (
    <svg
      id={id}
      className={`relative m-auto ${customStlyes}`}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
          <path
            class="path-anim"
            d={path}
            data-path-to={destPathTo}
            transform={`scale(${scaleX}, ${scaleY})`}
            fill="#707070"
          />
        </clipPath>
      </defs>
      <image
        clip-path={`url(#${clipPathId})`}
        href={imgSrc}
        x="0"
        y="0"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMin slice"
      />
    </svg>
  );
};

export default Rectangle1;

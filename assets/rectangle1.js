const Rectangle1 = ({ imgSrc, customStlyes, id, ...props }) => {
  return (
    <svg
      id={id}
      className={`relative m-auto ${customStlyes}`}
      width="100%"
      height="80vh"
      viewBox="0 0 393 796"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <defs>
        <clipPath id="shape1">
          <path
            class="path-anim"
            d="M 0 8 C 174 8 213 8 393 8 V 758 C 288 758 215 758 0 758 V 8 Z"
            data-path-to="M 0 8 C 142 513 299 -188 393 8 V 758 C 307 873 224 942 0 758 V 8 Z"
            fill="#D9D9D9"
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

// translate(${translateX} -${translateY})

const SquiggleLinesGroup = ({ id, width, paths }) => (
  <svg id={id} width={width} height="100%" fill="none">
    <g transform={`scale(${Math.max(width / 908, 1)}, 1)`}>
      {paths.map((pathObj, index) => (
        <path
          key={index}
          class={`path-anim-${index}`}
          stroke="#646464"
          strokeWidth={3}
          vector-effect="non-scaling-stroke"
          data-path-to={pathObj.dTo}
          d={pathObj.d}
        />
      ))}
    </g>
  </svg>
);

export default SquiggleLinesGroup;

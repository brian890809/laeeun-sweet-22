import Image from 'next/image';

import { PicturePageBase } from '@/components/PicturePageBase';

// import styles from './rectanble1.css';

const Rectangle1 = ({ imgSrc, customStlyes, id, ...props }) => {
  const { innerWidth: vWidth, innerHeight: vHeight } = window;
  const scaleX = vWidth / 393;
  const scaleY = (vHeight * 0.8) / 796;

  return (
    <svg
      id={id}
      className="relative m-auto"
      width="393"
      height="850"
      viewBox="0 0 393 796"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`scale(${scaleX} ${scaleY}) `}
    >
      <path
        class="path-anim"
        d="M 0 8 C 174 8 213 8 393 8 V 758 C 288 758 215 758 0 758 V 8 Z"
        data-path-to="M 0 8 C 142 513 299 -188 393 8 V 758 C 307 873 224 942 0 758 V 8 Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};

export default Rectangle1;

// translate(${translateX} -${translateY})

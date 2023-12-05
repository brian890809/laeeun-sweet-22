import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import { RectangleMorphSvg } from '@/assets';

import { destPathTo, imageSource, path } from './content';

const PicturePage2 = () => {
  const rectangleRef2 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = rectangleRef2.current;
    const rectangle2 = element.querySelector('#rectangle2');
    const path = element.querySelector('path.path-anim');
    const destPath = path.dataset.pathTo;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: rectangle2,
          start: 'top 90%',
          end: 'bottom 95%',
          scrub: 1,
        },
      })
      .to(path, {
        ease: 'none',
        attr: { d: destPath },
      });
  });
  return (
    <div
      className="bg-dark-cream h-screen flex justify-center"
      ref={rectangleRef2}
    >
      <div className="w-[11/12] max-w-screen-sm h-[95%]">
        <RectangleMorphSvg
          dimX="341"
          dimY="750"
          imgSrc={imageSource}
          path={path}
          destPathTo={destPathTo}
          id="rectangle2"
        />
      </div>
    </div>
  );
};

export default PicturePage2;

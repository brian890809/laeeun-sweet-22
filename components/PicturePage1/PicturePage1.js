import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import { Rectangle1 } from '@/assets';

import { imageSource } from './content';

const PicturePage1 = () => {
  const rectangleRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = rectangleRef.current;
    const rectangle = element.querySelector('#rectangle1');
    const path = element.querySelector('path.path-anim');
    const destPath = path.dataset.pathTo;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: rectangle,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: true,
        },
      })
      .to(path, {
        ease: 'none',
        attr: { d: destPath },
      });
  });

  return (
    <div className="bg-dark-cream relative h-[80vh]" ref={rectangleRef}>
      <Rectangle1 imgSrc={imageSource} id="rectangle1" />
    </div>
  );
};

export default PicturePage1;

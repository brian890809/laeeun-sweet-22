import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import { Rectangle1 } from '@/assets';

import { PicturePageBase } from '../PicturePageBase';
import { imageSource } from './content';

const PicturePage1 = () => {
  const rectangleRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = rectangleRef.current;
    const line = element.querySelector('#reactangle');
    const path = element.querySelector('path.path-anim');
    const destPath = path.dataset.pathTo;
    console.log(destPath);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: line,
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
    <>
      <PicturePageBase imgSrc={imageSource} customStyles="h-[80vh]" />
      <div className="bg-dark-cream relative h-[80vh]" ref={rectangleRef}>
        <Rectangle1 imgSrc={imageSource} id="rectangle" />
      </div>
    </>
  );
};
// {
//   return <PicturePageBase imgSrc={imageSource} customStyles="h-[80vh]" />;
// };

export default PicturePage1;

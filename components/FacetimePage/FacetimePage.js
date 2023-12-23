import { useWindowSize } from '@studio-freight/hamo';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import { SquiggleLinesGroup } from '@/assets';

import * as content from './content';
const FacetimePage = () => {
  const { width: windowWidth } = useWindowSize();

  const groupRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = groupRef.current;
    const line = element.querySelector('#group');
    const path0 = element.querySelector('path.path-anim-0');
    const path1 = element.querySelector('path.path-anim-1');
    const path2 = element.querySelector('path.path-anim-2');
    const path3 = element.querySelector('path.path-anim-3');
    const destPath0 = path0.dataset.pathTo;
    const destPath1 = path1.dataset.pathTo;
    const destPath2 = path2.dataset.pathTo;
    const destPath3 = path3.dataset.pathTo;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: line,
          start: 'top 95%',
          end: 'bottom center',
          scrub: true,
        },
      })
      .to(path0, {
        ease: 'none',
        attr: { d: destPath0 },
      })
      .to(path1, {
        ease: 'none',
        attr: { d: destPath1 },
      })
      .to(path2, {
        ease: 'none',
        attr: { d: destPath2 },
      })
      .to(path3, {
        ease: 'none',
        attr: { d: destPath3 },
      });
  });
  return (
    <div className="bg-dark-cream h-screen flex flex-col">
      <div className="text-center text-lg leading-10 text-gray-dark mx-auto mt-[35vh]">
        {content.ofc}
      </div>
      <div className="mt-5">
        {content.contentList.map((content, i) => (
          <div key={i} className="text-center text-lg text-gray-dark mx-auto">
            {content}
          </div>
        ))}
      </div>
      <div ref={groupRef} className="pt-16 h-[400px]">
        <SquiggleLinesGroup
          paths={content.paths}
          id="group"
          width={windowWidth}
        />
      </div>
    </div>
  );
};

export default FacetimePage;

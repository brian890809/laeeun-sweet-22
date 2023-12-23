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
    const path = element.querySelector('path.path-anim');
    const destPath = path.dataset.pathTo;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: line,
          start: 'top 95%',
          end: 'bottom center',
          scrub: true,
        },
      })
      .to(path, {
        ease: 'none',
        attr: { d: destPath },
      });
  });
  return (
    <div className="bg-dark-cream h-[95vh] flex flex-col">
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
      <div ref={groupRef} className="pt-8 h-[330px]">
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

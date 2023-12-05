import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import { RectangleMorphSvg } from '@/assets';

import * as content from './content';

const TwoPicPage = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = topRef.current;
    const rectangle3 = element.querySelector('#rectangle3');
    const path = element.querySelector('path.path-anim');
    const destPath = path.dataset.pathTo;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: rectangle3,
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
  useEffect(() => {
    const element = bottomRef.current;
    const rectangle4 = element.querySelector('#rectangle4');
    const path = element.querySelector('path.path-anim');
    const destPath = path.dataset.pathTo;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: rectangle4,
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
    <div className="bg-dark-cream h-screen relative">
      <div className="text-center text-lg text-off-white absolute translate-x-[-50%] left-2/4 top-[35vh] z-10 bg-neutral-500/30">
        {content.title}
      </div>
      <div
        className="h-[30vh] max-w-xs sm:max-w-xs m-auto relative top-[10vh]"
        ref={topRef}
      >
        <RectangleMorphSvg
          dimX="349"
          dimY="312"
          imgSrc={content.topPic}
          path={content.topPicPath}
          destPathTo={content.topPicPathTo}
          id="rectangle3"
        />
      </div>
      <div
        className="h-[40vh] max-w-xs sm:max-w-xs m-auto relative top-[20vh]"
        ref={bottomRef}
      >
        <RectangleMorphSvg
          dimX="278"
          dimY="345"
          imgSrc={content.bottomPic}
          path={content.bottomPicPath}
          destPathTo={content.bottomPicPathTo}
          id="rectangle4"
        />
      </div>
    </div>
  );
};

export default TwoPicPage;

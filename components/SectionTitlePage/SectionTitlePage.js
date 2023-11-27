import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import { CurvedLine } from '@/assets';

import { title } from './content';

const SectionTitlePage = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = firstRef.current;
    const line = element.querySelector('#first');
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
  useEffect(() => {
    const element = secondRef.current;
    const line = element.querySelector('#second');
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
  useEffect(() => {
    const element = thirdRef.current;
    const line = element.querySelector('#third');
    const path = element.querySelector('path.path-anim');
    const destPath = path.dataset.pathTo;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: line,
          start: 'top 95%',
          end: 'bottom 40%',
          scrub: true,
        },
      })
      .to(path, {
        ease: 'none',
        attr: { d: destPath },
      });
  });
  return (
    <div className="bg-dark-cream h-screen flex flex-col justify-between">
      <div className="text-center text-lg leading-10 text-gray-dark mx-auto mt-[35vh] w-[223px] sm:w-screen">
        {title}
      </div>
      <div className="mx-auto">
        <div ref={firstRef}>
          <CurvedLine id="first" />
        </div>
        <div ref={secondRef}>
          <CurvedLine id="second" />
        </div>
        <div ref={thirdRef}>
          <CurvedLine id="third" />
        </div>
      </div>
    </div>
  );
};

export default SectionTitlePage;

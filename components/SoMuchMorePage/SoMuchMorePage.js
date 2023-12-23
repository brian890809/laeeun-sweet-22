import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import { ImageList } from '@/components';

import * as content from './content';

const SoMuchMore = () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = useRef(null);

  const update = (time, deltaTime, frame) => {
    lenis.current.raf(time * 1000);
  };

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
    });

    lenis.current.on(
      'scroll',
      ({ scroll, limit, velocity, direction, progress }) => {
        ScrollTrigger.update();
      }
    );
    gsap.ticker.add(update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return lenis.current.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.defaults({ scroller: document.body });

    // animation
    const pageContainer = document.body.querySelector('#smmPageContainer');
    const section2 = document.body.querySelector('.section2');
    const box = document.body.querySelector('#box');
    const imgList = document.body.querySelector('#imgList');
    const box2 = document.body.querySelector('#box2');

    const tl = gsap.timeline({ paused: true });

    const st = ScrollTrigger.create({
      animation: tl,
      trigger: pageContainer,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      pinSpacing: true,
    });
    // tl.fromTo(section2, { y: '100vh' }, { y: '0', ease: 'power1.inOut' }, 0);
    tl.fromTo(box2, { y: '90vh' }, { y: 0, duration: 1, ease: 'power1.inOut' });

    return () => {
      gsap.ticker.remove(update);
      lenis.current.destroy();
      tl.kill();
      st.kill();
    };
  }, []);

  return (
    <div
      className="bg-dark-cream h-screen flex flex-col relative"
      id="smmPageContainer"
    >
      <section className="section1 z-10">
        <div id="box">
          <div className="text-center text-lg leading-6 text-gray-dark mx-auto mt-[35vh]">
            {content.soMuchMore}
          </div>
        </div>
      </section>
      {/* <section className="section2 flex flex-col w-full h-full items-center justify-center">
        <ImageList id="imgList" />
      </section> */}
      <div className="mt-5">
        <div id="box2">
          <div className="text-center text-lg text-gray-dark mx-auto">
            {content.toBeContinued}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoMuchMore;

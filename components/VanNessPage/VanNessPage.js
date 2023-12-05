import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { Container } from '@/components/Container';

import { img1, img2, vn } from './content';
import * as styles from './styles';

const VnPage = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const leftElement = leftRef.current;
    const rightElement = rightRef.current;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: leftElement,
          start: 'top 90%', // when the top of the trigger hits the top of the viewport
          end: 'top 40%', // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      })
      .to(leftElement, {
        x: 100,
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: rightElement,
          start: 'top 90%', // when the top of the trigger hits the top of the viewport
          end: 'top 40%', // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      })
      .to(rightElement, {
        x: -100,
      });
  });
  // useEffect(() => {
  //   const element = rightRef.current;
  //   const rectangle4 = element.querySelector('#rectangle4');
  //   const path = element.querySelector('path.path-anim');
  //   const destPath = path.dataset.pathTo;
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: rectangle4,
  //         start: 'top 90%',
  //         end: 'bottom 95%',
  //         scrub: true,
  //       },
  //     })
  //     .to(path, {
  //       ease: 'none',
  //       attr: { d: destPath },
  //     });
  // });
  return (
    <Container>
      <div className="text-center text-lg leading-10 text-off-white w-max px-2 translate-x-[-50%] left-2/4 top-[35vh] absolute z-10 bg-neutral-500/30">
        {vn}
      </div>
      <div className="relative flex flex-wrap justify-normal">
        <Image
          ref={leftRef}
          id="laeeunLeft"
          style={styles.img1Styles}
          src={img1}
          width={248}
          height={305}
          alt="img1"
        />
        <Image
          ref={rightRef}
          id="bohanRight"
          style={styles.img2Styles}
          src={img2}
          width={248}
          height={305}
          alt="img2"
        />
      </div>
    </Container>
  );
};

export default VnPage;

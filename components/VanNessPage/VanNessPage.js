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
          start: 'top 90%',
          end: 'top 20%',
          scrub: 1,
        },
      })
      .to(leftElement, {
        y: 100,
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: rightElement,
          start: 'top 90%',
          end: 'top 40%',
          scrub: 1,
        },
      })
      .to(rightElement, {
        y: -100,
      });
  });
  return (
    <Container>
      <div className="text-center text-lg leading-10 text-off-white w-max px-2 translate-x-[-50%] left-2/4 top-[35vh] absolute z-10 bg-neutral-500/30">
        {vn}
      </div>
      <div className="grid grid-rows-2 grid-cols-2 h-full items-center">
        <div className="w-[75%] h-[95%] relative mx-auto">
          <Image
            ref={leftRef}
            style={styles.img1Styles}
            src={img1}
            fill
            alt="img1"
          />
        </div>
        <div className="w-[75%] h-[95%] row-end-3 col-end-3 relative mx-auto">
          <Image
            ref={rightRef}
            style={styles.img2Styles}
            src={img2}
            fill
            alt="img2"
          />
        </div>
      </div>
    </Container>
  );
};

export default VnPage;

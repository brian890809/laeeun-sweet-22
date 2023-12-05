import Image from 'next/image';

import { Container } from '@/components/Container';

import { img1, img2, yose } from './content';
import * as styles from './styles';

const YosePage = () => (
  <Container>
    <div className="text-center text-lg leading-10 text-off-white px-2 translate-x-[-50%] left-2/4 top-[35vh] absolute z-10 bg-neutral-500/30">
      {yose}
    </div>
    <div className="h-screen flex flex-col justify-around">
      <Image
        style={styles.img1Styles}
        src={img1}
        width={335}
        height={441}
        alt="img1"
      />
      <Image
        style={styles.img2Styles}
        src={img2}
        width={240}
        height={360}
        alt="img2"
      />
      {/* <div className="w-[240px] h-[350px] relative mx-auto"></div> */}
    </div>
  </Container>
);

export default YosePage;

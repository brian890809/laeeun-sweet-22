import Image from 'next/image';

import { Container } from '@/components/Container';

import { img1, img2, yose } from './content';
import * as styles from './styles';

const YosePage = () => (
  <Container>
    <div className="text-center text-lg leading-10 text-off-white px-2 translate-x-[-50%] left-2/4 top-[35vh] absolute z-10 bg-neutral-500/30">
      {yose}
    </div>
    <div className="grid grid-rows-2 h-full items-center">
      <div className="w-[65%] h-[95%] relative mx-auto">
        <Image style={styles.img1Styles} src={img1} fill alt="img1" />
      </div>
      <div className="w-[55%] h-[95%] relative mx-auto">
        <Image style={styles.img2Styles} src={img2} fill alt="img2" />
      </div>
    </div>
  </Container>
);

export default YosePage;

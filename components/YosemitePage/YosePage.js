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
      <div className="w-[188px] h-[291px] relative mx-auto">
        <Image style={styles.img2Styles} src={img2} fill alt="img2" />
      </div>
    </div>
  </Container>
);

export default YosePage;

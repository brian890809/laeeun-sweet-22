import Image from 'next/image';

import { Container } from '@/components/Container';

import { img1, img2, vn } from './content';
import * as styles from './styles';

const vnPage = () => (
  <Container>
    <div className="text-center text-lg leading-10 text-off-white w-max px-2 mx-auto top-[35vh] relative z-10 bg-neutral-500/30">
      {vn}
    </div>
    <Image
      style={styles.img1Styles}
      src={img1}
      width={248}
      height={305}
      alt="img1"
    />
    <Image
      style={styles.img2Styles}
      src={img2}
      width={278}
      height={365}
      alt="img2"
    />
  </Container>
);

export default vnPage;

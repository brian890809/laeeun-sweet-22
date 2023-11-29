import Image from 'next/image';

import { Container } from '@/components/Container';

import { img1, img2, img3, nyc } from './content';
import * as styles from './styles';

const NycPage = () => (
  <Container>
    <div className="text-center text-lg leading-10 text-off-white w-max px-2 mx-auto top-[35vh] relative z-10 bg-neutral-500/30">
      {nyc}
    </div>
    <Image
      style={styles.img1Styles}
      src={img2}
      height={305}
      width={248}
      alt="img1"
    />
    <Image
      style={styles.img2Styles}
      src={img1}
      width={278}
      height={365}
      alt="img2"
    />
    <Image
      style={styles.img3Styles}
      src={img3}
      width={336}
      height={217}
      alt="img3"
    />
  </Container>
);

export default NycPage;

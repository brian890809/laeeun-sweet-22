import Image from 'next/image';

import { Container } from '@/components/Container';

import { img1, img2, img3, img4, sf } from './content';
import * as styles from './styles';

const SfPage = () => (
  <Container>
    <div className="text-center text-lg leading-10 text-off-white w-max px-2 translate-x-[-50%] left-2/4 top-[35vh] absolute z-10 bg-neutral-500/30">
      {sf}
    </div>
    <div className="grid grid-cols-2 grid-rows-3 h-full items-center">
      <div className="w-[85%] h-[95%] relative mx-auto">
        <Image style={styles.img1Styles} src={img1} fill alt="img1" />
      </div>
      <div className="w-[85%] h-[95%] relative mx-auto">
        <Image style={styles.img2Styles} src={img2} fill alt="img2" />
      </div>
      <div className="w-[80%] h-[90%] relative mx-auto col-span-2">
        <Image src={img3} fill alt="img3" className="object-cover" />
      </div>
      <div className="w-[80%] h-[90%] relative mx-auto col-span-2">
        <Image src={img4} fill alt="img3" className="object-cover" />
      </div>
    </div>
  </Container>
);

export default SfPage;

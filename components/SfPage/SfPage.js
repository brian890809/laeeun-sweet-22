import Image from 'next/image';

import { Container } from '@/components/Container';

import { img1, img2, img3, img4, sf } from './content';
import * as styles from './styles';

const SfPage = () => (
  <Container>
    <div className="text-center text-lg leading-10 text-off-white w-max px-2 mx-auto top-[35vh] relative z-10 bg-neutral-500/30">
      {sf}
    </div>
    <div className="flex flex-row justify-around">
      <Image
        style={styles.img1Styles}
        src={img1}
        width={170}
        height={224}
        alt="img1"
      />
      <Image
        style={styles.img2Styles}
        src={img2}
        width={170}
        height={224}
        alt="img2"
      />
    </div>
    <div className="flex flex-col justify-around gap-y-4 absolute bottom-4 w-full">
      <div className="w-[343px] h-[222px] relative mx-auto">
        <Image src={img3} fill alt="img3" className="object-cover" />
      </div>
      <div className="w-[343px] h-[222px] relative mx-auto">
        <Image src={img4} fill alt="img3" className="object-cover" />
      </div>
    </div>
  </Container>
);

export default SfPage;

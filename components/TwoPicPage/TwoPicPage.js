import { PicturePageBase } from '../PicturePageBase';
import * as content from './content';

const TwoPicPage = () => {
  return (
    <div className="bg-dark-cream h-screen flex flex-wrap justify-around relative">
      <div className="text-center text-lg text-off-white absolute top-[35vh] z-10 bg-neutral-500/30">
        {content.title}
      </div>
      <PicturePageBase
        imgSrc={content.topPic}
        customStyles="h-[33vh] w-[88vw] m-auto"
      />
      <PicturePageBase
        imgSrc={content.bottomPic}
        customStyles="h-[35vh] w-3/5 m-auto"
      />
    </div>
  );
};

export default TwoPicPage;

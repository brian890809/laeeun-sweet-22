import { openSans } from '@/app/styles/fonts';

import { content } from './content';

const IntroPage = () => (
  <div className="bg-dark-cream h-screen flex flex-col justify-between">
    <div className="mt-[35vh]">
      <div className="text-center text-xl leading-10 text-gray-dark">
        {content.title}
      </div>
      <div className="text-center text-sm text-gray">{content.subtitle}</div>
    </div>
    <div className="">
      <div
        className={`text-center text-base text-off-white ${openSans.className}`}
      >
        {content.scrollDown}
      </div>
      <div className="border-l-2 border-off-white h-[60px] w-0 mx-auto mb-1" />
    </div>
  </div>
);

export default IntroPage;

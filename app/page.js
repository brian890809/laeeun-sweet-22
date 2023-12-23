'use client';
import { Lenis as ReactLenis } from '@studio-freight/react-lenis';

import {
  FacetimePage,
  IntroPage,
  LastPage,
  Napa,
  NoRegretPage,
  NYC,
  ParagraphPage,
  PicturePageCover,
  PicturePageSection,
  SectionTitlePage,
  SF,
  SoMuchMorePage,
  VanNess,
  Yosemite,
} from '@/components';

const easingFunction = (x) => -(Math.cos(Math.PI * x) - 1) / 2;
const options = {
  easing: easingFunction,
  smoothTouch: true,
};
const Page = () => {
  return (
    <ReactLenis root options={options}>
      <IntroPage />
      <PicturePageCover />
      <ParagraphPage />
      <PicturePageSection />
      <SectionTitlePage />
      <NYC />
      <SF />
      <Yosemite />
      <Napa />
      <VanNess />
      <FacetimePage />
      <SoMuchMorePage />
      <NoRegretPage />
      <LastPage />
    </ReactLenis>
  );
};

export default Page;

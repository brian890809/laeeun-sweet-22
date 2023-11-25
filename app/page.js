import {
  FacetimePage,
  IntroPage,
  ParagraphPage,
  PicturePageCover,
  PicturePageSection,
  SectionTitlePage,
  TwoPicPage,
} from '@/components';

const Page = () => {
  return (
    <>
      <IntroPage />
      <PicturePageCover />
      <ParagraphPage />
      <PicturePageSection />
      <TwoPicPage />
      <SectionTitlePage />
      <FacetimePage />
    </>
  );
};

export default Page;

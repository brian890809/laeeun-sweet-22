import {
  FacetimePage,
  IntroPage,
  LastPage,
  NoRegretPage,
  ParagraphPage,
  PicturePageCover,
  PicturePageSection,
  SectionTitlePage,
  SoMuchMorePage,
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
      <SoMuchMorePage />
      <NoRegretPage />
      <LastPage />
    </>
  );
};

export default Page;

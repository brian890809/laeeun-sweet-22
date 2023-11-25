import * as content from './content';

const ParagraphPage = () => (
  <div className="bg-dark-cream h-screen flex flex-col justify-center gap-y-16">
    <div className="text-right text-2xl leading-10 text-white mr-5">
      {content.title}
    </div>
    <div className="text-right text-base max-w-[60%] ml-auto mr-5">
      {content.content}
    </div>
  </div>
);

export default ParagraphPage;

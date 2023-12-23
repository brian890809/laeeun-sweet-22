import * as content from './content';

const SoMuchMore = () => {
  return (
    <div
      className="bg-dark-cream h-screen flex flex-col relative"
      id="smmPageContainer"
    >
      <section className="section1 z-10">
        <div id="box">
          <div className="text-center text-lg leading-6 text-gray-dark mx-auto mt-[35vh]">
            {content.soMuchMore}
          </div>
        </div>
      </section>
      <div className="mt-5">
        <div id="box2">
          <div className="text-center text-lg text-gray-dark mx-auto">
            {content.toBeContinued}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoMuchMore;

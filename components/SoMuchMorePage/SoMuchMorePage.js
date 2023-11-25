import * as content from './content';

const soMuchMore = () => (
  <div className="bg-dark-cream h-screen flex flex-col">
    <div className="text-center text-lg leading-6 text-gray-dark mx-auto mt-[35vh]">
      {content.soMuchMore}
    </div>
    <div className="mt-5">
      <div className="text-center text-lg text-gray-dark mx-auto">
        {content.toBeContinued}
      </div>
    </div>
  </div>
);

export default soMuchMore;

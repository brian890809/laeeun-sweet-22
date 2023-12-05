import * as content from './content';

const soMuchMore = () => (
  <div className="bg-dark-cream h-[90vh] relative">
    <div className="absolute text-center text-lg translate-x-[-50%] left-2/4 leading-6 text-gray-dark mt-[35vh]">
      {content.soMuchMore}
    </div>
    <div className="pt-5">
      <div className="text-center text-lg text-gray-dark mx-auto">
        {content.toBeContinued}
      </div>
    </div>
  </div>
);

export default soMuchMore;

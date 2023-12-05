import * as content from './content';

const FacetimePage = () => {
  return (
    <div className="bg-dark-cream h-[95vh] flex flex-col">
      <div className="text-center text-lg leading-10 text-gray-dark mx-auto mt-[35vh]">
        {content.ofc}
      </div>
      <div className="mt-5">
        {content.contentList.map((content, i) => (
          <div key={i} className="text-center text-lg text-gray-dark mx-auto">
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacetimePage;

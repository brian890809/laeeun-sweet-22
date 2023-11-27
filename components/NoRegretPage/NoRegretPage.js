import { contentList } from './content';

const NoRegretPage = () => {
  return (
    <div className="bg-dark-gray h-screen flex flex-col">
      {contentList.map((content, i) => (
        <div
          key={i}
          className="text-center text-lg 6 text-off-white mx-auto mt-[83px] first:mt-[35vh]"
        >
          {content.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NoRegretPage;

import { contentList, signature } from './content';

const NoRegretPage = () => {
  return (
    <div className="bg-dark-gray h-screen flex flex-col justify-between">
      <div>
        {contentList.map((content) => (
          <div
            key="1"
            className="text-center text-lg 6 text-off-white mx-auto mt-[28px] first:mt-[35vh]"
          >
            {content}
          </div>
        ))}
      </div>
      <div className="text-center text-lg text-off-white mx-auto mb-[15vh]">
        {signature}
      </div>
    </div>
  );
};

export default NoRegretPage;

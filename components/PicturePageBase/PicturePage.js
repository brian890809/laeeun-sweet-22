import Image from 'next/image';
const PicturePageBase = ({
  imgSrc = '',
  imgTransformationStyles = '',
  customStyles = '',
}) => {
  return (
    <div
      className={`bg-dark-cream relative ${imgTransformationStyles} ${customStyles}`}
    >
      <Image
        src={imgSrc}
        fill
        alt="picture"
        className="object-cover overflow-hidden"
      />
    </div>
  );
};

export default PicturePageBase;

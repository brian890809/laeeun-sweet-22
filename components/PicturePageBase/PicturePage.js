import Image from 'next/image';
const PicturePageBase = ({
  imgSrc = '',
  imgTransformationStyles = '',
  customStyles = '',
  ...props
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
        {...props}
      />
    </div>
  );
};

export default PicturePageBase;

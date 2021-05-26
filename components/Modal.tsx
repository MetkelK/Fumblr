import Image from 'next/image'

const Modal = ({ selectedImage, setSelectedImage }: any) => {
  const handleClick = (e:any) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <div className="backdrop-image">
        <Image src={selectedImage} alt="enlarged pic" layout="fill" objectFit="contain" sizes="25vw, 50vw, 75vw, 100vw"/>
      </div>
    </div>
  );
};

export default Modal;

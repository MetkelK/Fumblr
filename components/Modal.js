import Image from "next/image";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    if (
      e.target.classList.contains("backdrop") ||
      e.target.classList.contains("close")
    ) {
      setSelectedImage(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <div className="backdrop-image">
        <span className="close" onClick={() => handleClick}>
          &times;
        </span>
        <Image
          src={selectedImage}
          alt="enlarged pic"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
    </div>
  );
};

export default Modal;

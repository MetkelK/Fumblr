import Image from "next/image";

const Modal = ({ selectedImage, setSelectedImage }: any) => {
  const handleClick = (e: any) => {
    console.log(e);
    if (
      e.target.classList.contains("backdrop") ||
      e.target.classList.contains("close")
    ) {
      setSelectedImage(null);
      console.log("clicked");
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
          sizes="90vw, 100vw"
          priority
        />
      </div>
    </div>
  );
};

export default Modal;

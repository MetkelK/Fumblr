interface ImageProps {
  selectedImage: any,
  setSelectedImage: any
}

const Modal = ({ selectedImage, setSelectedImage }: ImageProps) => {
  const handleClick = (e:any) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImage} alt="enlarged pic" />
    </div>
  );
};

export default Modal;

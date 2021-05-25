const Modal = ({ selectedImage, setSelectedImage }: any) => {
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

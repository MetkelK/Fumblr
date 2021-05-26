import useFirestore from "../hooks/useFirestore";
import Image from 'next/image'

const ImageGrid = ({ setSelectedImage }:any) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc:any) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <Image src={doc.url} alt={doc.id} layout="fill" quality={100} sizes="25vw, 50vw, 75vw, 100vw" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;

import Image from "next/image";

import useFirestore from "../hooks/useFirestore";

interface ImageProps {
  setSelectedImage: any
}

const ImageGrid = ({ setSelectedImage }:ImageProps) => {
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
            <img src={doc.url} alt={doc.id} />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;

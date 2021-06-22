import Image from "next/image";

import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <Image
              src={doc.url}
              alt={doc.id}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;

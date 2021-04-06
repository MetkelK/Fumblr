import Image from "next/image";

import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <img
              src={doc.url}
              alt={doc.id}
              // width={200}
              // height={200}
              layout="fill"
            />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;

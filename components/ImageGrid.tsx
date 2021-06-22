import useFirestore from "../hooks/useFirestore";
import Image from "next/image";

const ImageGrid = ({ setSelectedImage }: any) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {/* {docs &&
        docs.map((doc:any) => ( */}
      <div
        className="img-wrap"
        // key={doc.id}
        // onClick={() => setSelectedImage(doc.url)}
      >
        {/* <Image src={doc.url} alt={doc.id} layout="fill" quality={100} sizes="25vw, 50vw, 75vw, 100vw" /> */}
        <Image
          src="/alona-perez-p4xNF5ZPc0c-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/alona-perez-p4xNF5ZPc0c-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="img-wrap">
        <Image
          src="/barna-bartis-pzB5wnhg8F0-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/barna-bartis-pzB5wnhg8F0-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/bruno-emmanuelle-OpNcFbKbdHY-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/bruno-emmanuelle-OpNcFbKbdHY-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/faris-mohammed-d30sszrW7Vw-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/faris-mohammed-d30sszrW7Vw-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/jason-oh-hImNZO2uCEg-unsplash.jpg"
          onClick={() => setSelectedImage("/jason-oh-hImNZO2uCEg-unsplash.jpg")}
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/kevin-mueller-VgJ0ApedIjU-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/kevin-mueller-VgJ0ApedIjU-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/markus-spiske-fkEUEsX0KsM-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/markus-spiske-fkEUEsX0KsM-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/nour-betar-bkAFwyYTn58-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/nour-betar-bkAFwyYTn58-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/patrick-janser-qqedkghXFfo-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/patrick-janser-qqedkghXFfo-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/ralph-ravi-kayden-j5xlNpgzqds-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/ralph-ravi-kayden-j5xlNpgzqds-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/ricardo-gomez-angel-7RuhOrZO-1g-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/ricardo-gomez-angel-7RuhOrZO-1g-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/ryan-ancill-J53lqWyWfZk-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/ryan-ancill-J53lqWyWfZk-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="img-wrap">
        <Image
          src="/solen-feyissa-gq7WBs1ejHw-unsplash.jpg"
          onClick={() =>
            setSelectedImage("/solen-feyissa-gq7WBs1ejHw-unsplash.jpg")
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* ))} */}
    </div>
  );
};

export default ImageGrid;

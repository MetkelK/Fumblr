import { useState } from "react";
import Head from "next/head";

import Upload from "../components/Upload";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <Head>
        <title>Fumblr</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Fake Tumblr"></meta>
      </Head>
      <main>
        <Upload />
        <ImageGrid setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </main>
    </div>
  );
}

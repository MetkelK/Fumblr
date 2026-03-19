import { useState } from "react";
import imageCompression from "browser-image-compression";
import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const allowedTypes = ["image/png", "image/jpeg", "image/gif"];

  const uploadFile = async (e) => {
    let selectedFile = e.target.files[0];

    if (!selectedFile) return;

    if (!allowedTypes.includes(selectedFile.type)) {
      setFile(null);
      setError("Please select a valid image file");
      return;
    }

    try {
      const options = {
        maxSizeMB: 5,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(selectedFile, options);
      setFile(compressedFile);
      setError("");
    } catch (err) {
      setError("Error compressing image. Please try again.");
      setFile(null);
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={uploadFile} aria-label="upload image" />
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
      </label>
      <div>
        {error && <p className="error">{error}</p>}
        {file && <p>{file.name}</p>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Upload;

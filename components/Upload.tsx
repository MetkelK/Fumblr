import { useState } from "react";
import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const allowedTypes = ["image/png", "image/jpeg", "image/gif"];

  const uploadFile = (e: any) => {
    let selectedFile = e.target.files[0];
    console.log(selectedFile);

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(" ");
    } else {
      setFile(null);
      setError("Please select a valid image file");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={uploadFile} aria-label="upload image" />
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
      </label>
      <div>
        {error && (
          <p className="error" aria-label="error message">
            {error}
          </p>
        )}
        {file && <p aria-label="file name">{file.name}</p>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Upload;

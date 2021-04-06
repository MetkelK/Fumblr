import { useState } from "react";
import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const allowedTypes = ["image/png", "image/jpeg"];

  const uploadFile = (e) => {
    let selectedFile = e.target.files[0];
    console.log(selectedFile);

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
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
        {error && <p className="error">{error}</p>}
        {file && <p>{file.name}</p>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Upload;

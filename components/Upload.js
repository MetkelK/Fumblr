import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

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
        <input type="file" onChange={uploadFile} />
        <span>+</span>
      </label>
      <div>
        {error && <p className="error">{error}</p>}
        {/* {file && <p>{file.name}</p>} */}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Upload;

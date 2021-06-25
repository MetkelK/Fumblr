import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

// https://github.com/nicolechung/testing-library-codealong
// https://github.com/renovatebot/renovatenp

type Dispatch<A> = (value: A) => void;

const ProgressBar = ({
  file,
  setFile,
}: {
  file: File;
  setFile: Dispatch<File | null>;
}) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div
      className="progressBar"
      aria-label="progressBar"
      style={{ width: progress + "%" }}
    ></div>
  );
};

export default ProgressBar;

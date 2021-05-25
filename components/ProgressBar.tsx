import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

interface FileProps {
  file: any,
  setFile: any
}
const ProgressBar = ({ file, setFile }:FileProps) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progressBar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;

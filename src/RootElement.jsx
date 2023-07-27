import { useState } from "react";
import Folder from "./Folder";
const RootElement = ({ name, type }) => {
  const [input, setInput] = useState(name);
  const [addedFolder, setAddedFolder] = useState(false);
  const [addedFile, setAddedFile] = useState(false);
  const addFolderHandler = () => {
    setAddedFolder(true);
  };
  const addFileHandler = () => {
    setAddedFile(true);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="pd-2-mg-2">
        <span>
          {type ? "📁" : "📄"}
          <input
            type="text"
            value={name ? name : input}
            onChange={(e) => handleChange(e)}
          />
        </span>
        {type && input && (
          <span className="pd-2-mg-2">
            <button onClick={() => addFolderHandler()}>Folder +</button>
            <button onClick={() => addFileHandler()}>File +</button>
          </span>
        )}
      </div>
      {addedFolder && <Folder explorer={{ isFolder: true, name: "" }} />}
      {addedFile && <Folder explorer={{ isFolder: false, name: "" }} />}
    </>
  );
};

export default RootElement;

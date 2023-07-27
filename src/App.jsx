import explorer from "./folderData";
import { useState } from "react";
import Folder from "./Folder";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}

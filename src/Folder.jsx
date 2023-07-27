import RootElement from "./RootElement";
import { useState } from "react";
const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
   
    setExpand(true);
  }
console.log(expand)
  return (
    <div>
      <div style={{paddingLeft:"1rem"}}>
      <div onClick={() => {
        setExpand(true);
       }}>
       <RootElement name={explorer.name} type={explorer.isFolder}  />
         </div>
        {explorer?.items?.map((item, index) => {
         
          return (
            <div key={index}>
             
              <div style={{display:expand===true?"block":"none"}}>
                <Folder explorer={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Folder;
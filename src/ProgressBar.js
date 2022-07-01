import React from "react";
import "./style.css";
const Progress = ({with: inputWidth})=>{
  return(
    <div>
      <div className ="container">
        {inputWidth >= 0 && inputWidth<= 100?(
          <div className ="innerContainer" style ={{width:`${innerWidth}%`}}>
            {inputWidth}%
            </div>
        ) :(
             alert("please enter value less than 100")
        )}
        </div>
    </div>
  );  
};
export default ProgressBar;
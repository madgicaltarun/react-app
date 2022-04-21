import React from "react";
import user from "../../asserts/User.png";
import "./editor.css";
import trash from "../../asserts/trash.png"
import chevron_up from "../../asserts/chevron_up.png"

const Editor = (props) => {
  const { name, plan, dropdownChange, index, handleImage} = props;
  return (
    <div className={index%2===0? "data ":"data d-5"}>
      <div className="user_data">
        <div className="user_info">
          <img src={user} width="32px" height="32px" />
          <p className={`font-body-medium weight-regular ${name==="unassingned"?"gray-4":""}`}>{name}</p>
        </div>
        <div className="user_plan d-11">
          {/* <p className="font-body-medium weight-regular gray-4">Content Studio-Pro</p> */}
          <div className="dropdown1">
          <select className="font-body-medium d-11 gray-4" value={plan} onChange={(e) => dropdownChange(index, e)}>
            <option value="pro">
              {" "}
              {/* <p className="font-body-medium weight-regular gray-4"> */}
                Content Studio-Pro
              {/* </p> */}
            </option>
            <option value="standard">
              {" "}
              <p className="font-body-medium weight-regular gray-4">
                Content Studio-Standard
              </p>
            </option>
          </select>
          </div>
        </div>
        <div className="arrow-right">
          <img src={chevron_up} width="18px" height="18px"/>
        </div>
      </div>
        <div className="right-side">
          <div className="bonus">
            <p className="font-body-medium gray-4">+ $150.00</p>
          </div>
          <div className="bonus-text"><p className="font-body-small wieght-regular gray-4">Will continue as pro till next billing cycle</p></div>
          <img  src={trash} width="20px" height="20px" onClick={()=>handleImage(index)}/>
        </div>
    </div>
  );
};
export default Editor;

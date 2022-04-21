import React, { useState } from "react";
import right_arrow from "../../asserts/right_arrow.png";
import user_plus from "../../asserts/user_plus.png";
import grid from "../../asserts/grid.png";
import grid1 from "../../asserts/grid1.png";
import users from "../../asserts/users.png";
import chevrons_right from "../../asserts/chevrons_right.png";
import attryb_products from "../../asserts/attryb_products.png";
import layers from "../../asserts/layers.png"
import folder from "../../asserts/folder.png"
import line from "../../asserts/line.png";
import log_out from "../../asserts/log_out.png"
import message_circle from "../../asserts/message_circle.png"
import line2 from "../../asserts/Line2.png"
import octicon_organization from "../../asserts/octicon_organization.png"
import "./sidebar.css";

const Sidebar = () => {
   let clicked="false"

   const handleClicked=()=>{
    document.getElementById("sidebar").style.display="none";
   }
  return (
    <div className="sidebar" id="sidebar">
      <div className="header d-2">
        <div className="header-image">
          <img src={chevrons_right} width="20px" height="20px" onClick={handleClicked}/>
        </div>
      </div>
      <div className="content d-8">
        <div className="top">
          <div className="top-menu">
            <div className="items">
              <div className="org">
                <div className="org-icon d-6">M</div>
                <p className="font-body-medium weight-regular ">My Organization</p>
              </div>
              <div className="sub-menu">
                <div className="user_management">
                  <img src={user_plus} width="16px" height="16px" />
                  <p className="font-body-small weight-regular">User Managemet</p>
                </div>
                <div className="billing-dashboard d-2">
                  <img src={grid} width="16px" height="16px" />
                  <p className="font-body-small weight-regular" >Billing Dashboard</p>
                </div>
                <div className="user_management">
                  <img src={users} width="16px" height="16px" />
                  <p className="font-body-small weight-regular">Product Teams</p>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <img src={octicon_organization} width="20px" height="20px" />
              <p className="font-body-medium weight-regular ">All Organizations</p>
            </div>
          </div>
          <div className="menu-bottom">
            <div className="product-divider d-8">
                <p>Products</p>
            </div>
            <div className="product-items">
              <div className="product-details">
                <img src={attryb_products} width="20px" height="20px" alt="" />
                <p className="font-body-medium weight-regular ">Content Studio</p>
              </div>
              <div className="sub-menu">
                <div className="user_management">
                  <img src={grid1} width="16px" height="16px" />
                  <p className="font-body-small weight-regular">Dashboard</p>
                </div>
                <div className="user_management">
                  <img src={layers} width="16px" height="16px" />
                  <p className="font-body-small weight-regular">Templetes</p>
                </div>
                <div className="user_management">
                  <img src={folder} width="16px" height="16px" />
                  <p className="font-body-small weight-regular">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
            <div className="image_line">
                <img src={line} alt="" />
            </div>
            <div className="bottom-message">
                <img src={message_circle} width="16px" height="16px"/>
                <p className="font-body-small weight-regular">Support</p>
            </div>
            <div className="bottom-message">
                <img src={log_out} alt="" width="16px" height="16px" />
                 <p className="font-body-small weight-regular">Sign out</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

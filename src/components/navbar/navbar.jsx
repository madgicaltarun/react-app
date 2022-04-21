import React, { useEffect, useState } from "react";
import icon from "../../asserts/Vector.png";
import user from "../../asserts/User.png";
import down_arrow  from "../../asserts/down_arrow.png";
import bell from "../../asserts/bell.png"
import menu from "../../asserts/menu.png"

import "./navbar.css"
const Navbar=()=>{
   return <div className="navbar-container d-6">
       <div className="navbar-body">
           <div className="tarun1">
               <img src={icon} />
           </div>
           <div className="page-title font-body weight-medium white">
               Organization Billing
           </div>
           <div className="tarun">
               <img src={menu} width="20px" height="20px" />
           </div>
           <div className="rhs">
               <div className="bell">
                   <img src={bell} width="20px" height="20px" />
               </div>
               <div className="profile">
               <img src={user} width="32px" height="32px"/>
               <p className="btn_text weight-bold">My Organization</p>
               <img src={down_arrow} width="10px" height="5px"/>
               </div>
           </div>
       </div>
        <div className="shodow">
        </div>

   </div>
}

export default Navbar;




//   return <div className="navbar">
// <div className="icon-right">
// <img src={icon} alt="1" />
// </div>
// <div className="title">
//     Tarun Rai
// </div>
// <div className="rhs">
//     <div className="profile">
//     <img src={user} alt="1" />
//     </div>

// </div>
// <div className="shadow">

// </div>
// </div>
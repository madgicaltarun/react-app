import React, { useEffect, useState } from "react";
import "./main.css";
import arrow_left from "../../asserts/arrow_left.png";
import x from "../../asserts/x.png";
import x_circle from "../../asserts/x_circle.png";
import Editor from "../editor/editor";
import plus from "../../asserts/plus.png";
import RHS from "../../asserts/RHS.png";
import RHS_1 from "../../asserts/RHS_1.png";

const Main = () => {
  function handleClicked() {
    document.getElementById("sidebar").style.display = "block";
  }
  const [data, setData] = useState([{ name: "Tarun", plan: "pro" }]);
  const [seats, setSeats] = useState(0);
  const [proseats, setProSeats] = useState(0);
  const handlecircle = () => {
    // document.getElementById("table").style.display="none"
    document.getElementById("table2").style.display = "none";
    document.getElementById("second-down").style.display = "block";
    document.getElementById("second").style.display = "none";
  };
  const handlecircle1 = () => {
    document.getElementById("table2").style.display = "table-row-group";
    document.getElementById("second-down").style.display = "none";
    document.getElementById("second").style.display = "block";
  };
  const [arrow, setArror] = useState(true);
  useEffect(() => {
    let a = 0;
    let b = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].plan == "pro") {
        a++;
      }
      if (data[i].plan == "standard") {
        b++;
      }
    }
    setSeats(b);
    setProSeats(a);
    console.log(data);
  }, [data]);
  const dropdownChange = (index, e) => {
    let data1 = data;
    data1[index].plan = e.target.value;
    setData([...data1]);

    console.log("Data", data);
  };
  const handlePlus = () => {
    let json = { name: "unassingned", plan: "standard" };
    let data1 = data;
    data1.push(json);
    setData([...data1]);
  };
  const handleImage = (index) => {
    let data1 = data;
    data1.splice(index, 1);
    setData([...data1]);
  };
  return (
    <div className="main-container d-7">
      <div className="main-header">
        <div className="arrow_left">
          <img
            src={arrow_left}
            width="20px"
            height="20px"
            onClick={handleClicked}
          />
        </div>
        <div className="main-heading">
          <p className="font-body weight-bold">Manage Plans</p>
        </div>
      </div>
      <div className="main-content">
        <div className="error_alert d-9">
          <div className="circle_icon">
            <img src={x_circle} width="20px" height="20px" />
            <p className="font-body-medium weight-regular dark-normal">
              Last payment failed. Need to pay pending dues before editing the
              plans
            </p>
          </div>
          <div className="cross_icon">
            <img src={x} width="20px" height="20px" />
          </div>
        </div>
        <div className="billing_summary d-1">
          <p className="font-body weight-bold gray-4">
            Subscription Billing Summary
          </p>
          <div className="table">
            <table>
              <tbody>
                <tr className="d-1">
                  <td></td>
                  <td className="font-body-medium weight-medium gray-4">
                    Last Payment
                  </td>
                  <td className="font-body-medium weight-medium gray-4">
                    Next Payment
                  </td>
                </tr>
                </tbody>
                <tbody id="table2">
                <tr className="d-1 ">
                  <td></td>
                  <td>
                    <div className="inner">
                      <div className="inner_td font-body-medium weight-regular">
                        Editor Seats
                      </div>
                      <div className="inner_td font-body-medium weight-regular">
                        Amount
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="inner">
                      <div className="inner_td font-body-medium weight-regular">
                        Editor Seats
                      </div>
                      <div className="inner_td font-body-medium weight-regular">
                        Amount
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="d-1">
                  <td className="font-body-medium weight-regular gray-4">
                    Content Studio-Standard Plan
                  </td>
                  <td>
                    <div className="inner">
                      <div className="inner_td font-body-medium weight-regular gray-4">
                        0
                      </div>
                      <div className="inner_td font-body-medium weight-regular gray-4">
                        $ 0
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="inner">
                      <div className="inner_td font-body-medium weight-regular gray-4">
                        {seats}
                      </div>
                      <div className="inner_td font-body-medium weight-regular gray-4">
                        $ {seats * 100.0}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="d-1">
                  <td className="font-body-medium weight-regular gray-4">
                    Content Studio-pro Plan
                  </td>
                  <td>
                    <div className="inner">
                      <div className="inner_td font-body-medium weight-regular gray-4">
                        1
                      </div>
                      <div className="inner_td font-body-medium weight-regular gray-4">
                        $ 200.0
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="inner">
                      <div className="inner_td font-body-medium weight-regular gray-4">
                        {proseats}
                      </div>
                      <div className="inner_td font-body-medium weight-regular gray-4">
                        $ {proseats * 200.0}
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
                <tbody>
                <tr className="d-10">
                  <td className="font-body weight-medium">
                    Subscription Amount
                  </td>
                  <td className="font-body weight-bold">$ 200.0</td>
                  <td className="font-body weight-bold danger">
                    $ {seats * 100 + proseats * 200}.0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="first">
            <div id="second">
              <img src={RHS} alt="" onClick={handlecircle} />
            </div>
            <div id="second-down">
              <img
                src={RHS_1}
                alt=""
                width="26px"
                height="26px"
                onClick={handlecircle1}
              />
            </div>
          </div>
        </div>
        <div className="member d-1">
          <div className="member-heading">
            <p className="font-body weight-bold gray-4">
              Team Member:{data.length}
            </p>
          </div>
          <div className="member_content">
            <div className="editor">
              <p className="font-body-small weight-bold">Editor</p>
            </div>
            <div className="active_plan">
              <p className="font-body-small weight-bold">Active Plans</p>
            </div>
            <div className="actions">
              <p className="font-body-small weight-bold">Actions</p>
            </div>
          </div>
          <div className="table1">
            {data.map((dt, index) => {
              return (
                <Editor
                  name={dt.name}
                  index={index}
                  plan={dt.plan}
                  dropdownChange={dropdownChange}
                  handleImage={handleImage}
                />
              );
            })}
            {/* <div className="data">
                        <div className="user_data">
                            <div className="user_info">
                                <img src={user} width="32px" height="32px" />
                                <p className="font-body-medium weight-regular">Tarun Rai</p>
                            </div>
                            <div className="user_plan d-11">
                               <p className="font-body-medium weight-regular grey-4">Content Studio-Pro</p>
                            </div>
                        </div> */}
            {/* <div className="data d-5">
                        <div className="user_data ">
                        <div className="user_info">
                                <img src={user} width="32px" height="32px" />
                                <p className="font-body-medium weight-regular">Tarun Rai</p>
                            </div>
                            <div className="user_plan d-11">
                               <p className="font-body-medium weight-regular grey-4">Content Studio-Pro</p>
                            </div>
                         </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
          <div className="add_seats d-5">
            <img src={plus} width="20px" height="20px" onClick={handlePlus} />
            <p className="btn_text weight-bold primary">Add Editor Seat</p>
          </div>
          <div className="pay_section">
            <div className="text_area">
              <p
                className={`font-body wieght-bold ${
                  seats * 100 + proseats * 200 > 0 ? "danger" : ""
                }`}
              >
                Total amount due
              </p>
            </div>
            <div className="plan_details">
              <div className="price">
                <p
                  className={`font-body wieght-bold ${
                    seats * 100 + proseats * 200 > 0 ? "danger" : ""
                  }`}
                >
                  $ {seats * 100 + proseats * 200}.0
                </p>
              </div>
              <div
                className={
                  seats * 100 + proseats * 200 > 0 ? "btn" : "btn opacity"
                }
              >
                <button className="btn_text weight-bold d-6 white">
                  Proceed To Pay
                </button>
              </div>
            </div>
          </div>
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-heading">
                <p className="font-body wieght-bold">Total due amount</p>
              </div>
              <div className="btn">
                {" "}
                <button className="footer-btn text_btn d-6 white">
                  Pay  $ {seats * 100 + proseats * 200}.0
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;

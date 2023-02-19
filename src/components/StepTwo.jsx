import React, { useState } from 'react'
import Back from "../assets/back.svg";

const StepTwo = () => {
    let [radioItems, setRadioItems] = useState([
      { title: "Arcade", price: "$9/mo", img: Back, active: true },
      { title: "Advanced", price: "$12/mo", img: Back, active: false },
      { title: "Pro", price: "$15/mo", img: Back, active: false },
    ]);

    const handlePlan = (item) => {
      const newRad = radioItems.map((i) => {
        if (i.title === item.title) {
          return { ...i, active: true };
        } else {
          return { ...i, active: false };
        }
      });
      setRadioItems(newRad);
    };

  return (
    <>
      <div className="formhead">
        <h1>SELECT PLAN</h1>
        <p>You have the option for monthly or yearly billing</p>
      </div>
      <div className="formbody">
        {radioItems &&
          radioItems.map((item, index) => (
            <div
              className={item.active ? "radioItemActive" : "radioItem"}
              key={index}
              onClick={() => handlePlan(item)}
            >
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <div className="radioInfo">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="formfooter">
        <button className="btn">Next</button>
      </div>
    </>
  );
}

export default StepTwo
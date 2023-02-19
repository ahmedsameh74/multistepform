import React, { useState } from 'react'

const StepOne = () => {
    const [firstStep, setFirstStep] = useState({
      name: "",
      email: "",
      phone: "",
    });

    console.log(firstStep)

  return (
    <>
      <div className="formhead">
        <h1>Personal Info</h1>
        <p>Enter your personal details and start journey with us</p>
      </div>
      <div className="formbody">
        <div className="formitem">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) =>
              setFirstStep((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="formitem">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) =>
              setFirstStep((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="formitem">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={(e) =>
              setFirstStep((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="formfooter">
        <button className="btn">Next</button>
      </div>
    </>
  );
}

export default StepOne
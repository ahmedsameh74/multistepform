import { useState } from 'react';
import './App.css';
import Back from './assets/back.svg'
import StepOne from './components/StepOne';
import StepThree from './components/StepThree';
import StepTwo from './components/StepTwo';

function App() {
  const [steps, setSteps] = useState([
    {number: 1, title: 'step 1', description: 'Your Info', active: true},
    {number: 2, title: 'step 2', description: 'Select Plan', active: false},
    {number: 3, title: 'step 3', description: 'Add-ons', active: false},
    {number: 4, title: 'step 4', description: 'Summary', active: false},
  ])
  const [firstStep, setFirstStep]= useState({
    name: '',
    email: '',
    phone: '',
  })

  // const [radioItems, setRadioItems] = useState([
  //   { title: "Arcade", price: "$9/mo", img: Back, active: true },
  //   { title: "Advanced", price: "$12/mo", img: Back, active: false },
  //   { title: "Pro", price: "$15/mo", img: Back, active: false },
  // ]);

  const personalInfo = () => {
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
  // const personalInfo2 = () => {
  //   console.log(radioItems);
  //   const handlePlan = (item) => {
  //     const newRad = radioItems.map((i) => {
  //       if (i.title === item.title) {
  //         return { ...i, active: true };
  //       } else {
  //         return { ...i, active: false };
  //       }
  //     })
  //     // setSecondStep(item.title);
  //     setRadioItems(newRad);
  //     // console.log(item.title);
  //     // console.log(radioItems, newRad);
  //   };

    
  //   return (
  //     <>
  //       <div className="formhead">
  //         <h1>SELECT PLAN</h1>
  //         <p>You have the option for monthly or yearly billing</p>
  //       </div>
  //       <div className="formbody">
  //         {radioItems && radioItems.map((item, index) => (
  //           <div
  //             className={
  //               item.active ? "radioItemActive" : "radioItem"
  //             }
  //             key={index}
  //             onClick={() => handlePlan(item)}
  //           >
  //             <div className="img">
  //               <img src={item.img} alt="" />
  //             </div>
  //             <div className="radioInfo">
  //               <h3>{item.title}</h3>
  //               <p>{item.price}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       <div className="formfooter">
  //         <button className="btn">Next</button>
  //       </div>
  //     </>
  //   );
  // }

  const [form, setForm] = useState([
    {ele: <StepOne/>, number: 1, active: true},
    {ele: <StepTwo/>, number: 2, active: false},
    {ele: <StepThree/>, number: 3, active: false},
    {ele: personalInfo, number: 4, active: false},
    

  ])

  const handleStep = (step) => {
    setSteps(steps.map(item => {
      
      if (item.number === step.number) {
        return {...item, active: true}
      } else {
        return {...item, active: false}
      }
    }))
    // const stepId = steps.filter((item) => item.active)[0].number;
    const activeForm = form.filter((item) => item.number === step.number)[0]
      .number;
    // console.log(step, activeForm);
    setForm(
      form.map((item) => {
        if (item.number === activeForm) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
        
      })
    )
  }

  const handleForm = (e) => {
    e.preventDefault();
    // console.log(firstStep, form);
    const step = steps.filter(item => item.active)[0].number
    const activeForm = form.filter(item => item.number === step+1)[0]?.number
    // console.log(step, activeForm);
    if(activeForm){
      setForm(form.map(item => {
      if (item.number === activeForm) {
        return {...item, active: true}
      } else {
        return {...item, active: false}
      }

    }))
    setSteps(
      steps.map((item) => {
        if (item.number === activeForm) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      })
    );
  } else {
    console.log('done')
  }

  }

  


  return (
    <div className="App">
        <div className="formcontainer">
            <div className="back">
            {/* <img src={Back} alt="back" /> */}
              <div className="steps">
              {steps && steps.map((step, index) => {
                return (
                  <div className={step.active ? "step active" : 'step'} key={index} onClick={() => handleStep(step)}>
                    <p className="stepNumber">{step.number}</p>
                    <div className="stepDetails">
                      <p className="stepTitle">{step.title}</p>
                      <p className="stepDescription">{step.description}</p>
                    </div>
                  </div>
                )
              })
              }
              </div>
            </div>
            <form className="form" onSubmit={handleForm}>
              {form && form.map((item, index) => {
                if(item.active) {
                  return (
                    <div key={index}>
                      {item.ele}
                    </div>
                  )
                }else {
                  return null
                }
              })}
            </form>

        </div>
    </div>
  );
}

export default App;

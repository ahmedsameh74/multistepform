import React, { useState } from 'react'

const StepThree = () => {
    const [checkItems, setCheckItems] = useState([
        {id: 1, name: "Online service", desc: "Access to multiplayer games", checked: false},
        {id: 2, name: "Larger content", desc: "Extra 1TB of Cloud save", checked: false},
        {id: 3, name: "Online service", desc: "Access to multiplayer games", checked: false},
    ])

    const handleCheck = (item) => {
        setCheckItems(checkItems.map(ele => {
            if(ele.id === item.id){
            return {...ele, checked: !ele.checked}
            } else {
                return {...ele}
            }
        }))
    }


  return (
    <>
        <div className="formhead">
            <h1>Pick add-ons</h1>
            <p>Add-ons helps enhance your gaming experiment.</p>
        </div>
        <div className="formbody">
        {checkItems.map((item) => {
            return (
                <div className="checkItem" key={item.id} onClick={() => handleCheck(item)}>
                <div className="check">
                    {/* <img src="" alt="" /> */}
                    <div className={item.checked ? "checked" : 'notChecked'}></div>
                    </div>
                <div className="checkInfo">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    </div>
            </div>
            )
        })}
            
        </div>

        <div className="formfooter">
            <button className="btn">Next</button>
        </div>
    </>
  )
}

export default StepThree
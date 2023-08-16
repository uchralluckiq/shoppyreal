import React, { useState } from 'react';
const BMI = () => {
    const [weight, setweight] = useState("");
    const [height, setheight] = useState("");
    const [bmi, setbmi] = useState(" ");
    const [result, setresult] = useState(" ");
    const changeweight = (e) => {
        const newWeight=e.target.value
        setweight(newWeight)
    }
    const changeheight = (e) => {
        const newHeight=e.target.value
        setheight(newHeight)
  }
    const BMI = () =>{ 
        const newbmi=Math.round(weight/((height/100)**2))
        setbmi(newbmi)
        Result()
    }
    const Result = () => {
        if(bmi<18.5)setresult("under weight")
        else if(bmi<24.9)setresult("normal")
        else if(bmi<24.9)setresult("over weight")
        else if(bmi<24.9)setresult("obese")
        else setresult("extremely obese")
    }
    return ( 
        <div>
            <div className='img'></div>
            <div className='bmi'>
                <input value={weight} onChange={changeweight} name='weight' placeholder='kg'/>
                <input value={height} onChange={changeheight} name='height' placeholder='cm'/>
                <button onClick={BMI} >BMI</button>
            </div>
            <div className='tbl'>
            <table>
              <tr>
                <th>BMI</th>
                <th>result</th>
              </tr>
              <tr>
                <td>{bmi}</td>
                <td>{result}</td>
              </tr>
            </table>
            </div>
        </div>
     );
}
export default BMI;
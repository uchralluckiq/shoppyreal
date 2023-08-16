import React, { useState } from 'react';
const Counter = () => {
    const [number, setnumber] = useState(0);
    const increase=()=>{
        setnumber(number+1)
    }
    const decrease=()=>{
        setnumber(number-1)
    }
    const reset=()=>{
        setnumber(0)
    }
    return ( 
        <div>
        </div>
     );
}
export default Counter;
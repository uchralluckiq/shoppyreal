import React, { useState } from 'react';
const Toggle = () => {
    const [toggle, settoggle] = useState("ON");
    const alter=()=>{
        settoggle(!toggle)
    }
    return ( 
        <div className='toggle'>
            <button onClick={alter}>{toggle?"ON":"OFF"}</button>
        </div>
     );
}
export default Toggle;
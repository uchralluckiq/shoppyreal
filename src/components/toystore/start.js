import React, {useState} from "react";
import '../toystore/toystore.css'
const Start = () => {
const [click, setClick] = useState(true);
    return(
        <div className="start">
            <div></div>
            <img className="bird1" src={"pictures/bird.png"} alt=""/>
            <img className="bird2" src={"pictures/bird.png"} alt=""/>
            <img className="cloud_small" src={"pictures/cloud_small.png"} alt=""/>
            <img className="sun" src={"pictures/sun.png"} alt=""/>
            <img className="cloud_big" src={"pictures/cloud_big.png"} alt=""/>
            <div className="mointain1"><div className="mointainShade1"></div></div>
            <div className="mointain2"><div className="mointainShade2"></div></div>
        </div>
    )
}
 
export default Start;
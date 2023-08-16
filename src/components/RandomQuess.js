import React, {useState} from "react";
import { InputNumber } from 'antd';

const Quesser = () => {
    const [secret, setsecret] = useState("");
    const [answer, setanswer] = useState("");
    const [value, setvalue] = useState();
    const [attempt, setattempt] = useState(0);

    const start = () => {
        setsecret(Math.floor(Math.random()*100));
        setanswer("")
    }
    const onChange = (e) => {
        // const a=e.target.value
        // setvalue(a)
        setvalue(e)
        console.log('changed', value);
    };
    const check = () => {
        if(value===secret){
            setanswer(`Correct\nYou won in ${attempt+1} attempt`)}
        else if(value>secret){
            setanswer("high")}
        else{
            setanswer("low")}
        let t=attempt
        t+=1
        setattempt(t)
    }
    console.log(secret)
    return (
        <div className="general">
            <h1>Welcome to the number quessing game</h1>
            <h2>Quess number between 1 and 100</h2>
            <button onClick={start}>start</button>
            <p> </p>

            {secret ? 
            <div className="general">
                <div className="secret">
                    <InputNumber min={1} max={100} onChange={onChange}/>
                    <button onClick={check}>Submit</button>
                </div>
                <div>Attempt №{attempt}</div>
                <h2>{answer}</h2>
            </div>
            : null}

        </div>
    )
  }
export default Quesser;
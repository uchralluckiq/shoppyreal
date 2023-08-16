import React, {useState} from "react";
import { InputNumber } from 'antd';

const Card = () => {
    const yes = () => {
    }
    const no = () => {
    }
    return (
        <div className="general">
            <h1>Welcome to the number quessing card magic</h1>
            <h2>Think any number between 1 and 60</h2>
            <p>Is your number here</p>
            <button onClick={yes}>yes</button>
            <button onClick={no}>no</button>
            {(attempt=6)}
        </div>
    )
  }
export default Card;
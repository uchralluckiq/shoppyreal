import React, {useState } from 'react';
const TictacPad = () => {
    const [box, setbox] = useState(['','','' ,'','','' ,'','','']);
    const [value, setvalue] = useState('X');
    const [winner, setwinner] = useState();

    const change=(i)=>{
        if(!box[i]){
        const next=(value==='X'?'O':'X'); 
        box[i]=next
        setbox(box)
        check()
        setvalue(next)
        }
    }
    const check = () => {
        let result;
        for (let j = 0; j < 3; j++) {
            if(box[j*3]===box[j*3+1]&&box[j*3+1]===box[j*3+2])result=box[j*3];
            if(box[j]===box[j+3]&&box[j+3]===box[j+6])result=box[j];
            if(box[0]===box[4]&&box[4]===box[8])result=box[0];
            if(box[2]===box[4]&&box[4]===box[6])result=box[2];
            console.log("Box",result, j);
            if(result){
                setwinner(result+" is winner");
                break;}
        }
    }

    return (
        <div>
        <h1>{winner}</h1>
        <div className='container'>
            {box.map(
                (box,i)=>{return <button onClick={()=>change(i)} className='box'>{box}</button>}
            )}
        </div>
        </div>
     );
}
export default TictacPad;
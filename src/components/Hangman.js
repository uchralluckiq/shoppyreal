import React, {useState} from "react";
const Hangman = () => {
    const [word, setword] = useState("");
    const [result, setresult] = useState();
    const [chosen, setchosen] = useState();
    const [error, seterror] = useState(1);
    const [alphabet, setalphabet] = useState(["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);

    const words=["dog","woman","tree","king","lion","tower","muscle","apple","angle","power"]

    const start = () => {
        const quess=words[Math.floor(Math.random()*words.length)]
        setchosen(quess)
        seterror(1)
    }

    const sending = () => {
        let fullline=""
        for (let i = 0; i < chosen.length; i++){
            fullline+="_"}
        setword(fullline)
    }

    const check = (i) => {
        console.log(word)
        let a=chosen.split("")
        let c=word.split("")
        let b=error
        for (let j = 0; j < chosen.length; j++) {
            if (a[j] === alphabet[i]){
                c[j]=a[j];
                b++}
        }
        c=c.join("");
        setword(c);
        b=(b>error)?error:error+1;
        seterror(b);
        if(!word.includes("_"))setresult("You Won")
        if(error===7)setresult("You Lost")
    }

    return(
        <div className="general">
            <h1>Welcome To The Hangman</h1>
            <h2>Quess The Word</h2>
            <button onClick={start}>Start</button>
            {chosen?<div><button onClick={sending}>Really?</button></div>:null}
            {(!result)?
            <div className="general">
                <h1>{word}</h1>
                <div className='alphabet'>
                    {alphabet.map(
                        (alphabet,i)=>{return <button onClick={()=>check(i)}>{alphabet}</button>}
                    )}
                </div>
                <img src={`hangman/${error}.jpg`} />
            </div>:<h1>{result}</h1>}
        </div>
    )
}
 
export default Hangman;
import { useState } from "react";

function Questions(){
    const [count,setCount] = useState(0); 
    function handleJump(){
        setCount(count+3) // 3
        setCount((count)=>count+4) // 7
        setCount((count)=>count+5) // 12
    }
    function handleDec(x, y){
        console.log(x, y);
        setCount((count)=>count-1)
    }

    return(
        <div>
            <button onClick={handleJump}>Inc.</button>
            <h1>Count: {count} </h1>
            <button onClick={()=>handleDec(1000, 'sam')} >Dec.</button> 
        </div>
    )
}

export default Questions;
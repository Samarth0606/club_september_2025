import { useState } from "react";

function Questions(){
    const [count,setCount] = useState(0); 
    function handleJump(){
        setCount((count)=>count+4) // 4
        setCount((count)=>count+5) // 9
        setCount(count+3) // 3
        setCount((count)=>count+5) // 3+5 = 8
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
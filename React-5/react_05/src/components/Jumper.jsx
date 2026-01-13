import { useState } from "react";

function Jumper(){
    const [count,setCount] = useState(5); //initial value
    function handleJump(){
        // console.log(count , "1");
        // setCount(count+1)
        setCount((sam)=>sam+1) // holding the prev. value // 6
        // console.log(count , "2");
        // setCount(count+1)
        setCount((mav)=>mav+1) // holding the prev. value // 7
        // console.log(count , "3");
        // setCount(count+1)
        setCount((count)=>count+1) //holding the prev. value // 8  //dominating UI
        // console.log(count , "4");
    }

    return(
        <div>
            <button onClick={handleJump}>Inc.</button>
            <h1>Count: {count} </h1>
        </div>
    )
}

export default Jumper;
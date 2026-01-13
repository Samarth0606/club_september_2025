import { useState } from "react";

function Person({name,age}){
    // const [state,setState] = useState();
    const [username,setUsername] = useState(name);
    const [agee,setAgee] = useState(age)

    function handleClick(){
        setUsername("anonymous")
        setAgee(0)
    }

    return(
        <div>
            <h1>Name: {username} </h1>
            <h1>Age: {agee} </h1>
            <button onClick={handleClick}>logout</button>
        </div>
    )
}
export default Person;

// ----------------------------------------------

// function Person({name,age}){
//     let user = name;
//     function handleClick(){
//         // console.log("Clicked !!!");
//         console.log(user , "before");
//         user = "anonymous"
//         console.log(user , "after");
//     }

//     return(
//         <div>
//             <h1>Name:{user} </h1>
//             <h1>Age:{age} </h1>
//             <button onClick={handleClick}>logout</button>
//         </div>
//     )
// }
// export default Person;
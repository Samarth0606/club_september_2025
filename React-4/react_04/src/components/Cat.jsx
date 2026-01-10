
function Cat({anyName,age,color}){  
    // statement     // 1st world
    
    
    // expressions   // 2nd world
    return(
        <div>
            <h1>Meoow from {anyName}</h1>
            <h1>Color: {color}</h1>
            <h1>Age: {age}</h1>
        </div>
    )
}
export default Cat;


// -----------------------------------------

// function Cat(props){         //object
//     // 1. upar vaali duniya
//     console.log(props , "props");

//     // 2. neeche vaali duniya
//     return(
//         <div>
//             <h1>Meoow from {props.anyName}</h1>
//             <h1>Color: {props.color}</h1>
//             <h1>Age: {props.age}</h1>
//         </div>
//     )
// }
// export default Cat;
function Sam(){
// 1 phase (upar vaali duniya) => (statements) if, else, for, let, while, log
    let a = 10;
    let b = "sam";
    let c = true;
    let d = false;
    let e = null;
    let f = "undefined";
    console.log(a,b,c,d,e,f);

// 2 phase (neeche vaali duniya) => (expressions) ternary, map, filter
    return(
        <div>
            <h1>A: {a}</h1>
            <h1>B: {b}</h1>
            <h1>C: { JSON.stringify(c) }</h1>
            <h1>D: { JSON.stringify(d) }</h1>
            <h1>E: { JSON.stringify(e) }</h1>
            <h1>F: { JSON.stringify(f) }</h1>
        </div>
    )
}

export default Sam;



// ---------------------------------


// function Sam(){
// // 1 phase (upar vaali duniya) => (statements) if, else, for, let, while, log


// // 2 phase (neeche vaali duniya) => (expressions) ternary, map, filter
//     return(
//         <div>

//         </div>
//     )
// }

// export default Sam;
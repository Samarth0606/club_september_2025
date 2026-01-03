
// JSX
let divEl = document.getElementById('root');

let h1= <div>
            <div>
                <div>
                    <h1>hello from jsx h1</h1>
                    <p>hello from jsx p</p>
                </div>
            </div>
        </div>

let divv = ReactDOM.createRoot(divEl)

divv.render(h1)

// -------------------------------------------------
// REACT

// let divEl = document.getElementById('root');

// let h1 = React.createElement('div', {}, 
//     React.createElement('div' , {} , 
//         React.createElement('div' , {} , [
//             React.createElement('h1' , {} , "Hello from nesting h1"),
//             React.createElement('p' , {} , "Hello from nesting para"),
//         ])
//     )
// )

// let divv = ReactDOM.createRoot(divEl)

// divv.render(h1)

// -----------------------------------------------

// REACT

// let divEl = document.getElementById('root');

// let h1 = React.createElement('h1', {id:"sam"}, "Hello from React")


// let divv = ReactDOM.createRoot(divEl)

// divv.render(h1)


// ------------------------------------------
// DOM
// let divEl = document.getElementById('root');

// let h1 = document.createElement('h1');

// h1.innerHTML = "Hello from DOM"

// divEl.appendChild(h1)

// ------------------------------------------

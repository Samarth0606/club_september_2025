// named export
// export function App(){

import Cat from "./components/Cat";

function App(){
  return(
    <div>
      <h1>Hello from App</h1>
      <Cat anyName="Shiba" color="white" age={2} />
      <Cat anyName="Leo" color="red" age={3} />
      <Cat anyName="Tom" color="blue" age={12} />
    </div>
  )
}

export default App;
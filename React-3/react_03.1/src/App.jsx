// import Vohraaa, { Sam } from "./components/Person";

// import Person from "./components/Person";
import Sam from "./components/Sam";

function App(){
  return(
    <section>
      <div>
        <h1>App</h1>
      </div>
      {/* // PROPS */}
      {/* <Person user="SAM" age={9} />
      <Person user="MAV" age={4} />
      <Person user="TOM" age={5} /> */}
      <Sam />
      
    </section>
  )
}

export default App;
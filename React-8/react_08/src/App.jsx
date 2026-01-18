// funcitnal components
import React from 'react'
import Lifecycle from './components/Lifecycle';
import Questions from './components/Questions';

function App() {

  const characters = {
        heroes: [
            {
            name: "IRON MAN",
            powers: "Genius,Rich,IRON Suit",
            costume: "IRON MAN suit",
            },
            {
            name: "ANT MAN",
            powers: "Ant man suit",
            costume: "Ant man suit",
            },
            {
            name: "Spider-man",
            powers: "Reflexes,Speed,Spider-Sense",
            costume: "Spider Suit",
            },
            {
            name: "Bat man",
            powers: "Rich,Bat suit",
            costume: "Bat Suit",
            },
            {
            name: "Super-man",
            powers: "Superhuman strength,Reflexes,Speed",
            costume: "Superman  Suit",
            },
        ],
        villains: [
            {
            name: "Thanos",
            powers: "Superhuman strength,Reflexes,Speed,",
            costume: "Metal armor",
            },
            {
            name: "Venom",
            powers: "shapeshifting and camouflage Symbiotes autonomous defense",
            costume: "black suit",
            },
            {
            name: "Kang the conqueror",
            powers: "time travel, can access all tech",
            costume: "kang armor",
            },
            {
            name: "Joker",
            powers: "clownlike appearance and sick humour",
            costume: "Joker costume",
            },
        ],
    };

  return (
    <div>
      {/* <Lifecycle /> */}
      <Questions characters={characters} />
    </div>
  )
}

export default App;



// // class based component
// import React from "react";
// import Counter from "./components/Counter";
// export default class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//     }
//   }
//   decrement(){
//     this.setState({count:this.state.count-1 })
//   }
//   componentDidMount(){
//     console.log("component mounted");
//   }

//   componentWillUnmount(){
//     console.log("component unmounted");
//   }

//   render(){
//     return(
//       <div>
//         <button onClick={this.decrement.bind(this)} >Dec.</button>
//         <Counter counttt={this.state.count} />
//         <button onClick={ ()=>this.setState({ count:this.state.count+1 }) } >Inc.</button>
//       </div>
//     )
//   }
// }



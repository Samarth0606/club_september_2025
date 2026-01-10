// named export
// export function App(){

// import Cat from "./components/Cat";
// import Product from "./components/Product";
import Gadgets from "./components/Gadgets";
// import UserProfile from "./components/UserProfile";

function App(){
  // const userData = {
  //   name: 'John',
  //   age: 25,
  //   email: 'john@example.com',
  // }
  const products = [
      {
          id: 1,
          name: 'keyboard',
          description: 'Logitech Mechanical Keyboard',
          price: 2000,
      },
      { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
      {
          id: 3,
          name: 'monitor',
          description: 'Lenovo 32-inch display Monitor',
          price: 10000,
      },
      { id: 4, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
      {
          id: 5,
          name: 'speakers',
          description: 'Creative Desktop Speakers',
          price: 5000,
      },
      {
          id: 6,
          name: 'headphones',
          description: 'Sony over-the-ear wired Headphones with mic',
          price: 1500,
      },
      { id: 7, name: 'mobile', description: 'iPhone 12', price: 90000 },
  ]
  return(
    <div>
      <h1>Hello from App</h1>
      {/* <Cat anyName="Shiba" color="white" age={2} />
      <Cat anyName="Leo" color="red" age={3} />
      <Cat anyName="Tom" color="blue" age={12} /> */}

      {/* <Product name="Broom" price={100} /> */}

      {/* <UserProfile anyData={userData} /> */}

      <Gadgets arr={products} />
    </div>
  )
}

export default App;
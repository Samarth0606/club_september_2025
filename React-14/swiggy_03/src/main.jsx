import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Offer from './components/Offer.jsx'
import Help from './components/Help.jsx'
import Signup from './components/Signup.jsx'
import Body from './components/Body.jsx'
import Error from './components/Error.jsx'
import RestaurantDetails from './components/RestaurantDetails.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/offers",
        element: <Offer />
      },
      {
        path:"/help",
        element: <Help />
      },
      {
        path:"/signup",
        element: <Signup />
      },
      {
        path: "/restaurant/:id",
        element:  <RestaurantDetails />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)


// -------- 1st ways ----------

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// )

import React, { Suspense } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
// import Profile from './components/Profile'
const Profile = React.lazy( ()=>import('./components/Profile') )  

// import Dashboard from './components/Dashboard'
const Dashboard = React.lazy( ()=>import('./components/Dashboard') )

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/profile' element={ <Suspense fallback="loading1..." > <Profile /> </Suspense> }  />
        <Route path='/dashboard' element={ <Suspense fallback="loading2..."> <Dashboard /> </Suspense> }  />
      </Routes>
    </div>
  )
}

export default App
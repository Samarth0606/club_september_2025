import React from 'react'
// import UseCallback from './components/UseCallback'
// import Salary from './components/Salary'
import UseRef from './components/UseRef'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/dashboard' element={ <Dashboard /> }/>
        <Route path='/profile' element={ <Profile/> }/>
      </Routes>
      <div>
        {/* <UseCallback /> */}
        {/* <Salary /> */}
        {/* <UseRef /> */}
      </div>
    </>
  )
}

export default App
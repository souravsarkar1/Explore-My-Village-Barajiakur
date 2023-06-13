import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import About from './About'
import Gallery from './Gallery'
import Cultrul from './Cultrul'
import { Admin } from './Admin'
import PrivateReoute from '../Component/PrivateRoute'
import Contract from './Contract'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/cultrul' element={<Cultrul />} />
        <Route path='/contribute' element={
          <PrivateReoute><Admin /></PrivateReoute>
        } />
        <Route path='contract' element={<Contract/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes

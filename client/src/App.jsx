import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Product/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
    </>
  )
}

export default App
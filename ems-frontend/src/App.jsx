import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import EmployeeComponent from './Component/EmployeeComponent'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 

function App() {
  

  return (
    <>
    <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path='/' element = {<ListEmployeeComponent />}></Route>
        

          <Route path='/employees' element = {<ListEmployeeComponent />} ></Route>

          <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>

          <Route path='/update-employee/:id' element={<EmployeeComponent></EmployeeComponent>}></Route>
        </Routes>
        <FooterComponent />   
    </BrowserRouter>
    </>
  )
}

export default App

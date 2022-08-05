import React from 'react'
import './App.css'
import GroupCards from './components/GroupCards';
import VentasCajeroNoAfil from './components/VentasCajeroNoAfil';
import Footer from './components/Footer'
import VentasCajeroAfil from './components/VentasCajeroAfil';
import Login from './components/Login';
import NavBar from './components/NavBar';
import NavBarClean from './components/NavBarClean';
import PivotTable from './components/PivotTable';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import 'webdatarocks/webdatarocks.css'

function App() {

  const [stateLogin, setstateLogin] = useState(true);
  console.log(stateLogin)

  const handleNavBar = () => {
    setstateLogin(true )
  }

  const handleNavBarClean = () => {
    setstateLogin( false )
  }

  const IsLoggedIn = stateLogin
  let menu;
  if (IsLoggedIn) {
    menu = <NavBar />
  } else {
    menu = <NavBarClean />
  }
  return (
    <div className='context'>
      <div className='area'>
        {menu}
        <Routes>
          <Route path='/' element={<Login handleNavBar={handleNavBar} />} />
          <Route path='/VentasCajeroNoAfil' element={<VentasCajeroNoAfil />} />
          <Route path='/VentasCajeroAfil' element={<VentasCajeroAfil />} />
          <Route path='/DinamicasDeVenta' element={<GroupCards />} />
          <Route path='/PivotTable' element={<PivotTable/>}/>
        </Routes>

        <Footer />
        {/* <ul className="circles">
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
            <li></li><li></li>
          </ul> */}
      </div>
    </div>


  );
}


export default App;




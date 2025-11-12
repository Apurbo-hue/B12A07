import React from "react";
import './App.css'
import Footer from './assets/components/footer/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './assets/components/navbar/navbar'
import Banner from "./assets/components/banner/banner";


function App() {

  return (
    <>

       <Navbar></Navbar>

       <Banner></Banner>
    
       <Footer></Footer>
    </>
  )
}

export default App

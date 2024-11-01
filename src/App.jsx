import React from 'react'
import Header from './components/Header/Header'
import './App.scss'


import Hero from './components/Hero/Hero'
import Catalog from './components/Catalog/Catalog'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
   
   <Header/>
   <Hero/>
   <Catalog/>
   <Work/>
   <Footer/>
    
    </>
  )
}

export default App
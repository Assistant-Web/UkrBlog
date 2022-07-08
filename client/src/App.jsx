import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeContainer from './Components/UkrBlog/Home/HomeContainer'
import Header from './Components/UkrBlog/Header/Header'
import Aside from './Components/UkrBlog/Aside/Aside'
import Apps from './Components/Apps/Apps'

const App = () => {
   return (
      <BrowserRouter>
         <div className='app'>
            <Header />
            <div className='panel'>
               <Aside />
               <Routes>
                  <Route path='/' element={ <HomeContainer /> } />
                  <Route path='/apps' element={ <Apps /> } />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
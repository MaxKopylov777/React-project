import React from "react";
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Page from './pages/page'

function App() {
  return (
    <div className="wrapper">
    <Header />
    <Routes>
      <Route path='/' element={<Page img="images/1.jpg" title="Модель 01"/>}/>
      <Route path='/shop' element={<Page img="images/2.jpg" title="Модель 02"/>}/>
      <Route path='/products' element={<Page img="images/3.jpg" title="Модель 03"/>}/>
    </Routes>
    </div>
  );
}

export default App;

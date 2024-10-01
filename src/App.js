import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//import Theme
import Theme from './theme/theme';

//import Components
import Header from './components/header/header';
import Footer from './components/footer/footer';

//import Pages
import HomePage from './pages/home/homepage';
import ErrorPage from './pages/errorpage';



export default function App(){
  return (
    <Theme>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage/>} />
          
          <Route path="*" element={<ErrorPage/>} />
      </Routes>
    <Footer/>
    </Theme>
  );
};

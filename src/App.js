import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Header from './componenets/header.jsx';
import Home from './componenets/Home.jsx';
import Footer from './componenets/Footer.jsx';
import Contact from './componenets/Contact.jsx';
import Services from './componenets/Services.jsx';

import "./styles/app.css"
import "./styles/header.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/contact.css";
import "./styles/services.css";

const App = () => {
  return <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/services' element={<Services/>}/> 
      </Routes>
      <Footer/>
</Router>
}

export default App;
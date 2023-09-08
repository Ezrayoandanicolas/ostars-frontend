// import Logo from './logo.svg';
import React from 'react'
import { HelmetProvider  } from 'react-helmet-async';
import MetaTag from './components/MetaTag'
import Navbar from './components/NavbarDefault'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Product from './components/Product'
import Services from './components/Services'
import Keunggulan from './components/Keunggulan'
import TermsAndCondition from './components/TermsAndCondition'
// import ReactDOM from 'react-dom'
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <MetaTag />
      <div className="mx-auto bg-white round-xl shadow border m-0 p-0 overflow-hidden scroll-smooth">
        <Navbar />
        <Header />
        <AboutMe />
        <Product />
        <Services />
        <Keunggulan />
        <TermsAndCondition />
      </div>
    </HelmetProvider>
  );
}

export default App;

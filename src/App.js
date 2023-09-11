import {Routes, Route} from 'react-router-dom'
// import Logo from './logo.svg';
import React from 'react'
import { HelmetProvider  } from 'react-helmet-async';
import MetaTag from './components/MetaTag'
import Navbar from './components/NavbarDefault'
import MasterLanding from './components/MasterLanding'
// import ReactDOM from 'react-dom'
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <MetaTag />
      <div className="mx-auto bg-white round-xl shadow border m-0 p-0 overflow-hidden scroll-smooth">
        <Navbar />
        <Routes>
          <Route path='/' element={<MasterLanding />}></Route>
        </Routes>
      </div>
      </HelmetProvider>
  );
}

export default App;

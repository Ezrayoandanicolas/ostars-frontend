import Header from "./Header";
// import AboutMe from "./AboutMe";
import Product from "./Product";
import Services from "./Services";
import Keunggulan from "./Keunggulan";
import TermsAndCondition from "./TermsAndCondition";
import Footer from "./Footer";

import React from 'react'
// import ReactDOM from 'react-dom'

const Landing = () => {
    return (
        <>
            <Header />
            {/* <AboutMe /> */}
            <Product />
            <Services />
            <Keunggulan />
            <TermsAndCondition />
            <Footer />
        </>
    )
}

export default Landing
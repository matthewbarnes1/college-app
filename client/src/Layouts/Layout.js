import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Layout =({children}) =>{
    return(
        <>
        <div>
        <Header/>
        <Navbar />

        </div>
        <main>{children}</main>
        <Footer />
        </>

    )
}

export default Layout;
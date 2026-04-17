import React from 'react';

import { Outlet } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>

           <ToastContainer />
        </div>
    );
};

export default Root;
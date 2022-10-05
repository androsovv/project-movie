import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import Modal from "./modal";
import Header from "./header";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default Layout;
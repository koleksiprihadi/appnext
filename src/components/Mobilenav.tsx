"use client";

import React from 'react';
import { Link } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

type Mobilenavprops = {
    name?: string;
    email?: string;
};

const Mobilenav: React.FC<Mobilenavprops> = ({ name="", email="" }) => {
    const [loading, setLoading] = useState(false);
    const showLoading = async () => {
        setLoading(true);
        // Simulate fetch API call
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      };
    
    const showLoadingStatic = () => {
        setLoading(true)
    }

    return (
    <>
    {loading && <Loading />}
    <nav id="menu-mobile" className="navbar bg-light navbar-light navbar-bottom">
    <div className="container justify-content-center gap-3">
        <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }}>
            <div className="mobile-icon-nav"><div className="btn"><i className="fas fa-home"></i><span className="text-mobile-nav">Home</span></div></div>
        </Link>

        <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }}>
            <div className="mobile-icon-nav"><div className="btn"><i className="fas fa-credit-card"></i><span className="text-mobile-nav">Transaksi</span></div></div>
        </Link>
        
        <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }}>
            <div className="mobile-icon-nav"><div className="btn"><i className="fas fa-user"></i><span className="text-mobile-nav">Profile</span></div></div>
        </Link>
    </div>
</nav>
    </>
  );
};
  
  export default Mobilenav;
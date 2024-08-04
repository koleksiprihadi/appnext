"use client";

import React from 'react';
import { Link } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

type Headernameprops = {
    isLogin?: boolean;
    name?: string;
    email?: string;
};

const Headername: React.FC<Headernameprops> = ({ isLogin, name="", email="" }) => {
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
    <div className="background-image-front"></div>
    <div className="user-menu container">
        <header className="d-flex justify-content-center align-items-center flex-wrap justify-content-md-between py-3 p-2 mb-4 border-bottom">
            <div className="user-profile">
            {isLogin ? (
                <>
                <img className="rounded border m-1" src="https://via.placeholder.com/80" />
                <div className="user-name">
                    <h5>{name}</h5>
                    <p>{email}</p>
                </div>
                </>
            ):(
                <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }}><div className="d-flex align-items-center btn-sidebar p-2"><span className="icon-sidebar"><i className="fas fa-sign-in-alt"></i></span><span>Login/Daftar</span></div></Link>
            )}
            </div>
            <div className="col user-menu-button-div">
            <div>
                <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }} id="hide-mobile">
                    <div className="btn fw-bold shadow-sm me-2 m-1 user-menu-button">
                        <i className="fas fa-home"></i>
                        <span className="text-capitalize">Home</span>
                    </div>
                </Link>

                <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }}>
                    <div className="btn fw-bold shadow-sm me-2 m-1 user-menu-button">
                        <i className="fas fa-file-signature"></i>
                        <span className="text-capitalize">CV/Resume Builder</span>
                    </div>
                </Link>

                <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }} id="hide-mobile">
                    <div className="btn fw-bold shadow-sm me-2 m-1 user-menu-button">
                        <i className="fas fa-money-check"></i>
                        <span className="text-capitalize">Transaksi</span>
                    </div>
                </Link>
                
            </div>
            </div>
        </header>
        <div className="dash jarak-atas-bawah-10px"></div>
    </div>
    </>
  );
};
  
  export default Headername;
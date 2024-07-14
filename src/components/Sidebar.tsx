"use client";

import React from 'react';
import { Link } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

type Sidebarprops = {
    isLogin?: boolean;
    isActiveMenu?: string;
};

const Sidebar: React.FC<Sidebarprops> = ({ isLogin, isActiveMenu="overview" }) => {
    const activeMenu = "d-flex align-items-center btn-sidebar p-2 active";
    const inactiveMenu = "d-flex align-items-center btn-sidebar p-2";
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
    <div className="sidebar-wrapper p-4">
            <Link onClick={showLoading} href='/' _hover={{ textDecoration: "none" }}>
                <img src="https://jagoberkarir.com/logo/LOGO%20Web%20220%20x%2060-01%20animate.svg" />
            </Link>

            <div className="dash jarak-atas-bawah-10px"></div>
            
            <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }}>
                <div className={isActiveMenu=='overview' ? activeMenu : inactiveMenu}><span className="icon-sidebar"><i className="fas fa-th"></i></span><span>Overview</span></div>
            </Link>
            
            <Link onClick={showLoadingStatic} href='https://jagoberkarir.com/skillbooster/list/' _hover={{ textDecoration: "none" }}>
                <div className={isActiveMenu=='skillbooster' ? activeMenu : inactiveMenu}><span className="icon-sidebar"><i className="fas fa-signal"></i></span><span>SkillBooster</span></div>
            </Link>
            
            <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }}>
                <div className={isActiveMenu=='bank soal' ? activeMenu : inactiveMenu}><span className="icon-sidebar"><i className="far fa-edit"></i></span><span>Bank Soal</span></div>
            </Link>
            
            <Link onClick={showLoadingStatic} href='https://jagoberkarir.com/categories/blog/' _hover={{ textDecoration: "none" }}>
            <div className={isActiveMenu=='artikel' ? activeMenu : inactiveMenu}><span className="icon-sidebar"><i className="far fa-newspaper"></i></span><span>Artikel</span></div>
            </Link>
            
            <h5>ACCOUNT</h5>
            
            {isLogin && <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }}><div className={isActiveMenu=='profile' ? activeMenu : inactiveMenu}><span className="icon-sidebar"><i className="fas fa-user-tie"></i></span><span>Profile</span></div></Link>}
            
            {isLogin && <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }}><div className="d-flex align-items-center btn-sidebar p-2"><span className="icon-sidebar"><i className="fas fa-sign-out-alt"></i></span><span>Logout</span></div></Link>}
            
            {!isLogin && <Link onClick={showLoading} href='#' _hover={{ textDecoration: "none" }}><div className="d-flex align-items-center btn-sidebar p-2"><span className="icon-sidebar"><i className="fas fa-sign-in-alt"></i></span><span>Login/Daftar</span></div></Link>}
            
            
        </div>
    </>
  );
};
  
  export default Sidebar;
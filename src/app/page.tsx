"use client";

import React from 'react';
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Headername from '@/components/Headername';

const HomePage: React.FC = () => {
  // useEffect(() => {
  //   document.title = "About Us ";
  // }, []);
  const isUserLogin = false;
  const activeMenu = "overview";
  const name = "Krisna Prihadiyanto";
  const email = "krisna@123.com"
  return (
    <>
    <Sidebar isLogin={isUserLogin} isActiveMenu={activeMenu}/>
    <div className="page-content-wrapper p-4">
      <Headername name={name} email={email}/>
    </div>
    </>
  );
};

export default HomePage;

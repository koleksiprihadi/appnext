"use client";

import { Box } from "@chakra-ui/react";
import React from 'react';
import { useEffect } from "react";
import Navbar from '@/components/Navbar';

const HomePage: React.FC = () => {
  // useEffect(() => {
  //   document.title = "About Us ";
  // }, []);
  return (
    <>
    <div>
      <Navbar name="aaa" />
    </div>
    <Box background={"red"}>aaa</Box>
    <button type="button" className="btn btn-secondary">Secondary</button>
    </>
  );
};

export default HomePage;

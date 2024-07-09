"use client";

import React from 'react';

type Navbarprops = {
    name?: string;
};

const Navbar: React.FC<Navbarprops> = ({ name="" }) => {
    return (
    <div className=''>
        <h1>Hello, {name}!</h1>
        <p>This is a simple Next.js component.</p>
    </div>
  );
};
  
  export default Navbar;
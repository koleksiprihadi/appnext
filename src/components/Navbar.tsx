"use client";

import React from "react";

type Navbarprops = {
    name?: string;
    a?: string;
};

const Navbar: React.FC<Navbarprops> = ({ name = "", a = "" }) => {
    return (
        <div className="">
            <h1>Hello, {name}!</h1>
            <p>This is a simple Next.js component.{a}</p>
        </div>
    );
};

export default Navbar;

"use client";

import React from 'react';

type Headernameprops = {
    name?: string;
    email?: string;
};

const Headername: React.FC<Headernameprops> = ({ name="", email="" }) => {
    return (
    <>
    <div className="background-image-front"></div>
    <div className="user-menu container">
        <header className="d-flex justify-content-center align-items-center flex-wrap justify-content-md-between py-3 p-2 mb-4 border-bottom">
            <div className="user-profile">
            <img className="rounded border m-1" src="https://via.placeholder.com/80" />
            <div className="user-name">
                <h5>{name}</h5>
                <p>{email}</p>
                <button className="btn fw-bold shadow-sm me-2 m-1 user-menu-button" id="menu-mobile" type="button">
                <i className="far fa-user"></i>
                <span className="text-capitalize">Pengaturan Profil</span>
                </button>
            </div>
            </div>
            <ul className="justify-content-center nav col-12 col-md-auto mb-2 mb-md-0">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            <div className="col user-menu-button-div">
            <div>
                <button className="btn fw-bold shadow-sm me-2 m-1 user-menu-button" type="button">
                <i className="fas fa-home"></i>
                <span className="text-capitalize">Home</span>
                </button>
                <button className="btn fw-bold shadow-sm me-2 m-1 user-menu-button" type="button">
                <i className="fas fa-file-signature"></i>
                <span className="text-capitalize">CV/Resume Builder</span>
                </button>
                <button className="btn fw-bold shadow-sm me-2 m-1 user-menu-button" type="button">
                <i className="fas fa-money-check"></i>
                <span className="text-capitalize">Transaksi</span>
                </button>
            </div>
            </div>
        </header>
        <div className="dash jarak-atas-bawah-10px"></div>
    </div>
    </>
  );
};
  
  export default Headername;
import React from 'react';
import logo from "../../assets/logo.png";
import dollar1 from "../../assets/dollar-1.png";

const Navbar = ({availableBalance}) => {
    return (
        <div>
            <div className="w-[1240px] mx-auto">
                <div className="navbar">
                    <div className="flex-1">
                        <a className="text-xl">
                            <img className="w-[60px] h-[60px]" src={logo} alt="" />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center gap-12 mr-12 text-[#131313b3]">
                          <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Fixture</a>
                        </li>
                        <li>
                            <a href="#">Teams</a>
                        </li>
                        <li>
                            <a href="#">Schedules</a>
                        </li>
                        </div>
                        <button className="btn flex items-center">
                            <span>{availableBalance}</span>
                            <span>Coin</span>
                            <img src={dollar1} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
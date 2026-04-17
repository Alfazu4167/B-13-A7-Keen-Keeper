import React from 'react';
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router';
import { RiHome2Line } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';
import { IoTimeOutline } from 'react-icons/io5';

const Navbar = () => {
    return (

        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <img src={logo} alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 items-center gap-3">
                    <li>
                        <NavLink to={"/"} className={({ isActive }) => `font-semibold flex items-center  ${isActive ? "btn bg-[#244d3f] text-white" : "text-[#64748b]"}`}> <span className='text-[20px]'><RiHome2Line></RiHome2Line></span> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/timeline"} className={({ isActive }) => `font-semibold flex items-center text-[#64748b] ${isActive ? "btn bg-[#244d3f] text-white" : "text-[#64748b]"}`}> <span className='text-[18px]'><IoTimeOutline></IoTimeOutline></span> Timeline</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/stats"} className={({ isActive }) => `font-semibold flex items-center text-[#64748b] ${isActive ? "btn bg-[#244d3f] text-white" : "text-[#64748b]"}`}> <span className=''><ImStatsDots></ImStatsDots></span> Stats</NavLink>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;
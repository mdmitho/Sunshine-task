import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../../src/img/logo.png";

const Header = () => {


    const menuItem = (
      <>
        <li className="font-bold m-2">
          <NavLink to="/">Home </NavLink>
        </li>
        <li className="font-bold m-2">
          <NavLink to="/service">Service</NavLink>
        </li>
        <li className="font-bold m-2">
          <NavLink to="/aboutUs">About Us</NavLink>
        </li>

        <li className="font-bold m-2">
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className="font-bold m-2">
          <NavLink to="/login">Login</NavLink>
        </li>
        

     
      </>
    );

    return (
      <div>
        <div className="navbar  container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {menuItem}
              </ul>
            </div>
            <div className="">
              <img className="h-10 w-10 " src={logo} alt="" />
            </div>
            <NavLink to="/" className="btn btn-ghost normal-case font-bold  text-xl">
              Smart Watch
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  p-0">{menuItem}</ul>
          </div>
        </div>
      </div>
    );
};

export default Header;
import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="flex items-center bg-slate-500  p-3 justify-between ">
        <h1 className="font-bold text-2xl cursor-pointer">COMPANY NAME</h1>
        <ul className="flex items-center gap-10">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
        <div className="flex gap-5">
          <Link to="/login" className="cursor-pointer border-2 border-red-500 py-2 px-3 rounded-lg hover:bg-red-500" >Log In</Link>
          <Link to="/signup" className="cursor-pointer border-2 border-red-500 py-2 px-3 rounded-lg hover:bg-red-500" >Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" shadow-lg py-4 px-2">
      <div className="navBar container mx-auto flex justify-between">
        <div className="logo">
          <h3 className="text-xl font-semibold"><Link to={"/"}>Phone Shop</Link></h3>
        </div>
        <div className="nav flex gap-3">
          <Link to={"/"}>Home</Link>
          <Link to={"/favorites"}>Favorites</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

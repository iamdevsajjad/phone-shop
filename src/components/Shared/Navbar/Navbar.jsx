import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" shadow-lg py-4 px-2 sticky top-0">
      <div className="navBar container mx-auto flex justify-between">
        <div className="logo">
          <h3 className="text-xl font-semibold">
            <Link to={"/"}>Phone Shop</Link>
          </h3>
        </div>
        <div className="nav flex gap-3">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-600 underline" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-600 underline" : ""
            }
          >
            Favorites
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-600 underline" : ""
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

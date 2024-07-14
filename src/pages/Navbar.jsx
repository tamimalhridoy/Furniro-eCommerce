import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="py-8">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <ul className="flex text-lg font-primary font-medium gap-11">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <div className="icon">
          <ul className="flex gap-10 text-xl">
            <li>
              <Link to="/">
                <FaUser />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaSearch />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaRegHeart />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import CartSidebar from "../CartSidebar/CartSidebar";

const Navbar = () => {
  const [siteCart, setShowSiteCart] = useState(false);
  const hendelsitebar = (result) => {
    setShowSiteCart(result);
  };

  return (
    <>
      <nav className="nav py-8">
        <div className="container flex items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" className="w-full" alt="" />
            </Link>
          </div>
          <ul className="flex text-lg font-primary font-medium gap-11">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
              <li onClick={() => setShowSiteCart(true)}>
                <FaShoppingCart className="cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {siteCart && <CartSidebar hendelsitebar={hendelsitebar} />}
    </>
  );
};

export default Navbar;

import React from 'react';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-blue-500">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="/">Home</Link></li>
     
              <li><Link href="/Pages/About">About</Link></li>
              <li><Link href="/Pages/Blog">Blog</Link></li>
              <li><Link href="/Pages/Contact">Contact</Link></li>
      </ul>
    </div>
    <a href="/" className="btn btn-ghost normal-case text-xl">Sports-Zone</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
              <li> <Link href="/">Home</Link></li>
              <li><Link href="/Pages/Blog">Blog</Link></li>
              <li><Link href="/Pages/About">About</Link></li>
              <li><Link href="/Pages/Contact">Contact</Link></li>
            </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-white hover:bg-sky-400 border-none">Sing-Up</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;
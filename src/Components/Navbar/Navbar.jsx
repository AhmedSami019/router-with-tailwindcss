import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from 'lucide-react';
const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Blog", path: "/blog" },
];

const Navbar = () => {
const [open, setOpen] = useState()

const link = routes.map((item) => (
          <Link key={item.id} item={item}></Link>
        ))

  return (
    <div className="flex justify-between text-lg mx-8 py-6">
      <div className="flex " onClick={()=> setOpen(!open)}>
        <ul className={`md:hidden absolute duration-100 ${open ? "top-12": "-top-40"} divide-y-2 divide-gray-600`}>
          {
            link
          }
        </ul>
        {
          open ? <X className="md:hidden"></X> :  <Menu className="md:hidden" />
        }
        <h1 className="ml-5">MyNav</h1>
      </div>
      <ul className="hidden md:flex ">
        {
            link
        }
      </ul>
      <button>Sign in</button>
    </div>
  );
};

export default Navbar;

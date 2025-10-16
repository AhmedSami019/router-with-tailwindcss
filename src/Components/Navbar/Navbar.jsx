import React from 'react';
import Link from './Link';
const routes = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Services', path: '/services' },
  { id: 4, name: 'Contact', path: '/contact' },
  { id: 5, name: 'Blog', path: '/blog' },
];


const Navbar = () => {
    return (
        <div className='flex justify-between text-lg mx-8 py-6'>
            <h1>MyNav</h1>
            <ul className='flex'>
                {
                    routes.map(item => <Link item={item}></Link>)
                }
            </ul>
            <button>Sign in</button>
        </div>
    );
};

export default Navbar;
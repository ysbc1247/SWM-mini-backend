import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="basis-1/5 py-6 px-10 max-sm:flex max-sm:items-center max-sm:justify-between">
      <div className="mt-24 max-sm:mt-0 text-4xl max-sm:text-lg">
        <p className=" font-light">Product</p>
        <p className=" font-semibold">Maestro</p>
      </div>
      <ul className="mt-12 text-lg max-sm:mt-0 max-sm:flex max-sm:text-sm">
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? '600' : '',
              color: isActive ? 'black' : 'gray',
            };
          }}
          to="/"
        >
          <li className="my-5 max-sm:mx-5">Home</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? '600' : '',
              color: isActive ? 'black' : 'gray',
            };
          }}
          to="/add"
        >
          <li className="my-5">Make product</li>
        </NavLink>
      </ul>
    </nav>
  );
}

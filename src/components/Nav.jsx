import React from "react";
import logo from "../assets/svg/db.svg";
import { NavLink } from "react-router";

export const Nav = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex justify-center items-center gap-5">
              <img src={logo} alt="Logo" width={40} />
              <h1 className="mt-5 text-center text-3xl font-clash font-black pb-5">
                Dragon Ball API
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <NavLink
                  className={({ isActive }) => isActive && "active"}
                  to="/"
                >
                  Inicio
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive && "active"}
                  to="/planets"
                >
                  Planetas
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive && "active"}
                  to="/search"
                >
                  Búsqueda
                </NavLink>
              </div>
            </div>
            {/* <div className="hidden md:flex items-center gap-4">
                            <div class="relative">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span class="material-icons text-gray-400 text-lg">search</span>
                                </span>
                                <input
                                    class="w-64 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 text-sm rounded-full focus:ring-primary focus:border-primary block pl-10 p-2.5 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 focus:w-80"
                                    placeholder="Search fighters..." type="text" />
                            </div>
                            <button
                                class="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-bold shadow-glow transition-all uppercase tracking-wider">
                                Login
                            </button>
                        </div> */}
            {/* <div class="-mr-2 flex md:hidden">
                            <button
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                type="button">
                                <span class="sr-only">Open main menu</span>
                                <span class="material-icons">menu</span>
                            </button>
                        </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

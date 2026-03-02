import React from "react";
import { Outlet } from "react-router";
import { Nav } from "../components/Nav";

export const DBLayout = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <Nav />
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-orange-600/5 blur-3xl pointer-events-none"></div>
      <div className="mt-22" />
      <Outlet />
    </div>
  );
};

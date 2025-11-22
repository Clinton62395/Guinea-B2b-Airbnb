import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Nabar";

export const HomeLayout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

import React from 'react';
import { RenderIcon } from '../icons';
import Link from 'next/link';

export function HeaderLayout() {
  return (
    <header className="bg-white fixed top-0 z-[1000] right-0 left-0 w-full">
      <div className="w-full flex items-center justify-between container">
        {/* <RenderIcon name="logo" className="!w-44 !h-16 text-secondary" /> */}
        <Link href="/">
          <div className="w-44 h-16 bg-secondary"></div>
        </Link>

        {/* checkbox shadow */}
        <input id="navbar" hidden type="checkbox" />

        {/* navbars */}
        <label
          htmlFor="navbar"
          className="w-10 h-10 bg-secondary rounded flex items-center justify-center cursor-pointer"
        >
          <RenderIcon name="bars" className="text-white" />
        </label>

        {/* drawer */}
        <div className="drawer fixed top-0 right-0 bottom-0 h-screen bg-white w-80 z-[999] translate-x-full transition-all ease-linear p-4">
          <div className="flex items-center">
            <label htmlFor="navbar" className="absolute top-4 right-4 cursor-pointer">
              <RenderIcon name="close" />
            </label>
            <p className="text-3xl w-full text-center text-secondary font-medium mt-5">Danh mục</p>
          </div>
          <nav className="h-16"></nav>
        </div>
        <label
          htmlFor="navbar"
          className="navbar-overlay fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-secondary opacity-30 invisible transition-all ease-linear"
        ></label>
      </div>
    </header>
  );
}

"use client";

import Image from 'next/image';
import React, { useState } from 'react';

const Page = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="relative">
      <div className="relative flex">
      <div className="bg-gradient-to-r from-black to-transparent transition-all absolute inset-0 z-10">
      <div className="flex items-center flex-1">
        <ul className="lg:flex text-center text-white lg:flex-row max-sm:hidden sm:hidden md:hidden lg:space-x-6 relative lg:left-6 lg:-top-0 sm:top-4 max-sm:top-4">
          <li>UPCOMING FIGTHS</li>
          <li>EVENTS</li>
          <li>GENESIS PASS</li>
          <li>VIDEOS</li>
          <li>BLOGS</li>
        </ul>
      </div>
      <button onClick={handleClick} className="lg:hidden absolute right-4 top-2 mt-2 z-50">
        {click ? (
          <Image
            src="/close.png"
            width={40}
            height={2}
            className="ml-2 cursor-pointer w-auto"
            alt="close menu"
          />
        ) : (
          <Image
            src="/menu.png"
            width={40}
            height={2}
            className="ml-2 cursor-pointer w-auto"
            alt="open menu"
          />
        )}
      </button>
        <div className="p-14 mt-48 align-middle text-center">
          <h4 className="text-white text-2xl">Exclusive Access to the Heart of Boxing</h4>
          <h1 className="text-9xl text-white">STEP INTO THE RING</h1>
          <h1 className="text-9xl bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold text-transparent bg-clip-text">
            IPBL GENESIS PASS
          </h1>
          <img src="./boxing.png" className="relative -top-28 inline-block shadow-6xl" alt="Interface" />
        </div>
      </div>
      <div className="w-full">
        <img src="./heroBackground.png" className="relative inline-block w-full max-h-screen" alt="Interface" />
      </div>
    </div>

    </div>
  );
};

export default Page;

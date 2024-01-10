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
          <div className="relative lg:flex justify-between items-center p-10">
            <div>
              <ul className={`lg:flex text-center text-white lg:flex-row max-sm:flex-col lg:space-x-6 relative lg:left-6 lg:-top-0 sm:top-4 max-sm:top-4 ${click ? 'block' : 'max-sm:hidden sm:hidden md:hidden'}`}>
                <li>UPCOMING FIGHTS</li>
                <li>EVENTS</li>
                <li>GENESIS PASS</li>
                <li>VIDEOS</li>
                <li>BLOGS</li>
              </ul>
            </div>
            <div>
              <img src="./Logo.png" className="relative mr-4 lg:mr-60 max-sm:hidden" alt="Interface" />
            </div>
            <div>
              <img src="./frame2.png" className="relative max-sm:hidden" alt="Interface" />
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
          </div>

          <div className="p-14 max-sm:p-4 lg:mt-28 max-sm:mt-24 align-middle text-center">
            <img src="./logo.png" className="relative inline-block lg:hidden max-sm:mb-24" alt="Interface" />
            <h4 className="text-white text-2xl max-sm:text-sm">Exclusive Access to the Heart of Boxing</h4>
            <h1 className="text-9xl text-white max-sm:text-7xl">STEP INTO THE RING WITH</h1>
            <h1 className="text-9xl max-sm:text-6xl bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold text-transparent bg-clip-text">
              IPBL GENESIS PASS
            </h1>
            <img src="./boxing.png" className="relative -top-28 max-sm:-top-20 inline-block shadow-6xl max-sm:hidden" alt="Interface" />
            <img src="./boxing2.png" className="relative -top-28 max-sm:-top-20 inline-block shadow-6xl lg:hidden" alt="Interface" />
          </div>
        </div>

        <div className="w-full">
          <img src="./heroBackground.png" className="relative inline-block w-full max-h-screen max-sm:hidden" alt="Interface" />
          <img src="./heroMobile.png" className="relative inline-block w-full max-h-screen lg:hidden" alt="Interface" />
        </div>
      </div>
    </div>
  );
};

export default Page;

import React from 'react';

const Page = () => {
  return (
    <div className="relative flex">
      <div className="bg-gradient-to-r from-black to-transparent transition-all absolute inset-0 z-10">
        <div className="p-14 max-sm:p-6 mt-20 align-middle">
          <h4 className="text-white text-2xl max-sm:text-md">The CountDown Begins</h4>
          <h1 className="text-6xl max-sm:text-3xl text-white">GET READY FOR THE NFT MINT ON</h1>
          <h1 className="text-6xl max-sm:text-4xl bg-gradient-to-r from-textGradientStart to-textGradientFrom font-bold text-transparent bg-clip-text">
            JANUARY 20TH
          </h1>
          <div className="text-white flex max-sm:mt-10">
            <span className="flex flex-col">
              <span className="text-9xl max-sm:text-8xl">02 :</span>
              <span className="pl-10 pt-6 max-sm:pl-5 text-2xl">Days</span>
            </span>
            <span className="flex flex-col">
              <span className="text-9xl max-sm:text-8xl"> 54 : </span>
              <span className="pl-10 pt-6 max-sm:pl-5 text-2xl">Hours</span>
            </span>
            <span className="flex flex-col pl-2">
              <span className="text-9xl max-sm:text-8xl"> 16</span>
              <span className="pl-10 pt-6 max-sm:pl-5 text-2xl">Minutes</span>
            </span>
          </div>
          <button type="button" className="py-5 px-10 me-2 mb-2 mt-10 max-sm:mt-20 text-sm font-medium focus:outline-none rounded-3xl border border-gray-200 text-white m-2">
            <h1 className="text-xl text-white">PREPARE FOR MINTING</h1>
          </button>
        </div>
      </div>
      <div className="w-full">
        <img src="./Rectangle.png" className="relative inline-block w-full max-h-screen max-sm:hidden" alt="Interface" />
        <img src="./RectangleMobile.png" className="relative inline-block w-full max-h-screen lg:hidden" alt="Interface" />
      </div>
    </div>
  );
}

export default Page;

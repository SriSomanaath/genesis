import React from 'react';

const Page = () => {

  return (
    <div className="relative flex -z-10">
      <div className="bg-gradient-to-r from-black to-transparent transition-all absolute inset-0 z-10">
        <div className="p-14 max-sm:p-4 mt-20 max-sm:mt-44 align-middle">
          <h4 className="text-white text-xl max-sm:mb-4">Beyond Just a Ticket - A journey into boxing</h4>
          <h1 className="text-9xl text-white max-sm:text-[3.4rem]">1000 NFTS </h1>
          <h1 className="text-9xl text-white max-sm:text-[3.4rem]">6 BLOCKCHAINS</h1>
          <h1 className="text-9xl max-sm:text-[3.4rem] bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold text-transparent bg-clip-text">
            ENDLESS EXCITEMENT
          </h1>
          <button type="button" className="py-5 px-10 mr-2 mb-2 max-sm:px-5 max-sm:mt-12 mt-10 text-sm font-medium focus:outline-none rounded-3xl border border-gray-200 text-white m-2">
            <h1 className="text-xl max-sm:text-sm text-white">EXPLORE THE ADVENTURE</h1>
          </button>
        </div>
      </div>
      <div className="w-full">
        <img src="./Rectangle2.png" className="relative inline-block w-full max-h-screen max-sm:hidden" alt="Interface" />
        <img src="./Rectangle2Mobile.png" className="relative inline-block w-full max-h-screen lg:hidden" alt="Interface" />
      </div>
    </div>
  );
}

export default Page;

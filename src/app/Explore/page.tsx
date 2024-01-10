import React from 'react';

const Page = () => {
  return (
    <div className="relative flex -z-10">
      <div className="bg-gradient-to-r from-black to-transparent transition-all absolute inset-0 z-10">
        <div className="p-14 mt-20 align-middle">
          <h4 className="text-white text-2xl">Beyond Just a Ticket - A journey into boxing</h4>
          <h1 className="text-9xl text-white">1000 NFTS </h1>
          <h1 className="text-9xl text-white">6 BLOCKCHAINS</h1>
          <h1 className="text-9xl bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold text-transparent bg-clip-text">
            ENDLESS EXCITEMENT
          </h1>
          <button type="button" className="py-5 px-10 me-2 mb-2 mt-10 text-sm font-medium focus:outline-none bg-black rounded-3xl border border-gray-200 text-white m-2">
            <h1 className="text-xl bg-black text-white">EXPLORE THE ADVENTURE</h1>
          </button>
        </div>
      </div>
      <div className="w-full">
        <img src="./Rectangle2.png" className="relative inline-block w-full max-h-screen" alt="Interface" />
      </div>
    </div>
  );
}

export default Page;

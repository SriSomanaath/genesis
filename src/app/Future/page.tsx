import React from 'react';

const Page = () => {
  return (
    <div className="flex items-center bg-black text-white justify-center">
      <div>
        <img src="./boxing.png" className="w-200 h-100" alt="Interface" />
      </div>
      <div className="p-14 text-left items-center">
        <div className="flex">
          <h1 className="text-9xl">READY TO </h1>
          <h1 className="text-9xl bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold text-transparent bg-clip-text">&nbsp;EMBRACE</h1>
        </div>
        <h1 className="text-9xl bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold text-transparent bg-clip-text">
        THE FIGTH?
        </h1>
        <h1 className="pt-4">Secure Your IPBL Genesis Pass Now!</h1>
        <button type="button" className="py-5 px-10 me-2 mb-2 mt-10 text-sm font-medium focus:outline-none bg-black rounded-3xl border border-gray-200 text-white m-2">
            <h1 className="text-xl bg-black text-white">GET MY PASS</h1>
          </button>
      </div>
    </div>
  );
}

export default Page;

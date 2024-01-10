import Image from 'next/image';

const page = () => {
  return (
    <main>
    <div className="bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom flex flex-col">
      <div className="text-center text-5xl pt-16 text-white">PERKS THAT PACK A PUNCH</div>
      <div className="flex gap-4 p-32 pt-10 pb-12 items-center justify-center">
        <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-perk1 to-transparent">
          <img className="pr-10" src="/icon1.png" alt="card" />
          <div className="px-6 pr-[6.5rem]">
            <span className="block px-5 text-white pb-4 relative -top-4 right-4">Unlimited IPBL Match<br />Streaming</span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-perk2 to-transparent">
          <img className="pr-10" src="/icon2.png" alt="card" />
          <div className="px-6 pr-[6.5rem]">
            <span className="block px-5 text-white pb-4 relative -top-4 right-4">Unlimited IPBL Match<br />Streaming</span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-perk3 to-transparent">
          <img className="pr-10" src="/icon3.png" alt="card" />
          <div className="px-6 pr-[6.5rem]">
            <span className="block px-5 text-white pb-4 relative -top-4 right-4">Unlimited IPBL Match<br />Streaming</span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-perk4 to-transparent">
          <img className="pr-10" src="/icon4.png" alt="card" />
          <div className="px-6 pr-[6.5rem]">
            <span className="block px-5 text-white pb-4 relative -top-4 right-4">Unlimited IPBL Match<br />Streaming</span>
          </div>
        </div>

      </div>
      <div>
      <div className="mt-auto text-center pb-20">
        <button type="button" className="py-5 px-10 text-sm font-medium focus:outline-none bg-textGradientVia rounded-3xl border border-gray-200 text-white mb-2">
          EXPLORE THE ADVENTURE
        </button>
      </div>
      </div>
    </div>
    <div className="bg-black p-10">
          <div className="text-center">
              <div className="flex items-center justify-center text-6xl">
                <div className="text-white">YOUR TEAM,</div>
                <div className="bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold text-transparent bg-clip-text">YOUR GLORY</div>
              </div>
                <h5 className="text-white pt-4">Each NFT Tied to Fight Club's Fate</h5>
          </div>
          <div>
          <div  className="flex flex-row items-center space-x-6 py-10 justify-center max-sm:space-x-0 max-sm:pl-20 max-sm:pr-20 max-sm:gap-2">
              <div><Image src="/club1.png" width={200} height={10} alt="Picture of the author" className="max-sm:max-w-1/6 max-sm:h-3" /></div>
              <div><Image src="/club2.png" width={200} height={10} alt="Picture of the author" className="max-sm:max-w-1/6 max-sm:h-3" /></div>
              <div><Image src="/club3.png" width={200} height={10} alt="Picture of the author" className="max-sm:max-w-1/6 max-sm:h-3" /></div>
              <div><Image src="/club4.png" width={200} height={10} alt="Picture of the author" className="max-sm:max-w-1/6 max-sm:h-3" /></div>
              <div><Image src="/club5.png" width={100} height={10} alt="Picture of the author" className="max-sm:max-w-1/6 max-sm:h-3" /></div>
              <div><Image src="/club6.png" width={200} height={10} alt="Picture of the author" className="max-sm:max-w-1/6 max-sm:h-3" /></div>
          </div>
          </div>
    </div>
  </main>
  )
}

export default page
import Image from 'next/image';

const page = () => {
  return (
    <main>
    <div className="bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom flex flex-col">
      <div className="text-center text-5xl max-sm:text-4xl pt-16 text-white">PERKS THAT PACK A PUNCH</div>
      <div className="flex gap-4 p-32 max-sm:p-10 pt-10 pb-12 items-center justify-center">
        <div className="max-sm:flex max-sm:flex-col lg:flex lg:flex-row">

            <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-perk1 to-transparent lg:mr-4">
              <img className="pr-10" src="/icon1.png" alt="card" />
              <div className="px-6 pr-[6.5rem] max-sm:pr-0">
                <span className="block px-5 text-white pb-4 max-sm:pb-2 relative -top-4 right-4 max-sm:text-sm">Unlimited IPBL Match<br className="max-sm:hidden" /> Streaming</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-perk2 to-transparent max-sm:mt-4">
              <img className="pr-10" src="/icon2.png" alt="card" />
              <div className="px-6 pr-[6.5rem] max-sm:pr-0">
                <span className="block px-5 max-sm:px-0 text-white pb-4 max-sm:pb-2 relative -top-4 right-4 max-sm:text-sm">Early Bird Access <br className="max-sm:hidden" />to IPBL Merchandise</span>
              </div>
            </div>

        </div>

      <div className="max-sm:flex max-sm:flex-col lg:flex lg:flex-row">

          <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-perk3 to-transparent lg:mr-4">
              <img className="pr-10 max-sm:w-[240px]" src="/icon3.png" alt="card" />
              <div className="px-6 pr-[8rem] max-sm:pr-0">
                <span className="block px-5 text-white pb-4 max-sm:pb-2 relative -top-4 right-4 max-sm:text-sm">VIP Treatment at <br className="max-sm:hidden" />Global Events</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-perk4 to-transparent max-sm:mt-4">
              <img className="pr-10 max-sm:w-[240px]" src="/icon4.png" alt="card" />
              <div className="px-6 pr-[6.5rem] max-sm:pr-0">
                <span className="block px-5 text-white pb-4 max-sm:pb-2 relative -top-4 right-4 max-sm:text-sm">Exclusive TIAR<br />Taken Discounts</span>
              </div>
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
              <div className="flex items-center justify-center text-6xl max-sm:text-4xl">
                <div className="text-white">YOUR TEAM,</div>
                <div className="bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold text-transparent bg-clip-text">YOUR GLORY</div>
              </div>
                <h5 className="text-white pt-4">Each NFT Tied to Fight Club's Fate</h5>
          </div>
          <div>
          <div  className="flex flex-row items-center space-x-6 py-10 justify-center max-sm:space-x-0 max-sm:gap-2">
            <div className="flex max-sm:flex-col">
              <div><Image src="/club1.png" width={200} height={10} alt="Picture of the author"  /></div>
                <div><Image src="/club2.png" width={200} height={10} alt="Picture of the author"  /></div>
                <div><Image src="/club3.png" width={200} height={10} alt="Picture of the author"  /></div>
            </div>

            <div className="flex max-sm:flex-col">
              <div><Image src="/club4.png" width={200} height={10} alt="Picture of the author"  /></div>
              <div><Image src="/club5.png" width={200} height={10} alt="Picture of the author"  /></div>
              <div><Image src="/club6.png" width={200} height={10} alt="Picture of the author"  /></div>
            </div>

          </div>
          </div>
    </div>
  </main>
  )
}

export default page
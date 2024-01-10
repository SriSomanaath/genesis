import Image from 'next/image';

const page = () => {
  return (
    <main>
    <div className="bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom flex flex-col">
      <div className="text-center max-sm:text-left pt-16 max-sm:pl-10 text-white">Join a Community Shaping the Future of Boxing</div>
      <div className="flex gap-4 text-7xl max-sm:text-5xl p-32 max-sm:p-10 pt-10 pb-12 items-center justify-center text-white">
        MORE THAN FANS - IPBL PIONEERS
      </div>
      <div>
      <div className="mt-auto text-center pb-20 max-sm:text-left max-sm:pl-10">
        <button type="button" className="py-5 px-10 text-sm font-medium focus:outline-none bg-textGradientVia rounded-3xl border border-gray-200 text-white mb-2">
          JOIN THE MOVEMENT
        </button>
      </div>
      </div>
    </div>
  </main>
  )
}

export default page
import Image from 'next/image';

const page = () => {
  return (
    <main>
    <div className="bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom flex flex-col">
      <div className="text-center pt-16 text-white">Join a Community Shaping the Future of Boxing</div>
      <div className="flex gap-4 text-7xl p-32 pt-10 pb-12 items-center justify-center text-white">
        MORE THAN FANS - IPBL PIONEERS
      </div>
      <div>
      <div className="mt-auto text-center pb-20">
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
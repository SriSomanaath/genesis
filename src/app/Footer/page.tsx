import React from 'react';

const Page = () => {
  return (
    <footer className='max-container bg-footerBg'>
      <div className='flex flex-row justify-between items-start gap-8 flex-wrap max-lg:flex-col p-10'>
        <div className='flex flex-col justify-between items-start space-y-20'>
          <div>
            <a href='/'>
              <img
                src="Logo.png"
                alt='logo'
                width={300}
                height={60}
                className='m-0'
              />
            </a>
          </div>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <img
              src="copyright-sign.svg"
              alt='copyright sign'
              width={30}
              height={20}
              className='rounded-full m-0'
            />
            <p className="text-gray-600 text-3xl">2023 IPBL. ALL RIGHTS ARE RESERVED</p>
          </div>
        </div>

        <div className='flex flex-col justify-between lg:gap-8 flex-wrap space-y-14'>
          <div>
            <ul className="text-white flex space-x-20">
              <li className='font-montserrat leading-normal text-white-400 hover:text-slate-gray text-3xl'>UPCOMING FIGHTS</li>
              <li className='font-montserrat leading-normal text-white-400 hover:text-slate-gray text-3xl'>HOME</li>
              <li className='font-montserrat leading-normal text-white-400 hover:text-slate-gray text-3xl'>EVENTS</li>
              <li className='font-montserrat leading-normal text-white-400 hover:text-slate-gray text-3xl'>VIDEOS</li>
              <li className='font-montserrat leading-normal text-white-400 hover:text-slate-gray text-3xl'>BLOGS</li>
            </ul>
          </div>
          <div>
            <span className="text-white text-3xl">FOLLOW US</span>
            <span>
              <img
                src="frame1.png"
                alt='copyright sign'
                width={200}
                height={10}
                className='rounded-full m-0 mr-2 mt-2'
              />
            </span>
          </div>
        </div>

        <div className='flex flex-col justify-between text-white items-left pr-32 text-3xl'>
          <div className="mb-2">
              <span className="text-white flex items-center">
                <img
                  src="mail.png"
                  alt='copyright sign'
                  width={30}
                  height={20}
                  className='rounded-full m-0 mr-2'
                />
                INFO@IPBL.IN
              </span>
              <span className="text-white flex items-center">
                <img
                  src="phone.png"
                  alt='copyright sign'
                  width={30}
                  height={20}
                  className='rounded-full m-0 mr-2'
                />
                +91-9971857332
              </span>
          </div>
          <div className="flex mt-24 gap-2">
            <p className="text-gray-600 text-3xl">PRIVACY</p>
            <p className="text-gray-600 text-3xl">COMPLAINTS</p>
            <p className="text-gray-600 text-3xl">CONTACT US</p>
          </div>
        </div>

      </div>
      <div className="text-center">
        <span className="text-[11rem] text-white">#BOXING BEYOND </span> 
        <span className="text-[11rem] bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold text-transparent bg-clip-text">IMAGINATION</span>
      </div>
    </footer>
  );
}

export default Page;

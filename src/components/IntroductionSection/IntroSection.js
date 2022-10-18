import React from 'react'

function IntroSection() {
  return (
    <div className='bg-[#0a192f] flex justify-center w-full relative top-[62px] h-auto pl-10 pt-10 pb-12'>
        <div className='flex-col w-3/4 m-auto'>
            <p className='text-emerald-300 font-medium mb-8 w-5/8 sm:w-2/4 h-5/7  text-justify'>Hi, my name is</p>
            <p className='text-[#e0e7ff] font-bold text-4xl sm:text-5xl md:text-7xl mb-8 w-5/8 sm:w-4/4 h-5/7 text-justify'>Subhajit Ghosh</p>
            <p className='text-[#b7bbc8] font-bold text-4xl sm:text-5xl md:text-7xl mb-8 w-4/6 sm:w-4/6 h-5/7 text-justify'>I build things for the web.</p>
            <div className='text-[#9599a5] font-medium w-5/8 sm:w-2/4 h-5/7 text-justify'>
                I’m a self taught software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
            </div>
        </div>
    </div>
  )
}

export default IntroSection
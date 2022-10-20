import React from 'react'

function About() {
  return (
    <div className="bg-[#0a192f] relative top-[62px] px-4 pb-16 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-3xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400 text-cyan-500">
                01
              </p>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400 text-gray-200">
                About
              </p>
            </div>
            <p className="text-base text-gray-300 md:text-lg">
            Hello! My name is Subhajit Ghosh and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="text-base text-gray-300 md:text-lg">
            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            <div className='relative top-10'>
              <p className="text-base text-cyan-500 md:text-lg">
                Programming Languages
              </p>
              <div class="grid grid-cols-2 gap-4">
                <div><i class="fa-solid fa-play text-emerald-600 text-[7px]"></i> <span className='text-white font-light'>C</span></div>
                <div><i class="fa-solid fa-play text-emerald-600 text-[7px]"></i> <span className='text-white font-light'>Java</span></div>
                <div><i class="fa-solid fa-play text-emerald-600 text-[7px]"></i> <span className='text-white font-light'>Python</span></div>
                <div><i class="fa-solid fa-play text-emerald-600 text-[7px]"></i> <span className='text-white font-light'>Javascript</span></div>
              </div>
              </div>
            <div className='relative top-14'>
              <p className="text-base text-cyan-500 md:text-lg">
                Framework
              </p>
              <div class="grid grid-cols-2 gap-4">
                <div><i class="fa-solid fa-play text-emerald-600 text-[7px]"></i> <span className='text-white font-light'>React.js</span></div>
                <div><i class="fa-solid fa-play text-emerald-600 text-[7px]"></i> <span className='text-white font-light'>Django</span></div>
                <div><i class="fa-solid fa-play text-emerald-600 text-[7px]"></i> <span className='text-white font-light'>Node.js</span></div>
                <div><i class="fa-solid fa-play text-emerald-600 text-[7px]"></i> <span className='text-white font-light'>Spring</span></div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
            </a>
            
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-36 lg:right-0  lg:items-end">
        <img
          src="https://kitwind.io/assets/kometa/full-browser.png"
          className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt=""
        />
      </div>
    </div>  
  )
}

export default About
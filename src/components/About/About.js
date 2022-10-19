import React from 'react'

function About() {
  return (
    <div className='bg-[#0a192f] w-full relative top-[62px] h-auto pl-10 pt-10 pb-12]'>
      <div className="about_heading flex justify-center flex-wrap">
        <span class="text-base inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-cyan-300  rounded relative top-3">01</span>
        <span class="text-3xl inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-gray-300 rounded">About</span>
        <span class="text-3xl inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-gray-400 rounded">-------------------------</span>
      </div>
      <div className='about_sections flex justify-center justify-items-center mt-5 '>
          <div className='flex-col max-w-7xl h-auto'>
            <div className='about_info w-4/5 sm:w-2/6 md:w-2/7 h-5/8 text-white text-justify '>
                Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

                I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.

                Here are a few technologies I’ve been working with recently:
            </div>
            <div class='portfolio_pic p-3 sm:p-4'>
                <img src="logo192.png" alt="" className='class="max-w-full h-auto"4'/>
            </div>
          </div>
      </div>
    </div>  
  )
}

export default About
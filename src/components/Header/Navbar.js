import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-5 py-8 bg-[#0a192f] absolute w-full z-10 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            
              <a href="#" className="block relative">
                  <img alt="profil" src="/images/subhajit.jpg" className="mx-auto object-cover rounded-full h-14 w-14"/>
              </a>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#about"
                >
                  <span className="ml-2">01. About</span>
                </a>
              </li>
              <li className="nav-item hidden">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">02. Experience</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#work"
                >
                  <span className="ml-2">03. Project</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#contact"
                >
                  <span className="ml-2">04. Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-8 py-2 rounded-md border-2 border-cyan-300 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://docs.google.com/document/d/1xYbWztMWi8ihxPowQcwTQhT_thvUsbhMB9NJOXT3e9o/edit?usp=sharing" target="_blank"
                >
                  <span className="ml-2 text-cyan-300">Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

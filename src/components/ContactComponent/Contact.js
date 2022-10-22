import React from 'react'

function Contact() {
  return (
    <div id='contact' className='bg-[#0a192f] p-5'>
    
    <div className='flex justify-center '>
        <div >
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block font-normal text-xs text-emerald-300">
                        04 What’s Next?
                    </span>
                    <span className="block text-gray-400">
                        Get In Touch
                    </span>
                    <dl className="w-full md:w-2/3 m-auto">
                        <dd className="mb-16">
                            <p className='text-gray-300 text-xs'>
                            Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!

                            Say Hello
                            </p>
                        </dd>
                    </dl>
                </h2>
            </div>
        </div>
    </div>

    <div  className='flex justify-center bg-[#0a192f]' >
        
    <form className="flex w-full max-w-sm space-x-3">
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact us !
            </div>
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                        <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email"/>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="text-gray-700" htmlFor="name">
                                <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                                </textarea>
                            </label>
                        </div>
                        <div className="col-span-2 text-right">
                            <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
        </form>
            
      

    </div>
    
    <div className='flex justify-center py-8'>
            <button type="button" className="text-md text-white text-4xl relative">
            <span className="w-4 h-4 rounded-full absolute right-2 leading text-xs bg-red-500">
                2
            </span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" className="text-cyan-600 h-8 w-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                </path>
            </svg>
        </button>
            <span className='text-gray-500 ml-2 font-semibold font-mono'>Official Email : subhajitstd07@gmail.com</span>
    </div>

    </div>
  )
}

export default Contact
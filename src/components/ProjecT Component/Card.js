import React from 'react'

function Card({project_name,creation_date,}) {
  return (
    <div className="card card-side  shadow-xl mb-5 mt-5 w-full bg-[#102a50]">
        <div className="h-96 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
                <img src="./projectimages/img1.jpeg" alt="project_image"  className='object-cover min-w-3xl sm:w-full'/>
            </div> 
            <div className="carousel-item h-full">
                <img src="./projectimages/img3.jpeg" alt="project_image"  className='object-cover min-w-3xl sm:w-full'/>
            </div> 
            <div className="carousel-item h-full">
                <img src="./projectimages/img4.jpeg" alt="project_image"  className='object-cover min-w-3xl sm:w-full'/>
            </div> 
            <div className="carousel-item h-full">
                <img src="./projectimages/img5.jpeg" alt="project_image"  className='object-cover min-w-3xl sm:w-full'/>
            </div> 
            <div className="carousel-item h-full">
                <img src="./projectimages/img6.jpeg" alt="project_image"  className='object-cover min-w-3xl sm:w-full'/>
            </div> 
            <div className="carousel-item h-full">
                <img src="./projectimages/img7.jpeg" alt="project_image"  className='object-cover min-w-3xl sm:w-full'/>
            </div> 
        </div>
        <div className="card-body">
        <h2 className="card-title text-cyan-300">e-marcket</h2>
        <div className='text-gray-400 text-justify max-w-xl h-48 sm:h-56 overflow-y-scroll' >
        This is online ecommerce website.
        </div>
        <div className="card-actions justify-end">
            <a href='https://github.com/subhajit20/e-marcket' target="_blank" className="link link-secondary"><i class="fa-brands fa-github"></i></a>
            <a href='https://e-marcket.vercel.app/' target="_blank" className="link link-secondary"><i class="fa-solid fa-link"></i></a>
        </div>
        
        <div className="card-actions justify-end text-gray-200">
            <div className="badge bg-transparent outline-none"><i class="fa-brands fa-github"></i></div> 
            <div className="badge bg-transparent outline-none"><i class="fa-brands fa-react"></i></div>
            <div className="badge bg-transparent outline-none"><i class="fa-brands fa-node-js"></i></div>
            <div className="badge bg-transparent outline-none"><i class="fa-solid fa-code"></i></div>
            <div className="badge bg-transparent outline-none"><i class="fa-brands fa-css3"></i></div>
            <div className="badge bg-transparent outline-none"><i class="fa-brands fa-paypal"></i></div>
        </div>
        </div>
  </div>
  )
}

export default Card
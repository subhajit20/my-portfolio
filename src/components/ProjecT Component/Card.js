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
        <div className='text-gray-400 text-justify max-w-xl h-36 sm:h-44 overflow-y-scroll ' >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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
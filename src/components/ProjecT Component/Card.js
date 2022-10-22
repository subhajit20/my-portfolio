import React from 'react'

function Card({projectid,project_name,project_images,project_heading,project_description,project_github_link,project_deployed_link}) {
  return (
    <>
    
    <div className="card card-side  shadow-xl mb-5 mt-5 w-full bg-[#102a50]">
        <div className="h-96 carousel carousel-vertical rounded-box">
            {/* Rendering all of my Project imgages one by one */}
            {
                project_images.length > 0 ? project_images.map((images,index)=>{
                    return <div className="carousel-item h-full" key={index}>
                    <img src={images.toString()} alt="project_image"  className='object-cover min-w-3xl sm:w-full'/>
                </div> 
                }) : "No Images"
            }
        </div>
        <div className="card-body">
        <h2 className="card-title text-cyan-300">{project_name}</h2>
        <div className="card-actions justify-start">
            <a href={`${project_github_link}`} target="_blank" className="link link-secondary"><i className="fa-brands fa-github"></i></a>
            <a href={`${project_deployed_link}`} target="_blank" className="link link-secondary"><i className="fa-solid fa-link"></i></a>
        </div>
        <div className='py-10'></div>
        <div className="card-actions justify-end text-gray-200">
            <div className="badge bg-transparent outline-none"><i className="fa-brands fa-github"></i></div> 
            <div className="badge bg-transparent outline-none"><i className="fa-brands fa-react"></i></div>
            <div className="badge bg-transparent outline-none"><i className="fa-brands fa-node-js"></i></div>
            <div className="badge bg-transparent outline-none"><i className="fa-solid fa-code"></i></div>
            <div className="badge bg-transparent outline-none"><i className="fa-brands fa-css3"></i></div>
            <div className="badge bg-transparent outline-none"><i className="fa-brands fa-paypal"></i></div>
        </div>
        </div>
  </div>
  
    <div className="bg-lightblue px-4">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
            <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9 text-cyan-500">
                {projectid} : {project_heading}
            </h2>
            <dl className="w-full md:w-2/3">
                <dd className="mb-16">
                    <p className='text-gray-300'>
                        {project_description}
                    </p>
                </dd>
            </dl>
        </div>
    </div>

  </>
  )
}

export default Card
import React from 'react';
import Card from './Card';
import ProcjetDetails from '../ProcjetDetails.json'

function ProjectTemplate() {
  const myprojects = ProcjetDetails.AllProjects;
  return (
    <div id="work" className='flex flex-wrap justify-center p-5 bg-[#0a192f] h-auto relative'>
        <h6 className="font-extrabold leading-9 text-cyan-500">
                <span className='text-cyan-500'>02</span>  <span className='text-gray-500'>Some Things I’ve Built -------</span>
          </h6>
        <div className='flex-col'>
          {/* Rendering all of my Projects */}
            {
              myprojects.map((projects,index)=>{
                return <Card key={index} projectid={projects.id} project_name={projects.project_name} project_images={projects.project_images} project_heading={projects.project_heading} project_description={projects.project_description} project_github_link={projects.project_github_link} project_deployed_link={projects.project_deployed_link}/>
              })
            }
        </div>
    </div>  
  )
}

export default ProjectTemplate
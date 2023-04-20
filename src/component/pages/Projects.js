import React from 'react'
import chompSci from '../../images/chompSci.png'
import './Projects.css'
import ProjectItem from './ProjectItem'
import { projectList } from '../../data/projectList.js'


const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>

        {/* think of as a for loop */}
        {projectList.map((project, index) => {
          return <ProjectItem id = {index} name = {project.name} image = {project.image}/>
        })}
        
      </div>
    </div>
  )
}

export default Projects
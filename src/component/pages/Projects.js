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
        {/* <ProjectItem name ="chompSci" image={chompSci}></ProjectItem>
        <ProjectItem name ="Minesweeper" image={chompSci}></ProjectItem> */}
        {projectList.map((project, idx) => {
          return <ProjectItem id = {idx} name = {project.name} image = {project.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects
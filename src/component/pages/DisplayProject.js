import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../../data/projectList'
import GitHubIcon from '@mui/icons-material/GitHub';
import './DisplayProject.css'


const DisplayProject = () => {
    const {id} = useParams()
    const project = projectList[id]
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image}/>
      <p>
        <b>Skills: </b> {project.skills}
      </p>
      <GitHubIcon className='icons' onClick={() => window.open(project.github)}/>

    </div>
  )
}

export default DisplayProject
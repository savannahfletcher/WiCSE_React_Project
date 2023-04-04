import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../../data/projectList'


const DisplayProject = () => {
    const {id} = useParams()
    const project = projectList[id]
  return (
    <div>DisplayProject
        {id}
    </div>
  )
}

export default DisplayProject
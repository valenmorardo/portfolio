import React from 'react'
import ProjectCard from './ProjectCard'

import s from './Projects.module.css'

import {projects} from '../../utils/index'


const MyProjects = () => {
  return (
    <section className={s.section}>

      <h3 className={s.title}>MY_PROJECTS</h3>
      <div className={s.container}>
        {projects.map((e) => (
          <ProjectCard data={e}/>
        ))
        }
      </div>
      

    </section>
  )
}

export default MyProjects
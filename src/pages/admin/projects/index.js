import Navbar from '../../../admin_components/navbar'
import Head from 'next/head'
import AddProject from '../../../admin_components/add-project'
import ProjectsList from '../../../admin_components/projects_list'
import { useEffect, useState } from 'react'
import LeftRightAligner from '../../../admin_components/left-right-aligner'

const Projects = ({ projects }) => {
        const [allProjects, setAllProjects] = useState(projects)
        return <>
                <Head>
                        <title>Studio Stunnit Admin</title>
                        <meta name="description" content="This is the studio sunnit admin" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className='' >
                        <Navbar />
                        <LeftRightAligner>
                                <div className='h-8'></div>
                                {
                                        projects ?
                                                <ProjectsList projects={allProjects} deleteProject={id => setAllProjects({ projects: allProjects.projects.filter(project => project.id !== id) })} />
                                                : <></>
                                }
                                <div className='h-16'></div>
                                <AddProject addProject={project => setAllProjects({ projects: [...allProjects.projects, project] })} />
                        </LeftRightAligner>
                        <div className='h-8'></div>
                </main>
        </>
}

export default Projects
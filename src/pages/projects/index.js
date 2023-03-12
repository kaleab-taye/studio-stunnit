import React from 'react'

export default function Index() {
    return (
        <div className='text-gray-300' >
            <div className='w-screen h-screen'>
                {
                    projects.map((project, index) => (
                        <div key={project.id} className={`w-full h-full bg-[url('` + project.imageUrl + `')] bg-cover bg-center grid grid-cols-1`}>
                            <div>Projec</div>
                            <div className='flex'>
                                <div></div>
                                <div>u</div>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div>
                                    {project.title}
                                </div>
                                <div>
                                    {index + 1} / {projects.length}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const projects = [
    {
        id: "1",
        title: "Arnua Project",
        imageUrl: "/images/Asset_14.png",
    }
]
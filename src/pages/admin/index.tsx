import type { NextPage } from 'next'
import Projects from './projects/index'
import React from 'react'

const Home: NextPage = (projects) => {

  return (
    <>
    {projects ?
      <Projects projects={projects} /> : <></>
    }
    </>
  )
}

export async function getStaticProps() {
  try {
    let res = await fetch(`${process.env.url}/projects`);
    let projects = await res.json();
    return {
      props: {
        projects: projects,
      }
    };
  } catch (error) {
    console.error(error)

    return {
      props: {
        projects: [],
        // error: error
      }
    };
  }
}

export default Home
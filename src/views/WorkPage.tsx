import { useState } from "react"
import { db } from "../db/data"
import Projects from "../components/Projects"


export default function WorkPage() {

  const [data] = useState(db)

  return (
    <>
      <div className="dark:bg-dark">

        <div className="flex flex-col items-center mb-10">
          <h1 className="text-7xl md:text-9xl text-brown font-semibold select-none md:my-10 py-4 md:py-10">My Work</h1>
          <p className="text-center text-xl md:text-4xl mx-5 font-semibold select-none dark:text-white">Here, you'll discover both my academic projects and personal endeavors</p>
        </div>
        <section className="bg-gradient-to-b from-dark-brown via-brown to-white dark:bg-gradient-to-b dark:from-dark-brown dark:to-dark">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 md:mt-10 py-10 gap-10">
            {
              data.map((project) => (
                <Projects
                  key={project.id}
                  project={project}
                />
              ))
            }
          </div>
        </section>
      </div>
    </>
  )
}

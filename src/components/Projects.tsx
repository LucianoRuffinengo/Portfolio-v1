import { Work } from "../types"
import Modal from "./Modal"
import { useState } from "react"

type ProjectsProp = {
  project: Work
}


export default function Projects({ project }: ProjectsProp) {

  const [modal, setModal] = useState(false)

  const showModal = () => {
    setModal(true)
  }

  return (
    <div className="flex flex-col justify-between bg-white  dark:bg-dark border-2 border-brown dark:text-brown 
    hover:shadow-xl hover:shadow-dark-brown dark:hover:shadow-light-brown dark:hover:text-light-brown rounded-xl shadow-xl">
      <div className="overflow-hidden rounded-t-xl">
        <img src={project.image} alt="" />
      </div>

      <div className="p-5">
        <h2 className="text-2xl truncate font-black select-none">{project.name}</h2>
        <button
          type="button"
          className="bg-brown hover:bg-dark-brown mt-5 w-full p-3 font-bold text-white text-lg rounded-xl"
          onClick={showModal}
        >View Project</button>
      </div>

      <Modal
        project={project}
        modal={modal}
        setModal={setModal}
      />
    </div>
  )
}

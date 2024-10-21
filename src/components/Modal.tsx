import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Work } from '../types';

type ModalProps = {
    project: Work
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ project, modal, setModal }: ModalProps) {

    const closeModal = () => {
        setModal(false)
    }


    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="relative transform overflow-hidden rounded-2xl bg-white px-6 pt-8 pb-6 text-left 
                      shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-8 border-4 border-dark-brown"
                                >
                                    <Dialog.Title
                                        as="h3"
                                        className="text-dark-brown text-5xl font-bold mb-8 text-center select-none"
                                    >
                                        {project.name}
                                    </Dialog.Title>

                                    <img
                                        src={project.image}
                                        alt={`Imagen de ${project.name}`}
                                        className="mx-auto w-96 mb-6 border-4 border-dark-brown rounded-lg"
                                    />

                                    <Dialog.Title
                                        as="h3"
                                        className="text-dark-brown text-3xl font-semibold mb-6 p-4 select-none border-2 border-brown bg-light-brown rounded-lg"
                                    >
                                        Overview
                                        <br />
                                        <span className="block text-lg text-dark-brown mt-2">
                                            {project.description1}
                                        </span>
                                    </Dialog.Title>

                                    <Dialog.Title
                                        as="h3"
                                        className="text-dark-brown text-3xl font-semibold mb-8 p-4 select-none border-2 border-brown bg-light-brown rounded-lg"
                                    >
                                        What I used:
                                        <br />
                                        <span className="block text-lg text-dark-brown mt-2">
                                            {project.description2}
                                        </span>
                                    </Dialog.Title>

                                    <div className="mt-8 flex justify-between gap-6">
                                        <button
                                            type="button"
                                            className="w-full rounded-lg bg-gray-600 py-3 font-bold 
                          uppercase text-white shadow-lg hover:bg-gray-500"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                        <a
                                            href={`${project.url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full rounded-lg bg-brown py-3 font-bold 
                          uppercase text-white shadow-lg hover:bg-light-brown text-center"
                                        >
                                            Visit the Page
                                        </a>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
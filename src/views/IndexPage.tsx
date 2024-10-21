import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import AnimatedText from "../components/AnimatedText";
import ContactForm from "../components/ContactForm";
import "react-toastify/ReactToastify.css"


export default function IndexPage() {
    return (
        <>
            <div className="dark:bg-dark">

                <section className="flex container flex-col md:flex-row justify-evenly align-middle items-center h-full mx-auto mb-20 space-y-8 md:space-y-0">
                    <div className="fade-in">
                        <div className="border-8 border-brown rounded-full fade-border-delay-2 dark:animate-fadeBorderDarkDelay2 hover:space-8">
                            <div className="border-8 border-brown rounded-full fade-border-delay dark:animate-fadeBorderDarkDelay">
                                <img src="/foto-luciano.jpg" alt="" className="mx-auto w-72 md:w-96 rounded-full border-8 fade-border dark:animate-fadeBorderDark" />
                            </div>
                        </div>
                    </div>
                    <hr className="h-0 md:h-96 lg:border-4 border-brown" />
                    <div className="h-32 md:h-auto md:mx-4 px-4">
                        <AnimatedText />
                    </div>
                </section>

                <section className="bg-gradient-to-t from-brown to-dark-brown p-1">
                    <div className="flex container flex-col justify-evenly align-middle items-center mx-auto my-10 px-20 py-10 fade-in rounded-xl select-none bg-white dark:bg-dark">
                        <h2 className="text-4xl md:text-6xl mb-10 text-brown font-semibold animate-text">About Me</h2>
                        <p className="text-base sm:text-lg md:text-xl font-semibold dark:text-white"> I am a recent graduate from
                            <span className="border-b-2 border-brown hover:border-black dark:hover:border-white hover:bg-black hover:text-white 
                            dark:hover:bg-white dark:hover:text-black transition duration-300"> Universidad Tecnológica Nacional</span>, Argentina, eager to launch my career in software development.
                            My specialization lies in Front-end development, proficient in CSS within
                            <span className="border-b-2 border-brown hover:border-red-500 hover:bg-red-500 transition duration-300"> Angular</span> and
                            <span className="border-b-2 border-brown hover:border-blue-400 hover:bg-blue-400 transition duration-300"> React</span>, I know how to work with frameworks like
                            <span className="border-b-2 border-brown hover:border-blue-800 hover:bg-blue-800 hover:text-white transition duration-300"> TailwindCSS</span>.
                            Additionally, I am skilled in
                            <span className="border-b-2 border-brown hover:border-yellow-500 hover:bg-yellow-500 transition duration-300"> JavaScript</span>,
                            <span className="border-b-2 border-brown hover:border-orange-500 hover:bg-orange-500 transition duration-300"> HTML</span>, and
                            <span className="border-b-2 border-brown hover:border-blue-500 hover:bg-blue-500 transition duration-300"> TypeScript</span>.
                            I am enthusiastic about learning and adaptable to acquiring new skills required for any role.
                            <br />
                            During my university years, I discovered a passion for collaborating with others, fostering strong working relationships and adapting seamlessly to diverse environments.
                            I am known for my dedication and responsibility, qualities that enable me to excel among my peers.</p>

                        <div className="flex container flex-col justify-evenly align-middle items-center mt-5">
                            <h3 className="text-2xl text-center md:text-4xl mb-10 text-brown font-semibold
                     select-none">This is my Curriculum!</h3>
                            <a href="https://drive.google.com/file/d/1rM_Qw2oAmm3fKS-NfgEOhVU7iI1FKsL9/view?usp=drive_link" target="_blank">
                                <button className="border-4 border-brown rounded-xl text-lg uppercase py-3 px-10 bg-brown font-bold text-white dark:text-dark
                                 hover:bg-white hover:text-brown dark:hover:bg-dark dark:hover:text-brown transition-colors duration-150">Curriculum</button>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row justify-evenly align-middle items-center gap-3 md:gap-0 p-10 space-y-5 fade-in 
                bg-gradient-to-t from-white to-brown dark:bg-gradient-to-t dark:from-dark dark:to-brown">
                    <div className="pl-20 sm:pl-28 pr-20">
                        <h2 className="text-3xl text-center md:text-4xl lg:text-6xl mb-5 md:mb-10 text-dark-brown dark:text-white font-semibold pb-2 select-none">Education</h2>
                        <p className=" text-white rounded-lg p-4 bg-gradient-to-tr from-brown to-dark-brown select-none">University Technician in Programming <br />
                            <span>Universidad Tecnologica Nacional - 2024 - Mar del Plata</span></p>
                    </div>
                    <hr className="w-0 md:w-11/12 lg:w-0 lg:h-96 lg:border-4 border-dark-brown dark:border-dark" />
                    <div className="flex container flex-col justify-evenly align-middle items-center gap-10">
                        <div className="flex container flex-col items-center gap-5 pb-2">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl align-middle mb-2 text-dark-brown dark:text-white font-semibold
                         select-none">Tech Stacks</h3>
                            <div className="flex flex-wrap flex-row gap-3">
                                <img src="/html-logo.png" alt="" className="h-12" />
                                <img src="/css-logo.png" alt="" className="h-12" />
                                <img src="/js-logo.png" alt="" className="h-12" />
                                <img src="/ts-logo.png" alt="" className="h-12" />
                                <img src="/react-logo.png" alt="" className="h-12" />
                                <img src="/angular-logo.png" alt="" className="h-12" />
                                <img src="/node-logo.png" alt="" className="h-12" />
                                <img src="/tailwindcss-logo.png" alt="" className="h-10" />
                            </div>
                        </div>
                        <hr className="w-0 md:w-11/12 lg:border-4 border-dark-brown dark:border-dark" />
                        <div className="flex flex-col items-center pl-5 gap-5">
                            <NavLink
                                to='/work'>
                                <h2 className="text-center md:text-left text-7xl md:text-8xl br-none lg:text-9xl text-dark-brown
                                font-semibold select-none hover-trigger animate-text-bounce p-4 border-4 border-dark-brown rounded-xl bg-brown hover:shadow-xl
                                dark:hover:shadow-light-brown hover:text-light-brown">
                                    Work</h2>
                            </NavLink>
                            <p className="text-xl sm:text-2xl text-center font-medium text-dark-brown dark:text-white select-none">Take a look at my work, featuring projects from both my studies and personal initiatives</p>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="flex md:flex-row flex-col lg:flex-nowrap justify-evenly items-center mt-32 md:mt-0">
                        <div className="space-y-10">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl text-center md:text-start text-brown font-semibold select-none">Contact Me!</h2>
                            <p className="pl-14 sm:pl-0 md:text-base lg:text-lg font-medium dark:text-white">lucianoruffinengo@gmail.com <br />
                                Mar del Plata - Provincia de Buenos Aires - Argentina</p>
                            <div className="flex flex-row pl-36 sm:pl-0 gap-5">
                                <a href="https://www.linkedin.com/in/lucianoruffinengo" target="_blank" >
                                    <img src="/linkedin-logo.png" alt="linkedin logo" className="h-14 hover:cursor-pointer hover:scale-125 transition-transform" />
                                </a>
                                <a href="https://github.com/LucianoRuffinengo" target="_blank">
                                    <img src="/github-logo.png" alt="" className="h-14 hover:cursor-pointer hover:scale-125 transition-transform" />
                                </a>
                            </div>
                        </div>
                        <ContactForm />
                        <ToastContainer/>
                    </div>
                </footer>
            </div>
        </>
    )
}

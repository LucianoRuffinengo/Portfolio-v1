import ToggleTheme from "./ToggleTheme";


export default function Header() {

    return (
        <header className="mx-auto px-5 pb-6 flex justify-between dark:bg-dark">
            <div className="flex items-center gap-2 sm:pt-4">
                <a href="/">
                    <img src="logo-white.png" alt="logo" className="h-24 sm:h-32 md:h-40" />
                </a>
                <p className="pb-4 text-xl sm:text-2xl md:text-3xl dark:text-white border-b-4 border-brown select-none font-sans">Luciano Ruffinengo</p>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 sm:mt-6 md:mb-[52px] pt-4 md:border-b-4 md:border-brown">
                <a href="https://www.linkedin.com/in/lucianoruffinengo" target="_blank" >
                    <img src="/linkedin-logo.png" alt="linkedin logo" className="h-10 hover:cursor-pointer hover:scale-125 transition-transform" />
                </a>
                <a href="https://github.com/LucianoRuffinengo" target="_blank">
                    <img src="/github-logo.png" alt="" className="h-10 hover:cursor-pointer hover:scale-125 transition-transform" />
                </a>
                <ToggleTheme/>
            </div>
        </header>
    )
}

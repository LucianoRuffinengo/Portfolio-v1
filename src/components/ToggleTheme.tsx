import { useState, useEffect } from "react";


export default function ToggleTheme() {

    const [theme, setTheme] = useState<string>('light');

    // Efecto para cargar el tema al cargar la página
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        }
    }, []);

    // Función para alternar el tema
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button onClick={toggleTheme}>
             {theme === 'light' ? <img src="/moon-logo.png" alt="" className="h-10 hover:cursor-pointer hover:scale-125 transition-transform" /> :
              <img src="/sun-logo.png" alt="" className="h-10 hover:cursor-pointer hover:scale-125 transition-transform" />}
        </button>
    )
}

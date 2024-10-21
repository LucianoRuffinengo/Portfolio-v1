import React, { useEffect, useRef } from 'react'

const AnimatedText: React.FC = () => {
    const textRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const element = textRef.current;
        if (element) {
            element.classList.add('fade-in');

            const handleAnimationEnd = () => {
                element.classList.remove('fade-in');
            };

            element.addEventListener('animationend', handleAnimationEnd);

            return () => {
                element.removeEventListener('animationend', handleAnimationEnd);
            };
        }
    }, []);

    return (
        <>
            <h1
                ref={textRef}
                className="text-center md:text-left text-7xl br-none md:text-9xl text-brown font-semibold select-none hover-trigger animate-text-bounce"
            >
                <span className='inline-block'>Wel</span><br className='hidden md:block'/><span className='inline-block animate-text-bounce'>come</span>
            </h1>
        </>

    );
};

export default AnimatedText;

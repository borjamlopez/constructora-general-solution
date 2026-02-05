import React, { useEffect, useRef } from 'react';
import backgroundImg from '../assets/background.webp';

const ScrollingBackground = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imgRef.current) return;

            // Get scroll position
            const scrollY = window.scrollY;

            // Move background: every 10px of scroll moves image 1px
            const translateY = -(scrollY / 10);

            // Apply transform directly
            imgRef.current.style.transform = `translateY(${translateY}px)`;
        };

        // Listen to scroll
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Set initial position
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                zIndex: -2,
                backgroundColor: '#000'
            }}
        >
            <img
                ref={imgRef}
                src={backgroundImg}
                alt="Background"
                style={{
                    width: '100%',
                    height: '150vh',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                    willChange: 'transform'
                }}
            />

            {/* Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
                    pointerEvents: 'none',
                    zIndex: 1
                }}
            />
        </div>
    );
};

export default ScrollingBackground;

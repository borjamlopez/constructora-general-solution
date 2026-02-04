import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import backgroundImg from '../assets/background.webp';

const ScrollingBackground = () => {
    const { scrollY } = useScroll();

    // Mapping scroll position (pixels) to vertical movement (panning)
    // This creates the "video scrubbing" effect where movement depends 100% on the user
    // We increase the panning range to make the movement more noticeable
    const y = useTransform(scrollY, [0, 4000], ['0px', '-200px']);

    return (
        <div
            className="scrolling-bg-container"
            style={{
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                overflow: 'hidden',
                zIndex: -2,
                backgroundColor: '#000'
            }}
        >
            <motion.img
                src={backgroundImg}
                alt="Background"
                style={{
                    y,
                    width: '100vw',
                    height: '120vh', // Significant height buffer for panning
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    willChange: 'transform'
                }}
            />
            {/* Dark Overlay for better text legibility */}
            <div
                className="scrolling-bg-overlay"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)'
                }}
            />
        </div>
    );
};

export default ScrollingBackground;

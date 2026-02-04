import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ backgroundImage, children, height = "80vh", overlayOpacity = 0.5 }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section
            ref={ref}
            className="parallax-container"
            style={{ height, position: 'relative', overflow: 'hidden' }}
        >
            <motion.div
                style={{
                    y,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '140%',
                    width: '100%',
                    position: 'absolute',
                    top: '-20%',
                    left: 0,
                    zIndex: -1
                }}
            />
            <div
                className="parallax-overlay"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `rgba(0,0,0, ${overlayOpacity})`,
                    zIndex: 0
                }}
            />
            <div className="parallax-content" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
                {children}
            </div>
        </section>
    );
};

export default ParallaxSection;

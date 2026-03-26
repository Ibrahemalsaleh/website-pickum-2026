import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(progress, 100));
            
            // Update header progress bar
            const progressBar = document.querySelector('.scroll-progress');
            if (progressBar) {
                progressBar.style.width = `${Math.min(progress, 100)}%`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null; // This component doesn't render anything visible
};

export default ScrollProgressBar;
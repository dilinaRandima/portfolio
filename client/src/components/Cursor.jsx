import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Cursor.css';

const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, .glass-card, .btn')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="cursor-wrapper"
                style={{ x: cursorX, y: cursorY }}
            >
                <div className={`cursor-dot ${isHovering ? 'hovering' : ''}`} />
            </motion.div>
            
            <motion.div
                className="cursor-wrapper"
                style={{ x: cursorXSpring, y: cursorYSpring }}
            >
                <div className={`cursor-ring ${isHovering ? 'hovering' : ''}`} />
            </motion.div>
        </>
    );
};

export default Cursor;

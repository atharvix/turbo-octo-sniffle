import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // Smooth spring physics for the "trailing" feel
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
    const springX = useSpring(cursorX, springConfig)
    const springY = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10) // Center offset
            cursorY.set(e.clientY - 10)
        }

        const handleMouseOver = (e) => {
            // Check if hovering over clickable elements
            if (e.target.tagName === 'BUTTON' ||
                e.target.tagName === 'A' ||
                e.target.closest('button') ||
                e.target.closest('a') ||
                e.target.getAttribute('role') === 'button') {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleMouseOver)

        // Hide default cursor
        document.body.style.cursor = 'none'

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleMouseOver)
            document.body.style.cursor = 'auto'
        }
    }, [cursorX, cursorY])

    return (
        <motion.div
            className="fixed top-0 left-0 z-[99999] pointer-events-none hidden md:block"
            style={{
                x: springX,
                y: springY,
            }}
        >
            {/* The Main "Halo" - Gold Thread */}
            <motion.div
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 1 : 0.7,
                    borderColor: isHovering ? '#D4AF37' : '#C5A059'
                }}
                className="w-6 h-6 border-2 border-[#C5A059] rounded-full flex items-center justify-center relative backdrop-blur-[1px]"
            >
                {/* Inner Dot - Diya Flame */}
                <motion.div
                    animate={{
                        scale: isHovering ? 0.5 : 1,
                        backgroundColor: isHovering ? '#8B1538' : '#C5A059'
                    }}
                    className="w-2 h-2 bg-[#C5A059] rounded-full shadow-[0_0_10px_#C5A059]"
                />

                {/* Rotating Decorative Ring (Subtle) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                    className="absolute inset-[-4px] border border-dashed border-[#C5A059]/30 rounded-full"
                />
            </motion.div>
        </motion.div>
    )
}

export default CustomCursor

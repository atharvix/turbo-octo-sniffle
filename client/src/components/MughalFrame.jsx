import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const MughalFrame = ({ children, className = '' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    // Simplified fade-in only
    const opacityFade = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.2 } }
    }

    return (
        <div ref={ref} className={`relative w-full overflow-hidden bg-lucknow-ivory ${className}`}>

            {/* 
         LAYER 0: BACKGROUND
         Static, optimized patterns. 
      */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 jali-heavy opacity-30 mix-blend-multiply pointer-events-none"></div>
                <div className="absolute inset-0 chikankari-dense opacity-20 pointer-events-none"></div>

                {/* Faded Static Urdu Calligraphy - Refined */}
                <div className="hidden lg:block absolute top-[10%] left-[5%] text-[10rem] font-serif text-[#C5A059] opacity-[0.04] select-none rotate-6 font-urdu pointer-events-none">
                    تہذیب
                </div>
                <div className="hidden lg:block absolute bottom-[20%] right-[5%] text-[10rem] font-serif text-[#8B1538] opacity-[0.03] select-none -rotate-6 font-urdu pointer-events-none">
                    لکھنؤ
                </div>
            </div>

            {/* 
         LAYER 1: ARCHITECTURAL FRAME
         Simplified for mobile. 
      */}

            {/* Top Arch */}
            <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
                <svg viewBox="0 0 1440 120" className="w-full h-auto drop-shadow-sm" preserveAspectRatio="none">
                    <path d="M0,0 H1440 V60 Q1400,100 1360,60 T1280,60 T1200,60 T1120,60 T1040,60 T960,60 T880,60 T800,60 T720,100 T640,60 T560,60 T480,60 T400,60 T320,60 T240,60 T160,60 T80,60 T0,60 Z"
                        fill="#F8F5E6" />
                    <path d="M0,60 Q1400,100 1360,60 T1280,60 T1200,60 T1120,60 T1040,60 T960,60 T880,60 T800,60 T720,100 T640,60 T560,60 T480,60 T400,60 T320,60 T240,60 T160,60 T80,60 T0,60"
                        fill="none" stroke="#C5A059" strokeWidth="1" opacity="0.6" />
                </svg>
            </div>

            {/* Side Pillars - Hidden on mobile */}
            <div className="absolute top-0 bottom-0 left-0 w-16 z-10 hidden lg:block bg-[#F0E6D0] border-r border-[#C5A059]/20">
                <div className="w-full h-full opacity-60 jali-heavy"></div>
            </div>

            <div className="absolute top-0 bottom-0 right-0 w-16 z-10 hidden lg:block bg-[#F0E6D0] border-l border-[#C5A059]/20">
                <div className="w-full h-full opacity-60 jali-heavy"></div>
            </div>

            {/* 
         LAYER 2: CONTENT
      */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={opacityFade}
                className="relative z-10 pt-24 pb-32 px-6 lg:px-32 min-h-[80vh]"
            >
                {children}
            </motion.div>

            {/* Bottom Railing - Clean */}
            <div className="absolute bottom-0 left-0 w-full h-16 z-20 pointer-events-none bg-[#E8DCC0] border-t border-[#C5A059]/30 flex items-center justify-center space-x-8">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-4 h-8 bg-[#C5A059]/10 rounded-full border border-[#C5A059]/20"></div>
                ))}
            </div>

        </div>
    )
}

export default MughalFrame

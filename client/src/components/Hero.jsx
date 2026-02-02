import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import MughalArch from '../scenes/MughalArch'
import MughalFrame from './MughalFrame'

const Hero = () => {
    const [isMuted, setIsMuted] = useState(true)
    const audioRef = useRef(null)

    useEffect(() => {
        const mutedState = localStorage.getItem('isMuted')
        if (mutedState === 'false') setIsMuted(false)
    }, [])

    const toggleMute = () => {
        const newMuted = !isMuted
        setIsMuted(newMuted)
        localStorage.setItem('isMuted', newMuted.toString())
        if (audioRef.current) {
            newMuted ? audioRef.current.pause() : audioRef.current.play().catch(() => { })
        }
    }

    const heroVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5, ease: 'easeOut', staggerChildren: 0.4 }
        }
    }

    return (
        <section id="hero" className="relative w-full overflow-hidden">
            <MughalFrame className="min-h-screen flex flex-col justify-center items-center">

                {/* 
                   ENVIRONMENTAL DEPTH 
                   3D Canvas pushed back, overlaid with texture 
                */}
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
                    <Canvas camera={{ position: [0, 0, 9], fov: 35 }} gl={{ alpha: true }}>
                        <MughalArch />
                    </Canvas>
                </div>

                {/* 
                   CONTENT CARVING
                   The text is framed as a physical inscription in the wall.
                */}
                <motion.div
                    className="relative z-10 text-center max-w-4xl px-8 pt-12"
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* The Inscription Plaque */}
                    <div className="relative p-12 bg-[#F8F5E6] rounded-t-[100px] rounded-b-[40px] shadow-[inset_0_0_40px_rgba(74,64,54,0.1),0_20px_60px_rgba(0,0,0,0.1)] border-4 border-[#F0E6D0]">

                        {/* Decorative Niche Header */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#F8F5E6] rounded-t-full border-t-4 border-l-4 border-r-4 border-[#C5A059]/40 flex items-center justify-center shadow-lg">
                            <span className="font-cinzel text-4xl text-[#8B1538] drop-shadow-md">⚜</span>
                        </div>

                        {/* Ghosted Calligraphy behind text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-[#C5A059] opacity-10 font-serif whitespace-nowrap blur-[2px] pointer-events-none select-none">
                            آداب عرض
                        </div>

                        <motion.div className="relative z-10">
                            <motion.h2 className="font-cinzel text-[#8B1538] tracking-[0.4em] text-sm uppercase mb-4 border-b border-[#C5A059]/30 inline-block pb-2">
                                The Digital Darbar of
                            </motion.h2>

                            <motion.h1 className="font-cormorant font-bold text-7xl md:text-9xl text-[#4A4036] leading-[0.85] mb-6 text-carved tracking-tighter">
                                Lucknowi<br />
                                <span className="text-5xl md:text-7xl italic font-normal text-[#C5A059]">Artisan</span>
                            </motion.h1>

                            <motion.p className="font-inter text-[#5D5C61] text-lg max-w-lg mx-auto leading-relaxed border-l-2 border-[#8B1538]/30 pl-4 italic">
                                "Where code is written with the grace of a ghazal, and pixels align like intricate marble inlay."
                            </motion.p>
                        </motion.div>

                        {/* Bottom decorative scallops */}
                        <div className="absolute bottom-0 left-0 w-full h-4 scallop-edge opacity-50"></div>
                    </div>
                </motion.div>
            </MughalFrame>

            {/* Audio Toggle - Physical Object */}
            <button
                onClick={toggleMute}
                className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-[#F8F5E6] shadow-[0_10px_30px_rgba(74,64,54,0.4)] border-2 border-[#C5A059] text-[#8B1538] hover:scale-105 transition-transform flex items-center justify-center p-0 group overflow-hidden"
            >
                <div className="absolute inset-0 floral-texture-overlay opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <span className="text-2xl relative z-10 shadow-sm">{isMuted ? '🔇' : '🎵'}</span>
            </button>

            <audio ref={audioRef} loop preload="auto">
                {/* <source src="/sounds/ambient.mp3" type="audio/mpeg" /> */}
            </audio>
        </section>
    )
}

export default Hero

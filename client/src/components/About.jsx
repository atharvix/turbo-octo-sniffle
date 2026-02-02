import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MughalFrame from './MughalFrame'

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    const bioParagraphs = [
        "Born in the city where etiquette is an art and conversation is poetry, I bring the soul of Lucknow to the logic of code. Every interface I craft is not just a digital interaction, but a 'mulaqat'—a meeting of grace and utility.",
        "Like the Chikankari artisans who weave shadows into thread, I weave complexity into seamless experiences. I believe that a website should breathe, move, and respond with the courtesy of a royal host.",
        "My stack is modern—React, Three.js, Node—but my philosophy is timeless. I do not build machines; I build digital monuments. Welcome to my courtyard."
    ]

    return (
        <section id="about" className="min-h-screen relative bg-[#F8F5E6]">
            <MughalFrame className="py-24">

                {/* Active Background Pattern specific to About */}
                <div className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, #C5A059 1px, transparent 1px)`,
                        backgroundSize: '24px 24px'
                    }}>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6 md:px-12 relative z-10">

                    {/* Left: Portrait in Niche */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* The Niche (Arch Recess) */}
                        <div className="relative w-80 h-[500px] bg-[#E8DCC0] rounded-t-full shadow-[inset_0_10px_40px_rgba(0,0,0,0.2)] border-[12px] border-[#F0E6D0] flex items-end justify-center overflow-hidden">
                            {/* Inner Decorative Arch Line */}
                            <div className="absolute inset-4 border-2 border-[#C5A059]/40 rounded-t-full pointer-events-none"></div>

                            {/* Portrait Placeholder */}
                            <div className="w-64 h-[400px] bg-[#4A4036] rounded-t-[100px] relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 shadow-xl group">
                                {/* Texture Overlay */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-30 mix-blend-overlay z-20"></div>
                                <div className="absolute inset-0 border-[6px] border-[#C5A059]/20 z-20 rounded-t-[100px]"></div>

                                {/* Image Placeholder Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#E8DCC0]/40 font-cinzel z-10 p-4 text-center">
                                    <span className="text-4xl mb-4 group-hover:text-[#C5A059] transition-colors">⚜</span>
                                    <span className="tracking-widest text-xs uppercase">Portrait of the Artisan</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Bio Text Scroll */}
                    <div ref={ref} className="space-y-8 text-left relative">
                        <div>
                            <h3 className="font-cinzel text-[#8B1538] text-sm tracking-[0.4em] uppercase mb-4 pl-1">Introduction</h3>
                            <h2 className="font-cormorant font-bold text-6xl text-[#4A4036] leading-none mb-6">
                                Code & <br /><span className="italic text-[#C5A059]">Tehzeeb</span>
                            </h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-[#8B1538] to-transparent"></div>
                        </div>

                        <div className="space-y-6">
                            {bioParagraphs.map((para, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.2, duration: 1 }}
                                    className="font-cormorant text-xl md:text-2xl text-[#5D5C61] leading-relaxed relative pl-6 border-l border-[#C5A059]/30"
                                >
                                    <span className="absolute left-0 top-0 text-[#C5A059] text-4xl leading-none -ml-2 -mt-2 opacity-50">"</span>
                                    {para}
                                </motion.p>
                            ))}
                        </div>

                        {/* Signature Seal */}
                        <motion.div
                            initial={{ scale: 0, rotate: -15 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : {}}
                            transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
                            className="mt-10 flex items-center space-x-6"
                        >
                            <div className="w-20 h-20 border-2 border-[#8B1538] rounded-full flex items-center justify-center relative bg-[#8B1538]/5">
                                <div className="absolute inset-1 border border-[#C5A059] rounded-full border-dashed"></div>
                                <span className="font-cinzel text-[#8B1538] text-[10px] text-center leading-tight tracking-widest font-bold">
                                    LUCKNOW<br />ORIGIN
                                </span>
                            </div>
                            <span className="font-dancing text-3xl text-[#4A4036] opacity-60 rotate-[-5deg]">Mehroz</span>
                        </motion.div>
                    </div>

                </div>

            </MughalFrame>
        </section>
    )
}

export default About

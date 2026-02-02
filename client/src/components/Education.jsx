import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { education } from '../data/education'
import MughalFrame from './MughalFrame'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
    return (
        <section id="education" className="min-h-screen relative">
            <MughalFrame className="py-20 md:py-32">

                {/* Header */}
                <div className="text-center mb-24 relative z-10">
                    <div className="bg-[#E8DCC0] inline-block px-8 py-2 rounded-full border border-[#C5A059]/40 mb-6 shadow-inner">
                        <span className="font-cinzel text-[#8B1538] tracking-widest uppercase text-xs">Ilm-o-Adab</span>
                    </div>
                    <h2 className="font-cormorant font-bold text-5xl md:text-7xl text-[#4A4036] mb-4 text-carved">
                        Academics
                    </h2>
                    <p className="font-inter text-[#5D5C61] italic max-w-xl mx-auto">
                        "The roots of knowledge, blossoming into the tree of wisdom."
                    </p>
                </div>

                {/* Flower Garden */}
                <div className="space-y-40">
                    {education.map((item, index) => (
                        <EducationFlower key={item.id} item={item} index={index} />
                    ))}
                </div>

            </MughalFrame>
        </section>
    )
}

const EducationFlower = ({ item, index }) => {
    const flowerRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const flower = flowerRef.current
        const text = textRef.current
        if (!flower || !text) return

        const petals = flower.querySelectorAll('.petal')

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: flower,
                start: 'top 70%',
                end: 'top 20%',
                toggleActions: 'play reverse play reverse',
            },
        })

        tl.from(petals, {
            scale: 0,
            rotation: -45,
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: 'elastic.out(1, 0.5)',
        })

        tl.from(text, { opacity: 0, y: 20, duration: 1 }, '-=1')

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

    return (
        <div className="flex flex-col items-center relative z-10">
            <div ref={flowerRef} className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
                {/* Rotating decorative halo */}
                <div className="absolute inset-0 border-2 border-dashed border-[#C5A059]/30 rounded-full animate-spin-slow duration-[20s]"></div>

                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                    {/* Pedestal/Stem */}
                    <path d="M100,100 L100,200" stroke="#047857" strokeWidth="2" strokeOpacity="0.4" className="petal origin-bottom" />

                    {/* Petals */}
                    {[...Array(12)].map((_, i) => {
                        const angle = (i / 12) * 360
                        return (
                            <g key={i} className="petal" transform={`rotate(${angle} 100 100)`} style={{ transformOrigin: '100px 100px' }}>
                                <path
                                    d="M100,100 Q120,50 100,20 Q80,50 100,100"
                                    fill={item.color}
                                    stroke="#FFFDF5"
                                    strokeWidth="0.5"
                                    opacity="0.9"
                                />
                                {/* Inner Detail */}
                                <path d="M100,90 L100,40" stroke="#FFFDF5" strokeWidth="0.5" opacity="0.5" />
                            </g>
                        )
                    })}

                    {/* Center Jewel */}
                    <circle cx="100" cy="100" r="12" fill="#C5A059" className="petal" />
                    <circle cx="100" cy="100" r="8" fill="#FFFDF5" opacity="0.5" className="petal" />
                </svg>
            </div>

            <div ref={textRef} className="text-center max-w-lg bg-[#FFFDF5]/80 backdrop-blur-sm p-8 rounded-xl border border-[#C5A059]/30 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#C5A059] text-2xl">❖</div>

                <h3 className="font-cinzel text-2xl text-[#8B1538] mb-2">{item.degree}</h3>
                <p className="font-inter font-bold text-[#4A4036] tracking-wide mb-1">{item.institution}</p>
                <div className="text-sm text-[#C5A059] font-cinzel mb-4 tracking-widest">{item.year}</div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent mb-4"></div>

                <p className="font-cormorant text-xl text-[#5D5C61] italic leading-relaxed">
                    "{item.description}"
                </p>
                <p className="mt-2 text-xs font-inter text-[#047857] uppercase tracking-wider">
                    {item.focus}
                </p>
            </div>
        </div>
    )
}

export default Education

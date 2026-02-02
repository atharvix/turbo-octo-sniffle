import React from 'react'
import { motion } from 'framer-motion'
import MughalFrame from './MughalFrame'

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#2C241B] text-[#E8DCC0] overflow-hidden pt-32 pb-12">

            {/* 
           LAYER 1: The Night Texture
           Darker jali, subtle starlight
        */}
            <div className="absolute inset-0 opacity-20 jali-heavy mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 floral-texture-overlay opacity-10 pointer-events-none"></div>

            {/* Floating Fireflies */}
            {[...Array(10)].map((_, i) => (
                <div key={i} className="absolute w-1 h-1 bg-[#C5A059] rounded-full animate-float-slow shadow-[0_0_10px_#C5A059] opacity-60"
                    style={{ top: Math.random() * 100 + '%', left: Math.random() * 100 + '%' }}></div>
            ))}

            {/* 
           LAYER 2: Architectural Grounding
        */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#F8F5E6] to-transparent opacity-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">

                {/* Left: The Farewell */}
                <div className="space-y-6">
                    <div className="inline-block p-4 border border-[#C5A059]/30 rounded-full bg-[#4A4036]/50 backdrop-blur-sm shadow-inner">
                        <span className="font-cinzel text-3xl text-[#C5A059]">م</span>
                    </div>
                    <div>
                        <h3 className="font-cormorant text-3xl italic text-[#C5A059] mb-2">Akhir-e-Mehfil</h3>
                        <p className="font-inter text-[#E8DCC0]/70 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            "The gathering ends, but the story continues in the lines of code written today."
                        </p>
                    </div>
                </div>

                {/* Center: The Gate (Visual Anchor) */}
                <div className="flex flex-col items-center justify-center opacity-80 mt-12 md:mt-0">
                    <div className="w-40 h-60 border-t-8 border-l-4 border-r-4 border-[#C5A059]/40 rounded-t-full flex items-end justify-center relative overflow-hidden backdrop-blur-sm bg-[#4A4036]/20">
                        {/* Lantern Inside the Gate */}
                        <div className="absolute top-10 animate-sway origin-top">
                            <div className="w-px h-20 bg-[#C5A059]/60 mx-auto"></div>
                            <div className="w-12 h-16 bg-gradient-to-b from-[#8B1538] to-[#C5A059] rounded-xl shadow-[0_0_50px_#C5A059] border border-[#E8DCC0]/30"></div>
                        </div>
                    </div>
                    <span className="font-cinzel text-xs tracking-[0.5em] text-[#C5A059]/60 mt-4 uppercase">Lucknowi Codes</span>
                </div>

                {/* Right: The Connection */}
                <div className="flex flex-col items-center md:items-end space-y-6">
                    <h4 className="font-cinzel text-[#C5A059] tracking-widest text-sm border-b border-[#C5A059]/30 pb-2">RABTA (CONNECT)</h4>

                    <div className="flex space-x-6">
                        {['GitHub', 'LinkedIn', 'Email'].map((link) => (
                            <button key={link} className="w-12 h-12 rounded-full border border-[#E8DCC0]/20 flex items-center justify-center hover:bg-[#C5A059] hover:text-[#2C241B] transition-all duration-300 group">
                                <span className="opacity-80 group-hover:opacity-100 font-serif lowercase italic text-[#E8DCC0] group-hover:text-[#2C241B]">{link[0]}</span>
                            </button>
                        ))}
                    </div>

                    <div className="text-right">
                        <p className="font-urdu text-2xl text-[#C5A059]/40">خدا حافظ</p>
                    </div>
                </div>

            </div>

            {/* Bottom Line */}
            <div className="mt-20 border-t border-[#C5A059]/10 pt-8 text-center">
                <p className="font-inter text-xs text-[#E8DCC0]/30 tracking-widest">
                    DESIGNED & CODED WITH ❦ IN LUCKNOW STYLE
                </p>
            </div>

        </footer>
    )
}

export default Footer

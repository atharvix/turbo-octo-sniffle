import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import MughalFrame from './MughalFrame'

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section id="contact" className="relative py-20 bg-[#F8F5E6] flex justify-center">
            {/* 
                THE COMPACT SCROLL
                A small, refined interaction point before the footer.
            */}
            <div className="w-full max-w-md px-6 relative z-10">

                {/* Closed State - The Invitation */}
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center cursor-pointer group"
                        onClick={() => setIsOpen(true)}
                    >
                        <div className="w-16 h-16 mx-auto bg-[#8B1538] rounded-full flex items-center justify-center border-4 border-[#C5A059]/30 shadow-lg group-hover:scale-110 transition-transform">
                            <span className="font-cinzel text-[#F8F5E6] text-2xl">✉</span>
                        </div>
                        <h3 className="mt-6 font-cormorant text-2xl text-[#4A4036] group-hover:text-[#8B1538] transition-colors">
                            Send a Letter
                        </h3>
                        <p className="font-inter text-xs text-[#C5A059] tracking-widest uppercase mt-2 opacity-60">
                            Click to Open Scroll
                        </p>
                    </motion.div>
                )}

                {/* Open State - Cloth Reveal */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    className="overflow-hidden bg-[#FFFDF5] shadow-2xl rounded-lg border-t-4 border-[#C5A059]"
                >
                    <div className="p-8 relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-[#C5A059] hover:text-[#8B1538] p-2"
                        >
                            ✕
                        </button>

                        <h3 className="font-cinzel text-[#8B1538] text-center mb-8 tracking-widest uppercase text-sm">Paigham (Message)</h3>

                        <form className="space-y-6">
                            <div className="group">
                                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-[#C5A059]/30 py-2 font-cormorant text-lg focus:outline-none focus:border-[#8B1538] transition-colors placeholder-[#E8DCC0]" />
                            </div>
                            <div className="group">
                                <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-[#C5A059]/30 py-2 font-cormorant text-lg focus:outline-none focus:border-[#8B1538] transition-colors placeholder-[#E8DCC0]" />
                            </div>
                            <div className="group">
                                <textarea rows="3" placeholder="Your Message" className="w-full bg-transparent border-b border-[#C5A059]/30 py-2 font-cormorant text-lg focus:outline-none focus:border-[#8B1538] transition-colors resize-none placeholder-[#E8DCC0]"></textarea>
                            </div>
                            <button type="button" className="w-full py-4 bg-[#8B1538] text-[#F8F5E6] font-cinzel tracking-widest hover:bg-[#4A4036] transition-colors">
                                SEAL & SEND
                            </button>
                        </form>
                    </div>

                    {/* Bottom Cloth Edge */}
                    <div className="h-4 w-full bg-[#E8DCC0] scallop-edge"></div>
                </motion.div>

            </div>
        </section>
    )
}

export default Contact

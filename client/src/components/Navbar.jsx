import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('hero')

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        const sections = ['hero', 'about', 'experience', 'projects']
        const observers = sections.map((sectionId) => {
            const element = document.getElementById(sectionId)
            if (!element) return null

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(sectionId)
                    }
                },
                { threshold: 0.5 }
            )

            observer.observe(element)
            return observer
        })

        return () => {
            observers.forEach((observer) => observer?.disconnect())
        }
    }, [])

    const navItems = [
        { id: 'about', label: 'About', icon: '◈' },
        { id: 'experience', label: 'Experience', icon: '✦' },
        { id: 'projects', label: 'Projects', icon: '❖' },
    ]

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto">
                {/* Light Glassmorphism - Cream/White base with gold border */}
                <div className="bg-lucknow-ivory/80 backdrop-blur-md border border-lucknow-gold/30 rounded-full px-8 py-3 shadow-soft-glow flex items-center justify-between">

                    {/* Logo - Gold on light */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => scrollToSection('hero')}
                    >
                        <div className="w-10 h-10 rounded-full border border-lucknow-gold/40 flex items-center justify-center bg-lucknow-cream">
                            <span className="font-cinzel font-bold text-lucknow-gold text-xl">م</span>
                        </div>
                        <span className="font-cormorant text-xl text-gray-600 tracking-wide hidden md:block">
                            Lucknowi<span className="text-lucknow-gold">Codes</span>
                        </span>
                    </motion.div>

                    {/* Nav Items */}
                    <div className="flex items-center space-x-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative group px-2 py-1 transition-colors duration-300 ${activeSection === item.id ? 'text-lucknow-gold' : 'text-gray-500 hover:text-lucknow-faded-maroon'
                                    }`}
                            >
                                <span className="text-lg md:hidden">{item.icon}</span>
                                <span className="hidden md:block font-inter text-sm tracking-widest uppercase">
                                    {item.label}
                                </span>

                                {/* Gold underline for active state */}
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-px bg-lucknow-gold"
                                    />
                                )}

                                {/* Hover ornamental dot */}
                                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] text-lucknow-gold opacity-0 group-hover:opacity-100 transition-opacity">
                                    ✦
                                </span>
                            </button>
                        ))}
                    </div>

                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar

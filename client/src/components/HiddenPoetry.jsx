import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { poetryLines } from '../data/poetry'

const HiddenPoetry = () => {
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercentage =
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

            // Reveal at 85% scroll
            if (scrollPercentage >= 85 && !isRevealed) {
                setIsRevealed(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isRevealed])

    return (
        <AnimatePresence>
            {isRevealed && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 max-w-2xl px-6"
                >
                    <motion.div
                        initial={{ y: 50, filter: 'blur(10px)' }}
                        animate={{ y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="backdrop-blur-md bg-marble-900/40 border border-gold-500/20 rounded-2xl p-8 shadow-gold-glow"
                    >
                        {/* Ornamental header */}
                        <div className="flex items-center justify-center space-x-4 mb-6">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                            <span className="text-gold-400 text-xl">✿</span>
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                        </div>

                        {/* Poetry lines */}
                        <div className="space-y-6">
                            {poetryLines.map((line, index) => (
                                <motion.div
                                    key={line.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.3, duration: 1 }}
                                    className="text-center"
                                >
                                    {/* Urdu text */}
                                    <p className="font-cormorant text-2xl md:text-3xl text-gold-400 mb-2 leading-relaxed">
                                        {line.text}
                                    </p>
                                    {/* English translation */}
                                    <p className="font-cormorant text-sm md:text-base text-marble-400 italic">
                                        {line.translation}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Ornamental footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 1 }}
                            className="flex items-center justify-center space-x-4 mt-6"
                        >
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                            <span className="text-gold-400 text-xl">❖</span>
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default HiddenPoetry

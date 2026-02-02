import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import HiddenPoetry from './components/HiddenPoetry'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    // Cursor glow effect - Keeping active listener for other needs if any,
    // but replacing the visual cursor with CustomCursor
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            <CustomCursor />

            {/* Main content */}
            <div className="relative">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </div>

            {/* Hidden poetry (secret sauce) */}
            <HiddenPoetry />

            {/* Grand Ending */}
            <Footer />
        </>
    )
}

export default App

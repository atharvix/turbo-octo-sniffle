import React from 'react'
import MughalFrame from './MughalFrame'

const experience = [
    {
        id: 1,
        role: "Senior Frontend Engineer",
        company: "Royal Digital Studio",
        year: "2024 - Present",
        description: "Leading the architectural redesign of legacy systems. Implementing design systems inspired by heritage aesthetics."
    },
    {
        id: 2,
        role: "Creative Developer",
        company: "Awadh Tech Solutions",
        year: "2023 - 2024",
        description: "Specialized in 3D web experiences and interactive storytelling. Bridging the gap between art and optimization."
    }
]

const Experience = () => {
    return (
        <section id="experience" className="relative min-h-[50vh]">
            <MughalFrame className="py-20">
                <div className="max-w-2xl mx-auto space-y-12">
                    <div className="text-center">
                        <h2 className="font-cormorant font-bold text-4xl text-[#4A4036] mb-2">Tajarba (Experience)</h2>
                        <div className="w-8 h-1 bg-[#C5A059] mx-auto opacity-50"></div>
                    </div>

                    <div className="space-y-0">
                        {experience.map((exp, i) => (
                            <div key={exp.id} className="relative pl-8 md:pl-0">
                                {/* Timeline Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#C5A059]/20 md:left-1/2 md:-ml-px"></div>

                                <div className={`md:flex items-center justify-between group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Spacer for Timeline */}
                                    <div className="hidden md:block w-5/12"></div>

                                    {/* Center Dot */}
                                    <div className="absolute left-[-4px] md:left-1/2 md:-ml-[5px] w-[10px] h-[10px] rounded-full bg-[#F8F5E6] border-2 border-[#C5A059] group-hover:scale-150 transition-transform z-10"></div>

                                    {/* Content Card */}
                                    <div className="md:w-5/12 mb-10 md:mb-0 relative">
                                        <div className="bg-[#FFFDF5]/50 hover:bg-[#FFFDF5] p-6 border border-[#E8DCC0] rounded-sm transition-colors duration-300">
                                            <span className="font-cinzel text-xs text-[#8B1538] block mb-1">{exp.year}</span>
                                            <h3 className="font-cormorant font-bold text-xl text-[#4A4036]">{exp.role}</h3>
                                            <h4 className="font-inter text-sm text-[#C5A059] mb-3">{exp.company}</h4>
                                            <p className="font-inter text-sm text-[#5D5C61]">{exp.description}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MughalFrame>
        </section>
    )
}

export default Experience

import React from 'react'
import MughalFrame from './MughalFrame'

const projects = [
    {
        id: 1,
        title: "Darbar-e-Navi",
        role: "Full Stack Architect",
        description: "A digital heritage archive for Lucknow's lost monuments. Built with React and Three.js to reconstruct ruins in 3D.",
        tech: ["React", "Three.js", "Node.js"],
        border: "#8B1538"
    },
    {
        id: 2,
        title: "Zardozi Commerce",
        role: "Frontend Lead",
        description: "An e-commerce platform for artisanal embroidery. Features a deep zoom tapestry viewer and cultural storytelling checkout.",
        tech: ["Next.js", "Tailwind", "Stripe"],
        border: "#047857"
    }
]

const Projects = () => {
    return (
        <section id="projects" className="relative min-h-screen">
            <MughalFrame>
                <div className="text-center mb-16">
                    <span className="font-cinzel text-[#C5A059] text-xs transition-all tracking-[0.3em] uppercase block mb-3">Masterpieces</span>
                    <h2 className="font-cormorant font-bold text-5xl md:text-6xl text-[#4A4036] text-carved">
                        Tameerat (Projects)
                    </h2>
                    <div className="w-16 h-px bg-[#8B1538]/30 mx-auto mt-6"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                    {projects.map((project, i) => (
                        <div key={project.id} className="group relative">
                            {/* Project Frame */}
                            <div className={`relative bg-[#FFFDF5] p-8 md:p-12 border-t-4 border-[${project.border}] shadow-lg hover:shadow-xl transition-shadow duration-500`}>
                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 p-2">
                                    <div className={`w-8 h-8 border-t-2 border-r-2 border-[${project.border}]/50`}></div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className={`w-2 h-2 rounded-full bg-[${project.border}]`}></div>
                                            <span className="font-cinzel text-xs text-[#5D5C61] tracking-widest uppercase">{project.role}</span>
                                        </div>
                                        <h3 className="font-cormorant text-3xl md:text-4xl text-[#4A4036] mb-4 group-hover:text-[#C5A059] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="font-inter text-[#5D5C61] leading-relaxed mb-6 border-l-2 border-[#E8DCC0] pl-4">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, idx) => (
                                                <span key={idx} className="bg-[#F8F5E6] border border-[#C5A059]/20 px-3 py-1 rounded-sm text-xs font-cinzel text-[#4A4036]">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Artistic Numbering */}
                                    <div className="hidden md:block">
                                        <span className="font-urdu text-6xl text-[#E8DCC0] opacity-50 select-none">
                                            {i === 0 ? 'اول' : 'دوم'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <button className="px-8 py-3 bg-transparent border border-[#8B1538]/30 text-[#8B1538] font-cinzel text-xs tracking-widest hover:bg-[#8B1538] hover:text-[#FFFDF5] transition-all duration-500">
                        VIEW ARCHIVE
                    </button>
                </div>
            </MughalFrame>
        </section>
    )
}

export default Projects

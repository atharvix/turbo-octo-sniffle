import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import { skills } from '../data/skills'
import * as THREE from 'three'
import MughalFrame from './MughalFrame'

// A dedicated "Treasure Room" feel for Skills
const SkillArtifacts = () => {
    return (
        <group>
            {/* Warm, interior torchlight */}
            <ambientLight intensity={0.4} color="#E8DCC0" />
            <pointLight position={[2, 2, 5]} intensity={1.5} color="#C5A059" distance={10} />
            <pointLight position={[-5, -2, -2]} intensity={0.5} color="#8B1538" />

            {skills.map((skill, i) => {
                const col = (i % 3) - 1
                const row = Math.floor(i / 3) - 1
                const x = col * 2.5
                const y = -row * 2.5

                return (
                    <group key={skill.id} position={[x, y, 0]}>
                        <ArtifactMesh skill={skill} />
                    </group>
                )
            })}
        </group>
    )
}

const ArtifactMesh = ({ skill }) => {
    const mesh = useRef()
    const [hovered, setHovered] = useState(false)

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y += delta * 0.3
            mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1

            const targetScale = hovered ? 1.15 : 1
            mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
        }
    })

    // Choose Geometry based on 'Minted Coin' or 'Carved Tablet' aesthetic
    // All unify as "Treasures"
    const isTablet = skill.category === 'Frontend' || skill.category === 'Backend'

    return (
        <group>
            <mesh
                ref={mesh}
                onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer' }}
                onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
            >
                {isTablet ? (
                    <boxGeometry args={[1.8, 1.2, 0.15]} />
                ) : (
                    <cylinderGeometry args={[0.9, 0.9, 0.15, 32]} rotation={[Math.PI / 2, 0, 0]} />
                )}

                <meshStandardMaterial
                    color={isTablet ? "#8B1538" : "#C5A059"} // Maroon or Gold
                    roughness={0.7} // Matte clay/metal finish
                    metalness={isTablet ? 0.1 : 0.6}
                />

                {/* Text Engraving Effect */}
                <Text
                    position={[0, 0, 0.09]}
                    fontSize={0.25}
                    color={isTablet ? "#F8F5E6" : "#4A4036"}
                    font="/fonts/Cinzel-Regular.ttf"
                    anchorX="center"
                    anchorY="middle"
                >
                    {skill.name}
                </Text>

                {/* Decorative border ring for coins */}
                {!isTablet && (
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.85, 0.02, 16, 32]} />
                        <meshStandardMaterial color="#4A4036" />
                    </mesh>
                )}
            </mesh>

            {/* Shelf/Pedestal Shadow */}
            <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[1, 32]} />
                <meshBasicMaterial color="#000" opacity={0.15} transparent />
            </mesh>
        </group>
    )
}

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen relative bg-[#F8F5E6]">
            <MughalFrame className="py-20">

                {/* Section Header - Embedded in the wall */}
                <div className="relative z-10 text-center mb-16 mx-auto max-w-2xl">
                    <div className="bg-[#E8DCC0] p-1 rounded-full inline-block border border-[#C5A059] mb-4 shadow-inner">
                        <span className="block px-6 py-2 bg-[#F8F5E6] rounded-full font-cinzel text-[#8B1538] text-sm tracking-widest uppercase">
                            The Treasury
                        </span>
                    </div>

                    <h2 className="font-cormorant font-bold text-5xl md:text-6xl text-[#4A4036] mb-6 text-carved">
                        Khazana-e-Hunar
                    </h2>

                    <p className="font-inter text-[#5D5C61] italic max-w-lg mx-auto">
                        "Tools forged in the fires of logic, polished with the cloth of creativity."
                    </p>
                </div>

                {/* 3D Display Case */}
                <div className="h-[70vh] w-full relative">
                    {/* Background Niche Shadow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none rounded-xl mx-4 md:mx-20 border-x border-[#C5A059]/20"></div>

                    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                        <SkillArtifacts />
                    </Canvas>
                </div>

            </MughalFrame>
        </section>
    )
}

export default Skills

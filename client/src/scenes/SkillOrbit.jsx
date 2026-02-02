import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import { skills } from '../data/skills'
import * as THREE from 'three'

const SkillOrbit = () => {
    const groupRef = useRef()
    const [isPaused, setIsPaused] = useState(false)

    // Orbital rotation animation
    useFrame((state) => {
        if (groupRef.current && !isPaused) {
            groupRef.current.rotation.y += 0.003
        }
    })

    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#D4AF37" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B1538" />
            <spotLight
                position={[0, 15, 0]}
                angle={0.5}
                penumbra={1}
                intensity={0.8}
                color="#047857"
            />

            {/* Orbital group */}
            <group ref={groupRef}>
                {skills.map((skill, index) => {
                    const angle = (index / skills.length) * Math.PI * 2
                    const radius = 5
                    const x = Math.cos(angle) * radius
                    const z = Math.sin(angle) * radius
                    const y = Math.sin(angle * 2) * 0.5 // Vertical wave

                    return (
                        <SkillArtifact
                            key={skill.id}
                            skill={skill}
                            position={[x, y, z]}
                            onHover={(hovering) => setIsPaused(hovering)}
                        />
                    )
                })}
            </group>

            {/* Central ornament */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
                <mesh position={[0, 0, 0]}>
                    <octahedronGeometry args={[0.5, 0]} />
                    <meshStandardMaterial
                        color="#D4AF37"
                        metalness={1}
                        roughness={0}
                        emissive="#D4AF37"
                        emissiveIntensity={0.5}
                    />
                </mesh>
            </Float>
        </>
    )
}

// Individual skill artifact component
const SkillArtifact = ({ skill, position, onHover }) => {
    const meshRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle rotation
            meshRef.current.rotation.x += 0.01
            meshRef.current.rotation.y += 0.01

            // Scale on hover
            const targetScale = hovered ? 1.3 : 1
            meshRef.current.scale.lerp(
                new THREE.Vector3(targetScale, targetScale, targetScale),
                0.1
            )
        }
    })

    const handlePointerOver = () => {
        setHovered(true)
        onHover(true)
        document.body.style.cursor = 'pointer'
    }

    const handlePointerOut = () => {
        setHovered(false)
        onHover(false)
        document.body.style.cursor = 'default'
    }

    // Geometry selection
    const getGeometry = () => {
        switch (skill.geometry) {
            case 'sphere':
                return <sphereGeometry args={[0.5, 32, 32]} />
            case 'box':
                return <boxGeometry args={[0.8, 0.8, 0.8]} />
            case 'octahedron':
                return <octahedronGeometry args={[0.6, 0]} />
            case 'torus':
                return <torusGeometry args={[0.4, 0.2, 16, 32]} />
            case 'cone':
                return <coneGeometry args={[0.5, 0.8, 32]} />
            case 'dodecahedron':
                return <dodecahedronGeometry args={[0.5, 0]} />
            case 'tetrahedron':
                return <tetrahedronGeometry args={[0.6, 0]} />
            default:
                return <sphereGeometry args={[0.5, 32, 32]} />
        }
    }

    return (
        <group position={position}>
            {/* Main artifact */}
            <mesh
                ref={meshRef}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                onClick={() => setClicked(!clicked)}
            >
                {getGeometry()}
                <meshStandardMaterial
                    color={skill.color}
                    metalness={0.7}
                    roughness={0.3}
                    emissive={skill.color}
                    emissiveIntensity={hovered ? 0.5 : 0.1}
                />
            </mesh>

            {/* Skill name text (appears on hover) */}
            {hovered && (
                <Text
                    position={[0, 1.2, 0]}
                    fontSize={0.3}
                    color="#D4AF37"
                    anchorX="center"
                    anchorY="middle"
                    font="/fonts/Cinzel-Regular.ttf" // Will fallback to default if not found
                >
                    {skill.name}
                </Text>
            )}

            {/* Calligraphy stroke (decorative ring) */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.8, 0.02, 8, 32]} />
                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={0.9}
                    roughness={0.1}
                    emissive="#D4AF37"
                    emissiveIntensity={hovered ? 0.3 : 0.05}
                    transparent
                    opacity={hovered ? 0.8 : 0.3}
                />
            </mesh>
        </group>
    )
}

export default SkillOrbit

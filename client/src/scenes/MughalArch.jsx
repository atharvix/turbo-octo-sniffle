import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'

// A simplified, static, airy arch frame in white marble
const MughalArch = () => {
    return (
        <>
            {/* Soft, bright morning light */}
            <ambientLight intensity={0.8} color="#FFFDD0" /> {/* Creamy ambient */}
            <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFD1DC" /> {/* Rosy sunlight */}
            <pointLight position={[-5, 2, -2]} intensity={0.5} color="#E0FFFF" /> {/* Cool fill (sky) */}

            <Environment preset="city" />

            {/* Static frame, very gentle float */}
            <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.2}>
                <group position={[0, 0, 0]}>
                    {/* Main Arch Frame - White Marble */}
                    <mesh position={[0, 1, 0]}>
                        <torusGeometry args={[2.2, 0.08, 16, 64, Math.PI]} />
                        <meshStandardMaterial
                            color="#FFFFF0" // Ivory
                            roughness={0.2}
                            metalness={0.1}
                        />
                    </mesh>

                    {/* Inner Golden Line - Very thin */}
                    <mesh position={[0, 1, 0.02]}>
                        <torusGeometry args={[2.0, 0.02, 16, 64, Math.PI]} />
                        <meshStandardMaterial
                            color="#C5A059" // Soft Antique Gold
                            roughness={0.3}
                            metalness={0.6}
                        />
                    </mesh>

                    {/* Pillars */}
                    {[-2.2, 2.2].map((x, i) => (
                        <group key={i} position={[x, -0.2, 0]}>
                            <mesh>
                                <cylinderGeometry args={[0.08, 0.1, 2.5, 32]} />
                                <meshStandardMaterial color="#FFFFF0" roughness={0.2} metalness={0.1} />
                            </mesh>
                            {/* Gold bands */}
                            <mesh position={[0, 1.2, 0]}>
                                <cylinderGeometry args={[0.09, 0.09, 0.05, 32]} />
                                <meshStandardMaterial color="#C5A059" metalness={0.6} />
                            </mesh>
                        </group>
                    ))}

                    {/* Central Motif - Jali Feel (Diamonds) */}
                    {[0, -0.8, 0.8].map((x, i) => (
                        <mesh key={i} position={[x, 2.8 - Math.abs(x) * 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
                            <boxGeometry args={[0.15, 0.15, 0.02]} />
                            <meshStandardMaterial color="#C5A059" transparent opacity={0.6} />
                        </mesh>
                    ))}

                </group>
            </Float>
        </>
    )
}

export default MughalArch

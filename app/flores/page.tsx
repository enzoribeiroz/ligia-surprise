// "use client"

// import { Canvas } from "@react-three/fiber"
// import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
// import { Suspense, useState } from "react"
// import * as THREE from "three"
// import { motion, AnimatePresence } from "framer-motion"
// import { Button } from "@/components/ui/button"

// function Flower({
//   position,
//   rotation,
//   color,
//   scale = 1,
// }: { position: [number, number, number]; rotation: [number, number, number]; color: string; scale?: number }) {
//   return (
//     <group position={position} rotation={rotation} scale={scale}>
//       {/* Stem */}
//       <mesh position={[0, -1.5, 0]}>
//         <cylinderGeometry args={[0.02, 0.03, 3, 8]} />
//         <meshStandardMaterial color="#2d5016" />
//       </mesh>

//       {/* Leaves */}
//       <mesh position={[-0.15, -1, 0]} rotation={[0, 0, Math.PI / 4]}>
//         <sphereGeometry args={[0.15, 8, 8]} />
//         <meshStandardMaterial color="#4a7c2c" />
//       </mesh>
//       <mesh position={[0.15, -0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
//         <sphereGeometry args={[0.12, 8, 8]} />
//         <meshStandardMaterial color="#4a7c2c" />
//       </mesh>

//       {/* Flower head */}
//       <group position={[0, 0.2, 0]}>
//         {/* Petals arranged in a circle */}
//         {[0, 1, 2, 3, 4, 5].map((i) => {
//           const angle = (i / 6) * Math.PI * 2
//           const x = Math.cos(angle) * 0.25
//           const z = Math.sin(angle) * 0.25
//           return (
//             <mesh key={i} position={[x, 0, z]} rotation={[Math.PI / 3, 0, angle]}>
//               <sphereGeometry args={[0.2, 16, 16]} />
//               <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
//             </mesh>
//           )
//         })}

//         {/* Center of flower */}
//         <mesh position={[0, 0, 0]}>
//           <sphereGeometry args={[0.15, 16, 16]} />
//           <meshStandardMaterial color="#FFD700" roughness={0.2} />
//         </mesh>
//       </group>
//     </group>
//   )
// }

// function Bouquet() {
//   const flowers = [
//     {
//       position: [0, 0, 0] as [number, number, number],
//       rotation: [0.1, 0, 0] as [number, number, number],
//       color: "#FF1493",
//       scale: 1.1,
//     },
//     {
//       position: [-0.6, -0.3, 0.3] as [number, number, number],
//       rotation: [0.2, -0.3, -0.2] as [number, number, number],
//       color: "#FF69B4",
//       scale: 1,
//     },
//     {
//       position: [0.6, -0.3, 0.3] as [number, number, number],
//       rotation: [0.2, 0.3, 0.2] as [number, number, number],
//       color: "#FFB6C1",
//       scale: 1,
//     },
//     {
//       position: [-0.4, -0.5, -0.2] as [number, number, number],
//       rotation: [0.15, -0.2, -0.15] as [number, number, number],
//       color: "#FFC0CB",
//       scale: 0.9,
//     },
//     {
//       position: [0.4, -0.5, -0.2] as [number, number, number],
//       rotation: [0.15, 0.2, 0.15] as [number, number, number],
//       color: "#FF6B9D",
//       scale: 0.9,
//     },
//     {
//       position: [0, -0.6, 0.4] as [number, number, number],
//       rotation: [0.25, 0, 0] as [number, number, number],
//       color: "#DB7093",
//       scale: 0.95,
//     },
//     {
//       position: [-0.7, -0.8, 0] as [number, number, number],
//       rotation: [0.3, -0.4, -0.25] as [number, number, number],
//       color: "#C71585",
//       scale: 0.85,
//     },
//   ]

//   return (
//     <group position={[0, -1, 0]}>
//       {/* Wrapping paper - cone shape */}
//       <mesh position={[0, -1.5, 0]} rotation={[0, 0, 0]}>
//         <coneGeometry args={[1.2, 2.5, 32]} />
//         <meshStandardMaterial color="#f5e6d3" roughness={0.8} side={THREE.DoubleSide} />
//       </mesh>

//       {/* Ribbon */}
//       <mesh position={[0, -1.3, 0]} rotation={[0, 0, 0]}>
//         <torusGeometry args={[1.15, 0.08, 16, 32]} />
//         <meshStandardMaterial color="#d4af37" metalness={0.6} roughness={0.3} />
//       </mesh>

//       {/* Bow */}
//       <group position={[0, -1.3, 1.1]}>
//         <mesh position={[-0.2, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
//           <sphereGeometry args={[0.15, 16, 16]} />
//           <meshStandardMaterial color="#d4af37" metalness={0.6} roughness={0.3} />
//         </mesh>
//         <mesh position={[0.2, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
//           <sphereGeometry args={[0.15, 16, 16]} />
//           <meshStandardMaterial color="#d4af37" metalness={0.6} roughness={0.3} />
//         </mesh>
//         <mesh position={[0, 0, 0]}>
//           <sphereGeometry args={[0.1, 16, 16]} />
//           <meshStandardMaterial color="#d4af37" metalness={0.6} roughness={0.3} />
//         </mesh>
//       </group>

//       {/* Flowers */}
//       {flowers.map((flower, i) => (
//         <Flower key={i} {...flower} />
//       ))}
//     </group>
//   )
// }

// function Scene() {
//   return (
//     <>
//       <PerspectiveCamera makeDefault position={[0, 0, 5]} />
//       <OrbitControls enableZoom={true} enablePan={false} minDistance={3} maxDistance={8} maxPolarAngle={Math.PI / 2} />

//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
//       <directionalLight position={[-5, 3, -5]} intensity={0.5} />
//       <pointLight position={[0, 2, 2]} intensity={0.8} color="#ffb6c1" />

//       <Suspense fallback={null}>
//         <Bouquet />
//         <Environment preset="sunset" />
//       </Suspense>
//     </>
//   )
// }

// export default function FloresPage() {
//   const [showInstructions, setShowInstructions] = useState(true)

//   return (
//     <div className="relative w-full h-screen bg-gradient-to-br from-pink-50 to-rose-100">
//       {/* 3D Canvas */}
//       <Canvas shadows>
//         <Scene />
//       </Canvas>

//       {/* Overlay text */}
//       <div className="absolute top-8 left-0 right-0 text-center pointer-events-none z-10">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="font-serif text-4xl md:text-6xl text-rose-900 mb-2"
//         >
//           Para Você, Meu Amor
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-rose-700 text-lg"
//         >
//           Um buquê especial feito com carinho
//         </motion.p>
//       </div>

//       {/* Instructions */}
//       <AnimatePresence>
//         {showInstructions && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="absolute bottom-8 left-0 right-0 flex justify-center z-10"
//           >
//             <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
//               <p className="text-rose-800 text-sm">Arraste para girar • Role para aproximar</p>
//               <Button
//                 onClick={() => setShowInstructions(false)}
//                 variant="ghost"
//                 size="sm"
//                 className="mt-2 w-full text-rose-600 hover:text-rose-800"
//               >
//                 Entendi
//               </Button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

"use client"

import React, { Suspense, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  OrbitControls,
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei"
import * as THREE from "three"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

function petalProfile(length = 0.55, width = 0.22, curl = 0.16, tipSlope = 0.4) {
  const pts: THREE.Vector2[] = []
  const steps = 22
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const y = t * length
    const bulge = Math.sin(t * Math.PI) * width * (1 - t * tipSlope)
    const r = bulge + curl * Math.pow(t, 2)
    pts.push(new THREE.Vector2(r, y))
  }
  return pts
}

function jitterGeometry(geo: THREE.BufferGeometry, amount = 0.002) {
  const pos = geo.attributes.position as THREE.BufferAttribute
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) + (Math.random() - 0.5) * amount
    const y = pos.getY(i) + (Math.random() - 0.5) * amount
    const z = pos.getZ(i) + (Math.random() - 0.5) * amount
    pos.setXYZ(i, x, y, z)
  }
  pos.needsUpdate = true
  geo.computeVertexNormals()
}

function MakePetalGeometry(baseScale = 1, invert = false) {
  const profile = petalProfile(0.56 * baseScale, 0.24 * baseScale, 0.14 * baseScale, 0.45)
  const lathe = new THREE.LatheGeometry(profile, 36)
  lathe.rotateX(Math.PI / 2)
  lathe.scale(1, 1, 0.98)
  if (invert) lathe.scale(-1, 1, 1)
  jitterGeometry(lathe, 0.004 * baseScale)
  return lathe
}

function RoseSingle({
  scale = 1,
  color = "#a5091e", // vermelho intenso
  centerColor = "#ffd09a",
}: {
  scale?: number
  color?: string
  centerColor?: string
}) {
  const groupRef = useRef<THREE.Group>(null)

  const petalGeos = useMemo(
    () => [
      MakePetalGeometry(0.95, false),
      MakePetalGeometry(0.9, true),
      MakePetalGeometry(1.05, false),
      MakePetalGeometry(0.85, false),
    ],
    []
  )

  const colors = useMemo(
    () => [
      color,
      lightenColor(color, 0.05),
      lightenColor(color, 0.12),
      lightenColor(color, -0.03),
    ],
    [color]
  )

  const layers = useMemo(() => {
    const arr: any[] = []
    const innerCount = 20
    for (let i = 0; i < innerCount; i++) {
      const a = (i / innerCount) * Math.PI * 2
      arr.push({
        geo: petalGeos[i % petalGeos.length],
        angle: a,
        radius: 0.02 + Math.random() * 0.06,
        tilt: -0.1 + Math.random() * 0.06,
        scale: 0.45 + Math.random() * 0.25,
        rotationZ: -0.15 + Math.random() * 0.3,
        colorIndex: i % colors.length,
      })
    }

    const midCount = 24
    for (let i = 0; i < midCount; i++) {
      const a = (i / midCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.08
      arr.push({
        geo: petalGeos[i % petalGeos.length],
        angle: a,
        radius: 0.12 + Math.random() * 0.16,
        tilt: -0.04 + Math.random() * 0.08,
        scale: 0.85 + Math.random() * 0.25,
        rotationZ: -0.18 + Math.random() * 0.36,
        colorIndex: (i + 1) % colors.length,
      })
    }

    const outerCount = 18
    for (let i = 0; i < outerCount; i++) {
      const a = (i / outerCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.12
      arr.push({
        geo: petalGeos[(i + 1) % petalGeos.length],
        angle: a,
        radius: 0.28 + Math.random() * 0.24,
        tilt: 0.02 + Math.random() * 0.12,
        scale: 1.05 + Math.random() * 0.4,
        rotationZ: -0.25 + Math.random() * 0.5,
        colorIndex: (i + 2) % colors.length,
      })
    }

    return arr
  }, [petalGeos, colors])

  const leafGeo = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.bezierCurveTo(0.12, 0.28, 0.48, 0.32, 0.9, 0.06)
    shape.bezierCurveTo(0.5, -0.05, 0.12, -0.12, 0, 0)
    const extrude = new THREE.ExtrudeGeometry(shape, {
      steps: 1,
      depth: 0.02,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.01,
      bevelThickness: 0.01,
    })
    extrude.rotateX(-Math.PI / 2)
    jitterGeometry(extrude, 0.0015)
    return extrude
  }, [])

  const stemGeo = useMemo(() => {
    const g = new THREE.CylinderGeometry(0.03, 0.035, 3.2, 10)
    g.translate(0, -1.6, 0)
    return g
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = Math.sin(t * 0.18) * 0.06
    groupRef.current.position.y = -0.6 + Math.sin(t * 0.6) * 0.025
  })

  return (
    <group ref={groupRef} scale={scale} position={[0, -0.6, 0]}>
      {/* center */}
      <mesh position={[0, 0.05, 0]}>
        <sphereGeometry args={[0.06, 16, 12]} />
        <meshPhysicalMaterial color={centerColor} roughness={0.35} clearcoat={0.1} />
      </mesh>

      {/* sepals */}
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (i / 5) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(a) * 0.06, -0.02, Math.sin(a) * 0.06]} rotation={[0.5, a, 0]} scale={0.35}>
            <cylinderGeometry args={[0.01, 0.03, 0.28, 8]} />
            <meshPhysicalMaterial color={"#1f4e1c"} roughness={0.72} />
          </mesh>
        )
      })}

      {/* petals */}
      {layers.map((p, i) => {
        const ang = p.angle
        const x = Math.cos(ang) * p.radius
        const z = Math.sin(ang) * p.radius
        const y = 0.01 + (i % 5) * 0.004
        return (
          <mesh
            key={i}
            geometry={p.geo}
            position={[x, y, z]}
            rotation={[p.tilt, p.angle + (Math.random() - 0.5) * 0.02, p.rotationZ]}
            scale={p.scale}
            castShadow
            receiveShadow
          >
            <meshPhysicalMaterial
              color={colors[p.colorIndex]}
              roughness={0.42}
              clearcoat={0.25}
              clearcoatRoughness={0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
        )
      })}

      {/* stem */}
      <mesh geometry={stemGeo} castShadow receiveShadow>
        <meshPhysicalMaterial color={"#255121"} roughness={0.75} />
      </mesh>

      {/* thorns */}
      {Array.from({ length: 8 }).map((_, i) => {
        const vy = -0.4 - i * 0.25 + (Math.random() - 0.5) * 0.12
        const side = i % 2 === 0 ? 1 : -1
        return (
          <mesh key={i} position={[side * (0.03 + Math.random() * 0.02), vy, (Math.random() - 0.5) * 0.01]} rotation={[Math.PI / 2, 0, Math.random() * 1]}>
            <coneGeometry args={[0.02 + Math.random() * 0.006, 0.08 + Math.random() * 0.04, 6]} />
            <meshStandardMaterial color={"#1e3a16"} roughness={0.8} />
          </mesh>
        )
      })}

      {/* leaves FIXED to stem */}
      {[
        { pos: [0.1, -0.9, 0.05], rot: [0.25, -0.4, 0.05], scl: 1.1 },
        { pos: [-0.1, -1.3, -0.1], rot: [0.2, 0.4, -0.1], scl: 1 },
      ].map((l, i) => (
        <group key={i} position={l.pos as [number, number, number]} rotation={l.rot as [number, number, number]} scale={l.scl}>
          {/* small stem connector */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.01, 0.012, 0.15, 6]} />
            <meshPhysicalMaterial color={"#255121"} roughness={0.7} />
          </mesh>

          {/* leaf */}
          <mesh position={[0.2, 0, 0]} rotation={[0, 0.2, 0]}>
            <shapeGeometry args={[new THREE.Shape()]} />
          </mesh>
          <mesh position={[0.25, 0, 0]}>
            <planeGeometry args={[0.6, 0.3]} />
            <meshPhysicalMaterial color={"#2c6b28"} roughness={0.7} metalness={0.02} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function lightenColor(hex: string, lum = 0) {
  hex = hex.replace("#", "")
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("")
  const rgb = [0, 2, 4].map((i) => parseInt(hex.substring(i, i + 2), 16))
  const out = rgb
    .map((c) => Math.round(Math.min(255, Math.max(0, c + 255 * lum))).toString(16).padStart(2, "0"))
    .join("")
  return `#${out}`
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.15, 5.2]} fov={32} />
      <OrbitControls enablePan={false} minDistance={2.2} maxDistance={8} />
      <directionalLight position={[4, 6, 2]} intensity={1.4} color={0xffebe5} castShadow />
      <ambientLight intensity={0.45} />
      <directionalLight position={[-3, 2, -4]} intensity={0.65} color={0xffd9e0} />
      <Suspense fallback={null}>
        <RoseSingle />
        <Environment preset="studio" />
      </Suspense>
      <ContactShadows position={[0, -1.9, 0]} opacity={0.6} width={3} blur={1.8} far={2.2} />
    </>
  )
}

export default function Page() {
  const [showHelp, setShowHelp] = useState(true)

  return (
    <div className="w-full h-screen bg-gradient-to-b from-rose-50 to-rose-100 flex items-center justify-center overflow-hidden">
      <Canvas shadows dpr={[1, 2]}>
        <Scene />
      </Canvas>

      <div className="absolute top-6 left-0 right-0 text-center z-20 pointer-events-none">
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-serif text-rose-900 drop-shadow">
          Uma Rosa Vermelha
        </motion.h1>
      </div>

      <AnimatePresence>
        {showHelp && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <p className="text-rose-800 text-sm">Arraste para girar • Role para aproximar</p>
              <Button onClick={() => setShowHelp(false)} variant="ghost" size="sm" className="mt-2 w-full text-rose-600 hover:text-rose-800">
                Entendi
              </Button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

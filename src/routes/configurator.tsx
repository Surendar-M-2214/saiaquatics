import { createFileRoute } from '@tanstack/react-router'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { useState } from 'react'

export const Route = createFileRoute('/configurator')({
  component: ConfiguratorPage,
})

function ConfiguratorPage() {
  const [tankType, setTankType] = useState('cube')
  const [propColor, setPropColor] = useState('#8B4513')

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white">
      {/* 3D Canvas Area */}
      <div className="flex-1 relative cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
          <color attach="background" args={['#1e293b']} />
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          
          <group position={[0, -1, 0]}>
            {/* Tank Glass Sample */}
            <mesh position={[0, 1, 0]}>
              {tankType === 'cube' ? (
                <boxGeometry args={[2, 2, 2]} />
              ) : (
                <cylinderGeometry args={[1.5, 1.5, 2, 32]} />
              )}
              <meshStandardMaterial 
                color="#88ccff"
                transparent={true}
                opacity={0.3}
                roughness={0.1}
                metalness={0.1}
              />
            </mesh>
            
            {/* Sample Prop inside Tank */}
            <mesh position={[0, 0.5, 0]}>
              <dodecahedronGeometry args={[0.6]} />
              <meshStandardMaterial color={propColor} roughness={0.8} />
            </mesh>

            <ContactShadows position={[0, -0.01, 0]} resolution={256} scale={10} blur={2} opacity={0.4} far={10} color="#000000" />
          </group>
          <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="h-auto md:h-1/3 bg-slate-800 p-6 shadow-xl border-t border-slate-700">
        <h2 className="text-2xl font-bold mb-4">Aquarium Configurator (Sample)</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-300">Tank Shape</h3>
            <div className="flex gap-2">
              <button 
                onClick={() => setTankType('cube')}
                className={`px-4 py-2 rounded transition-colors ${tankType === 'cube' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
              >
                Cube Setup
              </button>
              <button 
                onClick={() => setTankType('cylinder')}
                className={`px-4 py-2 rounded transition-colors ${tankType === 'cylinder' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
              >
                Cylinder Setup
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-300">Inner Prop Material</h3>
            <div className="flex gap-4 items-center h-10">
              <button onClick={() => setPropColor('#8B4513')} className={`w-10 h-10 rounded-full bg-[#8B4513] border-2 ${propColor === '#8B4513' ? 'border-cyan-400 scale-110' : 'border-transparent'} transition-all`} title="Driftwood"></button>
              <button onClick={() => setPropColor('#2E8B57')} className={`w-10 h-10 rounded-full bg-[#2E8B57] border-2 ${propColor === '#2E8B57' ? 'border-cyan-400 scale-110' : 'border-transparent'} transition-all`} title="Aquatic Plant"></button>
              <button onClick={() => setPropColor('#A9A9A9')} className={`w-10 h-10 rounded-full bg-[#A9A9A9] border-2 ${propColor === '#A9A9A9' ? 'border-cyan-400 scale-110' : 'border-transparent'} transition-all`} title="Dragon Stone"></button>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          * Drag to rotate. Scroll to zoom. This is a functional sample using geometric primitives. You can replace these with your actual 3D `.glb` files later.
        </p>
      </div>
    </div>
  )
}

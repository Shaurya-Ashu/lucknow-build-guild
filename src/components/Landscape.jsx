import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Cyl from './Cyl'
import Herosec from './Herosec'

const Landscape = () => {
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <Canvas
        className='absolute inset-0 z-20'
        style={{ left: '30%', width: '70%' }}
        camera={{ fov: 55 }}
        gl={{ alpha: true }}
      >
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={1.2} />
        <Cyl />
        <EffectComposer>
          <Bloom mipmapBlur intensity={0.2} luminanceThreshold={0.8} />
        </EffectComposer>
      </Canvas>

      <div className='absolute inset-0 z-10'>
        <Herosec />
      </div>
    </div>
  )
}

export default Landscape
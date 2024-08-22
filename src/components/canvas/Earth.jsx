import React, { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}> 
        <OrbitControls autoRotate={true} enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

const Earth = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1280px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive object={earth.scene} scale={isMobile ? 3 : 2} position-y={0} rotation-y={0} />
  )
}

export default EarthCanvas
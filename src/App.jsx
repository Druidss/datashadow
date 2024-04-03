import { Canvas } from '@react-three/fiber';
import './App.css';
import Basic from './ParticlesDemo';
import { OrbitControls } from "@react-three/drei";
import Fbo from './fbo/FBOParticles.jsx'



function App() {
  return (
    <>
      <Canvas  camera={{ position: [1.5, 1.5, 1.5] }}>
        <ambientLight intensity={0.5} />
        {/* <Basic  count={2000} shape="sphere" /> */}
        <Fbo></Fbo>
         <OrbitControls autoRotate />
      </Canvas>
    </>
  )
}

export default App

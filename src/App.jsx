import { Canvas } from '@react-three/fiber';
import './App.css';
import Basic from './components/ParticlesDemo';
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas  camera={{ position: [1.5, 1.5, 1.5] }}>
        <ambientLight intensity={0.5} />
        <color attach='background' args={['#101010']} />
        <Basic  count={2000} shape="sphere" />
         <OrbitControls autoRotate />
      </Canvas>
    </>
  )
}

export default App

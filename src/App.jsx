import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from "@react-three/drei";
import Fbo from './fbo/FBOParticles.jsx'
import './App.css';
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'



// import Text from './components/TextMesh.jsx'



function App() {

  // const font = useLoader(FontLoader, './assets/ocr.json');
  const userAgent = navigator.userAgent;

  return (
    <>
      <Canvas  camera={{ position: [1.5, 1.5, 1.5] }}>
        <ambientLight intensity={0.5} />  
        <Text
          scale={[0.2, 0.2, 0.2]}
          color="white" 
          anchorX="center" 
          anchorY="middle" 
          // font= {font}
        > Your URL: {'\n'} {window.location.href} {'\n'} </Text>


        <Text
          scale={[0.05, 0.05, 0.05]}
          fill="none"
          anchorX="center" 
          anchorY="20000000" 
          strokeWidth={0.01}
          strokeColor="white"
          textAlign= 'left'
        > 
          {'\n'}vendor: {navigator.vendor} {'\n'} 
          language: {navigator.language} {'\n'} 
          version: {navigator.appVersion.split('10')[0]} {'\n'} 
        
        </Text>
        <Fbo></Fbo>
         <OrbitControls autoRotate />
      </Canvas>
    </>
  )
}

export default App

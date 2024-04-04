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
    <VRButton />
      <Canvas  camera={{ position: [1.5, 1.5, 1.5] }}>
        <XR>
        <ambientLight intensity={0.5} />  
        <Text
          scale={[0.2, 0.2, 0.2]}
          color="white" 
          anchorX="center" 
          anchorY="middle" 
          // font= {font}
        > 
         Your URL: {'\n'} {window.location.href} {'\n'} 
        </Text>

        <Text
          scale={[0.06, 0.06, 0.06]}
          fillOpacity="0"
          anchorX="center" 
          anchorY="2000" 
          strokeWidth={0.02}
          strokeColor="white"
          textAlign= 'left'
        > 
        {'\n'}
          {'\n'}vendor: {navigator.vendor} {'\n'} 
          version: {navigator.appVersion.split('10')[0]} {'\n'}
          platform: {navigator.platform} {'\n'}
          language: {navigator.language} {'\n'}  
          width: {window.screen.width}vw {'\n'}  
          height: {window.screen.height}vh {'\n'}  
          cookieEnabled?: {navigator.cookieEnabled ? 'true' : 'false'} {'\n'}  
        </Text>
        <Fbo></Fbo>
        <OrbitControls autoRotate />
        </XR>
      </Canvas>
    </>
  )
}

export default App

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Text3D } from "@react-three/drei";
import Fbo from './fbo/FBOParticles.jsx'
import './App.css';
import sound from './assets/bgm.mp3'
import { VRButton, XR } from '@react-three/xr'
import { useState, useEffect } from "react";



function App() {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(sound);

  useEffect(() => {
    audio.loop = true;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <>
    <VRButton />
      <Canvas  camera={{ position: [0, -0.24, 2.2] }} onClick={toggleMusic}>
        <XR>
        <ambientLight intensity={0.5} />  
        <Text3D
          scale={[0.1, 0.1, 0.1]}
          position={[-1, 0, 0]}
          color="white" 
          anchorX="center" 
          anchorY="middle" 
          font="/ocr.json"
        > 
         {`Your URL:\n`} {window.location.href}
        </Text3D>

        <Text
          scale={[0.06, 0.06, 0.06]}
          fillOpacity="0"
          anchorX="center" 
          anchorY="2000" 
          strokeWidth={0.03}
          strokeColor="white"
          textAlign= 'left'
        > 
        {'\n'} {'\n'}{'\n'}
          {'\n'}vendor: {navigator.vendor} {'\n'} 
          version: {navigator.appVersion.split('')[0]} {'\n'}
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

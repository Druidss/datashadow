import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Text3D } from "@react-three/drei";
import Fbo from './fbo/FBOParticles.jsx'
import './App.css';
import sound from './assets/bgm.mp3'
import talk from './assets/talk.mp3' 
import { VRButton, XR, Controllers } from '@react-three/xr'
import { useState, useEffect } from "react";
import { MeshStandardMaterial } from 'three';



function App() {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(sound);
  const talkAudio = new Audio(talk);

  useEffect(() => {
    audio.loop = true;
    talkAudio.loop = true;
    if (isPlaying) {
      audio.play();
      talkAudio.play();
    } 
    else {
      audio.pause();
      talkAudio.pause();
    }
    return () => {
      audio.pause();
      talkAudio.pause();
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying((prevState) => !prevState);
  };




const textMaterial = new MeshStandardMaterial({
  color: 'white',
  transparent: true,
  opacity: 1, // Set your desired opacity here
});

<Text material={textMaterial}>
  Hello World
</Text>
  return (
    <>
    <VRButton />
      <Canvas  camera={{ position: [0, -0.24, 2.2] }} onClick={toggleMusic}>
        <XR>
        <ambientLight intensity={0.5} />  
        <Controllers />
        <Text3D
          scale={[0.1, 0.1, 0.1]}
          position={[-1, 0, 0]}
          color="white" 
          anchorX="center" 
          anchorY="middle" 
          font="/ocr.json"
          // material={textMaterial}
        > 
         {`Your URL:\n`} {window.location.href}
        </Text3D>

        <Text
          scale={[0.06, 0.06, 0.06]}
          fillOpacity="0"
          anchorX="center" 
          anchorY="2000" 
          strokeWidth={0.3}
          strokeColor="white"
          textAlign= 'left'
          // material={textMaterial}
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

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from "@react-three/drei";
import Fbo from './fbo/FBOParticles.jsx'
import './App.css';
import sound from './assets/bgm.mp3'
import { VRButton, XR } from '@react-three/xr'
import { useState, useEffect } from "react";




function App() {
  
  const [isPlaying, setIsPlaying] = useState(false);
  // const [audio] = useState(new Audio('./assets/bgm.mp3'));
  const audio = new Audio(sound);

  useEffect(() => {
    audio.loop = true;
    // console.log(audio);  
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
      // audio.src = ''; 
    };
  }, [isPlaying]);


  const toggleMusic = () => {
    setIsPlaying((prevState) => !prevState);
  };


  return (
    <>
    <VRButton   />
    {/* <audio src="./assets/bgm.mp3" autoPlay={isPlaying} loop /> */}
      <Canvas  camera={{ position: [1.5, 1.5, 1.5] }} onClick={toggleMusic}>
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

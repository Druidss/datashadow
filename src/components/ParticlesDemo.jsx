import { PresentationControls, Stage } from "@react-three/drei"
import { useRef } from "react";

const Basic = () =>{
  const points = useRef();
  return (
  // <PresentationControls 
  //   speed={1.5} 
  //   global 
  //   zoom={0.7} 
  //   polar={[-1, Math.PI / 2]}
  //   >
  //   <Stage environment={'city'} intensity={1} contactShadow={false} shadowBias={-0.0015}>
    <points ref={points}>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />
    </points>
    // </Stage>
    // </PresentationControls>
  );
}

export default Basic;
import {  useThree } from '@react-three/fiber';
import { useRef } from "react";
import { Text3D, useMatcapTexture } from "@react-three/drei";

import '../App.css'; // 导入文本的 CSS 样式文件

const Text = (props) => {
  
  const {position} = props;
  const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
  const ref = useRef();
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <>
      <Text3D       
        position={[0, 0, -10]}
        scale={[-1, 1, 1]}
        ref={ref}
        size={w / 9}
        maxWidth={[-w / 5, -h * 2, 3]}
        font={"/gt.json"}
        curveSegments={24}
        brevelSegments={1}
        bevelEnabled
        bevelSize={0.08}
        bevelThickness={0.03}
        height={1}
        lineHeight={0.9}
        letterSpacing={0.3}
      >
        {`JULIALAB\n  code\nsandbox`}
        <meshMatcapMaterial color="white" matcap={matcapTexture} />
      </Text3D>
  </>
  );
};

export default Text;
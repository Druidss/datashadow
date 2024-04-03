import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const  TextMesh = (props) => {

  const meshRef = useRef();
  const { text, position, color } = props;


  useEffect(() => {
    const fontLoader = new THREE.FontLoader();
    fontLoader.load('/path/to/font.json', function (font) {
      const textGeometry = new THREE.TextGeometry(text, {
        font: font,
        size: 10,
        height: 1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.5,
        bevelSize: 0.2,
        bevelOffset: 0,
        bevelSegments: 3
      });

      const textMaterial = new THREE.MeshBasicMaterial({ color: color });

      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.copy(position);

      meshRef.current = textMesh;
    });

    return () => {
      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        meshRef.current.material.dispose();
      }
    };
  }, [text, position, color]);

  return null; // 文字网格将在 Three.js 场景中创建，不需要在 JSX 中渲染任何内容
}

export default TextMesh;
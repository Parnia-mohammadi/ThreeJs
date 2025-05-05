import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import RotatingBox from "./rotateBox";
function Scene() {
  const [BoxPosition, setBoxPosition] = useState([2, 0, 1]);

  return (
    <Canvas>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      <RotatingBox />
      <mesh
        position={BoxPosition}
        onPointerOver={() => setBoxPosition([2, 0, 2])}
        onPointerOut={() => setBoxPosition([2, 0, 1])}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </Canvas>
  );
}

export default Scene;

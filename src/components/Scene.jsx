import { Canvas } from "@react-three/fiber";
import { useState } from "react";
function Scene() {
  const [colorBox, setColorBox] = useState("blue");
  const [BoxPosition, setBoxPosition] = useState([2, 0, 1]);
  return (
    <Canvas>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      <mesh
        position={[-2, 0, -1]}
        onClick={() => setColorBox(colorBox === "blue" ? "orange" : "blue")}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={colorBox} />
      </mesh>
      <mesh
        position={BoxPosition}
        onPointerOver={() => setBoxPosition([2, 0, 2])}
        onPointerOut={()=>setBoxPosition([2,0,1])}
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

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function RotatingBox() {
  const meshRef = useRef(null);
  const [rotateSpeed, setRotateSpeed] = useState(0);
  const [colorBox, setColorBox] = useState("blue");

  useFrame(() => {
    meshRef.current.rotation.y += rotateSpeed;
  });
  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setRotateSpeed((s) => (s === 0 ? 0.05 : 0))}
      onPointerOut={() => setRotateSpeed((s) => (s === 0.05 ? 0 : 0.05))}
      position={[-2, 0, -1]}
      onClick={() => setColorBox(colorBox === "blue" ? "orange" : "blue")}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={colorBox} />
    </mesh>
  );
}

export default RotatingBox;

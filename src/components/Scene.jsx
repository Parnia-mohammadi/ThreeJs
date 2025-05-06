import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import RotatingBox from "./rotateBox";
import CustomCamera from "./CustomCamera";
import Car from "../models/car";
function Scene() {
  const [BoxPosition, setBoxPosition] = useState([2, 0, 1]);

  return (
    <Canvas>
      {/* نور عمومی */}
      <ambientLight intensity={0.5} />

      {/*  نور جهت‌دار- پخش صفحه ای*/}
      {/* <directionalLight position={[-2, 0, 0]} intensity={10} /> */}

      {/*پخش دایره ای- نور نقطه‌ای */}
      {/* <pointLight position={[0, 0, 0]} intensity={10} color="white" /> */}

      {/* نور اسپات */}
      {/* <spotLight
        position={[0, 3, 1]}
        intensity={10}
        angle={0.5}
        penumbra={0.5}
      /> */}

      <directionalLight position={[2, 2, 2]} intensity={1} />

      <RotatingBox />
      {/* <CustomCamera /> */}
      <Car />
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

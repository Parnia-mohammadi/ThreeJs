// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";

function Car() {
  //   const { scene } = useLoader(GLTFLoader, "/models/ferrari.glb");
  const { scene } = useGLTF("/models/ferrari.glb");
  return <primitive object={scene} scale={1} position={[0, -2, 0]} />;
}

export default Car;

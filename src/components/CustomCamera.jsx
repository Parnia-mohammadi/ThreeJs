import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

function CustomCamera() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, -10, 0);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
}

export default CustomCamera;

import * as THREE from "three";
import { useMemo } from "react";

const RoomLights = () => {

  const rectLight = useMemo(() => {
    return new THREE.RectAreaLight("#a259ff", 3, 3, 2);
  }, []);

  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        angle={0.3}
        penumbra={0.5}
        intensity={2}
        color="white"
      />

      <spotLight
        position={[4, 5, 4]}
        angle={0.4}
        penumbra={0.5}
        intensity={1.5}
        color="#4cc9f0"
      />

      <spotLight
        position={[-3, 5, 5]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        color="#9d4edd"
      />

      <primitive
        object={rectLight}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      <pointLight
        position={[0, 1, 0]}
        intensity={0.8}
        color="#7209b7"
      />

      <pointLight
        position={[1, 2, -2]}
        intensity={0.6}
        color="#0d00a4"
      />
    </>
  );
};

export default RoomLights;
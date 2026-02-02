import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

import * as THREE from 'three';

function SkillsIcon({ model }) {

  const scene  = useGLTF(model.modelPath);

  useEffect(() => {
    if(model.name === 'Three Js') {
      scene.scene.traverse((child) => {
      if(child.isMesh && child.name === 'Object_5'){
          child.material = new THREE.MeshStandardMaterial({ color: '#0E0E10'})
        }
      })
    }
  })


  



  return (
    <Canvas>
      <ambientLight 
      intensity={0.3}
      
      />

      <directionalLight   
      position={[ 5, 5, 5 ]}
      intensity={1}
      />

      <Environment   
      preset="city"
      
      />

      <OrbitControls 
      enableZoom={false}
      />

      <Float speed={5.6} rotationIntensity={1.2} floatIntensity={0.10} >
        <group scale={model.scale} rotation={model.rotation} position={model.position}>
          <primitive 
          object={scene.scene}
          />
        </group>
      </Float>

    </Canvas>
  )
}

export default SkillsIcon

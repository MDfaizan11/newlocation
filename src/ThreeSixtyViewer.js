import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei"; // Import OrbitControls
import { TextureLoader } from "three";
import f2 from "../src/assets/images/WhatsApp Image 2024-02-23 at 11.41.06 AM.jpeg"; // Ensure the path is correct
import "../src/App.css";

const ThreeSixtyViewer = () => {
  const texture = useLoader(TextureLoader, f2);

  return (
    <Canvas camera={{ position: [0, 0, 0.1] }}>
      <Suspense fallback={null}>
        <Sphere args={[500, 60, 40]} scale={[-1, 1, 1]}>
          <meshBasicMaterial map={texture} />
        </Sphere>
      </Suspense>
      <OrbitControls enableZoom={false} />{" "}
      {/* Add OrbitControls for interaction */}
    </Canvas>
  );
};

export default ThreeSixtyViewer;

import React, { useState, useRef, Suspense } from "react";
import { Extras, Town } from "../../../components";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Friends = () => {

  const ref = useRef();
  const [autoRotate, setAutoRotate] = useState(false); // Initial state is set to false

  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };

  return (
    <div>
      <Extras />
      <h1> @2025</h1>
      <div className="token-card2">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60vw",
          height: "50vh",
        }}
      >
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 600], fov: 50 }}
          style={{ width: "1600px", height: "780px" }}
          onClick={toggleAutoRotate}
        >
          <Suspense fallback={null}>
            <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
              <Town />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate={autoRotate} />
        </Canvas>
        </div>
      </div>
    </div>
    
  );
};

export default Friends;

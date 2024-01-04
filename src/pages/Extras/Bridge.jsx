/* eslint-disable */
import React, { useState, useRef, Suspense } from "react";
import { logobsc } from "../../assets";
import { Trans } from "@lingui/macro";
import { Box, Extras } from "../../components";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Bridge = () => {
  const ref = useRef();
  const [autoRotate, setAutoRotate] = useState(false); // State to control auto-rotation
  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };

  return (
    <div>
      <div className="token-card1">
        <div
          className="flex-1 flex flex-col items-center space-y-4 sm:text-center lg:text-left"
          style={{ padding: "20px" }}
        >
          {" "}
          <h2 className="text-2xl font-bold text-yellow-500 ">
            <Trans> Bridge BULL Polygon & BSC TOKENs FOR BULL-BASE </Trans>
          </h2>
          <h2 className="text-2xl">@ 2025</h2>
        </div>
        <div
          className="flex-1 flex flex-col items-center space-y-4"
          style={{ padding: "10px" }}
        >
          <img src={logobsc} style={{ width: "225px", height: "225px" }} />
        </div>
      </div>
      <Extras />
      <div className="token-card1">
        <h3 className="text-2xl font-bold text-blue-500">
          <Trans>BURN Club Polygon & BSC NFTs FOR BULL-BASE MYSTERY BOX</Trans>
        </h3>
        <h2>@ 2025</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "75vw",
            height: "50vh",
          }}
        >
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 500], fov: 2 }}
            style={{ width: "1000px", height: "580px" }}
            onClick={toggleAutoRotate}
          >
            <Suspense fallback={null}>
              <Stage
                controls={ref}
                preset="rembrandt"
                intensity={1}
                environment="city"
              >
                <Box />
              </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate={autoRotate} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Bridge;

/* eslint-disable */
import React, { useState, useRef, Suspense} from "react";
import { suzy, } from "../../assets";
import { Trans } from "@lingui/macro";
import { Map } from "../../components";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Extras, } from '../../components'

const Addressbook = () => {
  const ref = useRef();
  const [autoRotate, setAutoRotate] = useState(true); // State to control auto-rotation
  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };

  
  return (
    <div className="container bg-white dark:bg-black">
      <Extras />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '75vw', height: '50vh' }}>
      <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [10, 2, 90], fov: 50 }}
          style={{ width: "1200px", height: "560px" }}
          onClick={toggleAutoRotate}
        >
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="rembrandt"
              intensity={1}
              environment="city"
            >
              <Map />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate={autoRotate} />
        </Canvas>
        </div>
        

      <div
        className="token-card4 bg-white dark:bg-black text-black dark:text-white flex flex-col sm:flex-row items-center sm:justify-between p-4 md:p-8 lg:p-12"
        style={{ display: "flex" }}
      >
        <div style={{ flex: 1 }}>
          
          <p style={{ textAlign: "left", marginLeft: 50, padding: 5 }}>
            BULLS:{" "}
            <a
              href="https://basescan.org/address/0xC1B6844D5134c8E550043f01FFbF49CA66Efc77F"
              target="_blank"
            >
              0xC1B6844D5134c8E550043f01FFbF49CA66Efc77F
            </a>
          </p>
          <p style={{ textAlign: "left", marginLeft: 50, padding: 5 }}>
            BEARS-BULLS:{" "}
            <a
              href="https://basescan.org/address/0x9608F9182e896c534C74b8D93D4C8B22a5b2cf3D"
              target="_blank"
            >
              0x9608F9182e896c534C74b8D93D4C8B22a5b2cf3D
            </a>
          </p>
        </div>
        <div>
          <img
            src={suzy}
            width={300}
            style={{ marginTop: 30, padding: 5 }}
            alt="Suzy"
          />
        </div>
      </div>
      
      <div  className="token-card2 bg-white dark:bg-black text-black dark:text-white flex flex-col sm:flex-row items-center sm:justify-between p-4 md:p-8 lg:p-12">         
<p><Trans>ROYALS</Trans> 👑</p> 
<p><Trans> CLONED MEMBERS</Trans> 🧟🏻</p>
<p><Trans> EYE OF RA HOLDER</Trans> ☥🛸</p>
      </div>
    
    </div>
  );
};

export default Addressbook;

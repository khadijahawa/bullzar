import React, { useState, useRef, Suspense } from "react";
import { Spot } from '../../assets';
import { Trans } from "@lingui/macro";
import { Portall, Extras3 } from "../../components";
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'




const Portal = () => {
  const ref = useRef()
  const [autoRotate, setAutoRotate] = useState(false); // State to control auto-rotation
  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };


  return (
    <div className="container bg-white dark:bg-black">




    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60vw', height: '50vh' }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 600], fov: 50}} style={{ width: '900px', height: '580px' }} onClick={toggleAutoRotate}>
          <Suspense fallback={null}>
            <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
              <Portall />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate={autoRotate} />
        </Canvas>
      </div>




<Extras3 />



      
      <div className="token-card2 bg-white dark:bg-black text-black dark:text-white flex flex-col sm:flex-row items-center sm:justify-between p-4 md:p-8 lg:p-12">
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1><Trans>NO MEETING AVAILABLE</Trans></h1>
          <h2><Trans>MUST BE MEMBER & HOLD PASS TO ATTEND EVENTS</Trans></h2>
          <a href='https://spotvirtual.com/invite/bullsclub-93f62e312e392bb1-7fnCCS2OuN' target='_blank' rel="noreferrer">
            <img src={Spot} width={150} style={{ margin: 'auto' }} alt="Spot" />
          </a>
          <p style={{ textAlign: 'center', padding: 10 }}>
           <Trans> Check out Club conference @Spot</Trans>
          </p>
          <p style={{ textAlign: 'center', padding: 10 }}>
          <Trans> Events to be announced</Trans>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portal

import React from 'react'
import { bsc, polygon } from '../../assets';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from "@lingui/macro";


const OtherChainNFT = () => {
  return (
    <div>
      <div className="bg-white dark:bg-black">
      <section className="container rounded-[15px] items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40" >
            <div className="flex-1 space-y-4 sm:text-center lg:text-left">
    <h1 className="text-4xl font-bold text-purple-500 text-left" style={{ margin: "30p 0" }}>
       <Trans> CROSSCHAIN !!</Trans> 
    </h1>
    <p className="max-w-xl leading-relaxed text-black dark:text-white sm:mx-auto lg:ml-0 text-center"> 
    <Trans> OWN POLY & BSC NFTs or BULLSC-BULLS TOKEN,-- </Trans> 
        <Link to="/Bridge">
        <Trans> BRIDGE --</Trans> 
        </Link>
        <Trans> To </Trans> BULLS-BASE @2025.
    </p>
    <p>
    </p>
    <div className="container rounded-[15px] items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
    <Row  className="items-center justify-center space-y-3 sm:space-x-3 sm:space-y-3 sm:flex lg:justify-start">
                    <img
                        src={polygon}
                        style={{ width: '100px', height: '60px' }} alt="polygon"
                    />
                    <img
                        src={bsc}
                        style={{ width: '100px', height: '60px' }} alt="bsc"
                    />    
                    <div className="container rounded-[15px] items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
    <div className="items-right justify-right space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
        <a href="https://bullmart.bullsclub.space" target='blank'
            className="block px-6 py-2 text-center text-white bg-yellow-600 rounded-md"> BULLMART
        </a></div>
          </div></Row></div>
             </div>
                <div>
                </div>
            </section>
        </div>
    </div>
  )
}
export default OtherChainNFT

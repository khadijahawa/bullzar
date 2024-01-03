import {
  ConnectWallet,
  useAddress,
  useContract,
} from "@thirdweb-dev/react";
import React from "react";
import styles from "../../../styles/Theme.module.css";
import {LoadingSection, CurrentClones, Shop, Rewards, OwnedCones } from "../../../components";
import {
  editionDropContractAddress,
  tokenContractAddress,
  MiningContractAddress1155,
  Worker1155,
} from "../../../constants/contractAddresses";
import { mando, back } from "../../../assets";
import { Trans } from "@lingui/macro";
import { Container } from "react-bootstrap";
import { useNavigate} from "react-router-dom";


export default function TreasureHunt () {
  const address = useAddress();
  const navigate = useNavigate();
  const { contract: miningContract } = useContract(MiningContractAddress1155);
  const { contract: characterContract } = useContract(
    editionDropContractAddress,
    "edition-drop"
  );
  const { contract: pickaxeContract } = useContract(
    Worker1155,
    "edition-drop"
  );
  const { contract: tokenContract } = useContract(tokenContractAddress, "token");

  if (!address) {
    return (
      <div className={styles.container}>
        <ConnectWallet theme="dark" />
      </div>
    );
  }

  return (
    <div>
<Container>
    <section className="token-card1 bg-white dark:bg-black flex flex-col sm:flex-row items-center sm:justify-between p-4 md:p-8 lg:p-12">
        <div className="flex-1 space-y-4 text-center lg:text-left w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
            <h1 className="text-4xl font-bold text-center text-blue-500">
                BULLS<Trans> TREASURE</Trans>
                
            </h1>
            <p className="max-w-xl leading-relaxed text-black dark:text-white mx-auto lg:ml-0 text-center">
            <Trans>  Legend tells of Lost BULL token treasures scattered worldwide. Mando the 2nd confirms his grandfather, Mando the 1st, acknowledged their existence. It is a quest to find these tokens. Join the hunt as a CLONE-WORKER and seize your Share!</Trans>
            </p>
            
            <p className="hidden sm:block">
            <Trans> "Get a pass, obtain a Clone-Worker, and set them to work! Want BEARS to recruit a WORKER? Acquire them through staking BULL tokens or just Swap BEARS for BULL from BULLDEX @wallet."</Trans>
            </p>
            <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
              <img
                src={mando}
                className="w-full h-auto"
                alt="Mando"
               />
               <button onClick={() => navigate(-1)}><img src={back} alt="back"/></button>
          </div>
          
          </section>
          
          <div className="flex-1 space-y-4 text-center lg:text-left w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
          
          </div>
          </Container>
        <div className="container" style={{ padding: '20px' }} >
         {miningContract &&
         characterContract &&
         tokenContract &&
         pickaxeContract ? (
         <div className="mainsection">



            <CurrentClones   
               miningContract={miningContract}
               characterContract={characterContract}
               pickaxeContract={pickaxeContract}
              />
            <Rewards
                miningContract={miningContract}
               tokenContract={tokenContract} />
            </div>
           ) : (
          <LoadingSection />
         )}



         
         </div>
         <hr  />
           <div>
         {pickaxeContract && miningContract ? (<>
          <h2 className="text-black dark:text-white" style={{ marginLeft: '50px' }}>
          <Trans>  Your CLONE WORKERS </Trans>
             </h2>
          <div  
             style={{
              width: "100%",
              minHeight: "10rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 8,
            }}
          >
          <OwnedCones 
               pickaxeContract={pickaxeContract}
               miningContract={miningContract}/>
           </div>
         </>
             ) : (
             <LoadingSection />
             )}
            </div>
          <hr />
          {pickaxeContract && tokenContract ? (
            <>
            <h2 className="heading text-black dark:text-white">
            <Trans> SHOP FOR WORKERS </Trans>
          </h2>
         
         <div 
           style={{
            width: "100%",
            minHeight: "10rem",
            display: "flex",
             flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
             marginTop: 8,
            }}>
      <Shop pickaxeContract={pickaxeContract} />
      </div>
      </>
      ):(
        <LoadingSection />
      )}
    </div>
  )
}






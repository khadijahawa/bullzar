import React from 'react'
import {
  ConnectWallet,
  useAddress,
  useContract,
  useOwnedNFTs, darkTheme,
} from "@thirdweb-dev/react";
import { Link } from 'react-router-dom'; 
import { Trans } from "@lingui/macro";

const TreasurePass = () => {
    const editionDropContractAddress = '0x9D4fa04B3eF4e623b3807E44Cf8072C08123e1f9';
    const { contract: editionDrop } = useContract(
      editionDropContractAddress,
      "edition-drop"
    );
    const address = useAddress();
    const {
      data: ownedNfts,
      isLoading,
      isError,
    } = useOwnedNFTs(editionDrop, address);
    if (!address) {
        return (
          <div>
            <ConnectWallet  theme={darkTheme({
                  colors: {
                    modalBg: "#000000",
                    dropdownBg: "#000000",
                  },
                })}
                btnTitle={"Treasure Pass"}
                modalTitle={"BULLZAR-BASE"}
                auth={{ loginOptional: false }}
                switchToActiveChain={true}
                modalSize={"wide"}
                welcomeScreen={{
                  img: {
                    src: "https://black-legal-fowl-39.mypinata.cloud/ipfs/QmNo6MGVvkWPPPUK4BVADCutzm2hxnXkS4bCcVwu5UrZLR/5.png",
                    width: 150,
                    height: 150,
                  },
                }}
                modalTitleIconUrl="https://black-legal-fowl-39.mypinata.cloud/ipfs/Qmb88mTnG46V3ibXz1vQ7nk1vPYcYcdDznqrpLkqFLyajd?_gl=1*xltrif*_ga*NjQ5OTAxNzY6LjE2OTc0MzQxNjg.*_ga_5RMPXG14TE*MTY5NzU4NzEwOS4yLjEuMTY5NzU4NzI2Ni42MC4wLjA."
                termsOfServiceUrl="https://bullsclub.xyz/terms-and-conditions"
                privacyPolicyUrl="https://bullsclub.xyz/privacy-policy"
              />
          </div>
        );
      }
       // 1. Loading
       if (isLoading) {
        return <div><Trans>Loading...</Trans></div>;
      }
       // Something went wrong
       if (!ownedNfts || isError) {
        return <div><Trans>Error</Trans></div>;
      }
      return (
        <div style={{ display: 'flex', gap: '25px' }}>
        <Link to="/TreasurePlay">
          <button className="block px-6 py-2 text-center text-white bg-blue-600 rounded-md">
          <Trans> PASS HOLDER</Trans>
          </button>
        </Link>       
      </div> 
      );
     };

export default TreasurePass

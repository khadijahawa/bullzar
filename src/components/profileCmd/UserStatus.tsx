/* eslint-disable */
import  React from 'react';
import { useState } from "react";
import styles from "../../styles/Status.module.css";
import Lottie  from "lottie-react";
import loadingLottie from "../../assets/loadingLottie.json";
import { truncateAddress } from "../../utils/truncateAddress"
import {
  useAddress, ConnectWallet,
  useContract,
  useOwnedNFTs, darkTheme, Web3Button, useContractRead,
} from "@thirdweb-dev/react";
import {nftDropContractAddress, STATUS_CONTRACT_ADDRESS} from "../../constants/contractAddresses"


const UserStatus = () => {
  const address = useAddress();
  const [newStatus, setNewStatus] = useState("");
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const characterDecoration = characterCount >= 134 ? styles.characterCountOver : styles.characterCountUnder;

  const {
      contract
  } = useContract(STATUS_CONTRACT_ADDRESS);

  const {
      data: myStatus,
      isLoading: isMyStatusLoading,
  } = useContractRead(contract, "getStatus", [address]);





  const { contract: editionDrop } = useContract(
    nftDropContractAddress,
    "edition-drop"
  );
  
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
            btnTitle={"Status Update"}
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
   if (isMyStatusLoading) {
    return (
        <div className={styles.sectionLoading}>
            <Lottie
                animationData={loadingLottie}
                loop={true}
            />
        </div>
    );
}
   // Something went wrong
   if (!ownedNfts || isError) {
    return <div></div>;
  }
  // 2. No NFTs - mint page
  if (ownedNfts.length === 0) {
    return (
      <div>
      </div>
    );
  }
  // 3. Has NFT already - show button to take to game
  return (
    <div className='token-card5'>
    <div className={styles.userContainer}>
            {!isMyStatusLoading && myStatus && (
                <div>
                    <p className={styles.statusText}>{myStatus}</p>
                </div>
            )}
            <button
                className={styles.updateButton}
                onClick={() => setIsStatusModalOpen(true)}
            >Update Status</button>
            {isStatusModalOpen && (
                <div className={styles.statusModalContainer}>
                    <div className={styles.statusModal}>
                        <div className={styles.statusModalHeader}>
                            <p>New Status:</p>
                            <button
                                onClick={() => setIsStatusModalOpen(false)}
                            >Close</button>
                        </div>
                        <textarea
                            value={newStatus}
                            onChange={(e) => {
                                setNewStatus(e.target.value)
                                setCharacterCount(e.target.value.length)
                            }}
                            placeholder="Enter your status"
                        />
                        <div className={styles.characterCountContainer}>
                            <p className={characterDecoration}>{characterCount}/134</p>
                        </div>
                        <Web3Button
                            className={styles.statusModalButton}
                            contractAddress={STATUS_CONTRACT_ADDRESS}
                            action={(contract) => contract.call(
                                "setStatus",
                                [newStatus]
                            )}
                            isDisabled={characterCount === 0 || characterCount > 134}
                            onSuccess={() => {
                                setIsStatusModalOpen(false);
                                setNewStatus("");
                            }}
                        >Update Status</Web3Button>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default UserStatus

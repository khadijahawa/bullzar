import React, { useState } from "react";
import {
  ConnectWallet,
  useAddress,
  useContract,
  useTokenBalance,
  Web3Button,
  darkTheme
} from "@thirdweb-dev/react";
import { logo11, logo3, send, airdrop, BearToken } from "../../assets";
import { useTheme } from "next-themes";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";
import {tokenContractAddress} from "../../constants/contractAddresses";
import { Transfer, Stke, Exchange } from "../../components";


const BullWallet = () => {
  const { theme } = useTheme();
  const address = useAddress();
  const [showTransferModal, setShowTransferModal] = useState(false);
  const handleSendButtonClick = () => {
    setShowTransferModal(true);
  };
  const [showAirdropModal, setShowAirdropModal] = useState(false);
  const handleAirdropButtonClick = () => {
    setShowAirdropModal(true);
  };
  const { contract: tokenContract } = useContract(
    tokenContractAddress, 
    "token"
  );
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const handleSuccess = () => {
    // Handle success logic here
    console.log("Airdrop claimed successfully");
    setShowAirdropModal(false); // Close the modal or perform any other action
  }; 
  const handleError = (error) => {
    // Handle error logic here
    console.error("Error claiming airdrop:", error);
    // You may want to show an error message to the user or perform other actions
    // For example, you can show an error message to the user
    alert("Error claiming airdrop. Please try again.");
  };
  return (
    <div className="container bg-white dark:bg-black">
    <div className="container">
      <hr />
      <ConnectWallet
        theme={darkTheme({
          colors: {
            modalBg: "#000000",
            dropdownBg: "#000000"
          }
        })}
        btnTitle={"Login"}
        modalTitle={"BULLZAR-BASE"}
        auth={{ loginOptional: false }}
        switchToActiveChain={true}
        modalSize={"wide"}
        welcomeScreen={{
          img: {
            src: "https://black-legal-fowl-39.mypinata.cloud/ipfs/QmNo6MGVvkWPPPUK4BVADCutzm2hxnXkS4bCcVwu5UrZLR/5.png",
            width: 150,
            height: 150
          }
        }}
        modalTitleIconUrl="https://black-legal-fowl-39.mypinata.cloud/ipfs/Qmb88mTnG46V3ibXz1vQ7nk1vPYcYcdDznqrpLkqFLyajd?_gl=1*xltrif*_ga*NjQ5OTAxNzY6LjE2OTc0MzQxNjg.*_ga_5RMPXG14TE*MTY5NzU4NzEwOS4yLjEuMTY5NzU4NzI2Ni42MC4wLjA."
        termsOfServiceUrl="https://bullsclub.xyz/terms-and-conditions"
        privacyPolicyUrl="https://bullsclub.xyz/privacy-policy"
      />
      <div>
        <Container>
          <div className="token-card bg-white dark:bg-black sm:justify-between p-4 md:p-8 lg:p-12">
            <div>
              <div alt="Token Logo" className="token-logo fade-in-breathe" >
                {theme === "light" ? (
                  <img
                    src={logo3}
                    width="100"
                    height="100"
                    alt="bulls logo"
                  />
                ) : (
                  <img
                    src={logo11}
                    width="100"
                    height="100"
                    alt="bulls logo"
                  />
                )}
              </div>
            </div>
            <div className="token-balance">
            <Trans> BULLS-BASE BALANCE</Trans>
              <p>
                <b className="heading text-blue dark:text-white">
                  {tokenBalance?.value
                    ? (parseFloat(tokenBalance.value) / 1e18).toFixed(3)
                    : ""}
                </b>{" "}
                {tokenBalance?.symbol}
              </p>
            </div>
            <button className="claim-button" onClick={handleSendButtonClick}>
              <img src={send} alt="Send" /> <Trans>SEND</Trans>
            </button>

            <button
              className="claim-button"
              onClick={handleAirdropButtonClick}
            >
              <img src={airdrop} alt="Airdrop" /><Trans> AIRDROP</Trans>
            </button>
            <Container>
              <Link to="/BearWallet">
                <img
                  src={BearToken}
                  style={{ width: "40px", height: "40px", float: "right" }}
                  alt="Bear Token"
                />
              </Link>
            </Container>
          </div>
        </Container>
      </div>
      {showTransferModal && (
        <Container>
          <div className="modal-overlay1">
            <div className="modal-content1">
              <Transfer onClose={() => setShowTransferModal(false)} />
            </div>
          </div>
        </Container>
      )}
      {showAirdropModal && (
        <Container>
          <div className="modal-overlay1">
            <div className="modal-content1">
            <div className="pricingContainer">
          <Web3Button
          className="Web3Button1"
            contractAddress="0xC1B6844D5134c8E550043f01FFbF49CA66Efc77F"
            action={async (contract) => await contract.erc20.claim(31400)}
            onSuccess={handleSuccess}
            onError={handleError}
          >
            Claim 31400 BULL
          </Web3Button>
        </div>
              <button
                className="close-button1"
                onClick={() => setShowAirdropModal(false)}
              >
                (X)
              </button>
            </div>
          </div>
        </Container>
      )}
    </div>
    <Stke />
    <div>
      <Exchange />
    </div>
  </div>
);
};
export default BullWallet

import React, { useState } from "react";
import {
  ConnectWallet,
  useAddress,
  useContract,
  useTokenBalance,
  Web3Button,
  darkTheme
} from "@thirdweb-dev/react";
import { send, BearToken, logo3 } from '../../assets';
import { useTheme } from "next-themes";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";
import {BearTokenAddress} from "../../constants/contractAddresses"
import { TransferBear, Stke, Exchange } from '../../components';

const BearWallet = () => {
  const { theme } = useTheme();
  const address = useAddress();
  const [showTransferModal, setShowTransferModal] = useState(false);
  const handleSendButtonClick = () => {
    setShowTransferModal(true);
  };
  const { contract: tokenContract } = useContract(
    BearTokenAddress,// Use the ABI here
    "token"
  );
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  return (
    <div className="container bg-white dark:bg-black">
    <div className="container">
      <hr />
      <ConnectWallet
        theme={darkTheme({
          colors: {
            modalBg: "#000000",
            dropdownBg: "#000000",
          },
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
            height: 150,
          },
        }}
        modalTitleIconUrl="https://black-legal-fowl-39.mypinata.cloud/ipfs/Qmb88mTnG46V3ibXz1vQ7nk1vPYcYcdDznqrpLkqFLyajd?_gl=1*xltrif*_ga*NjQ5OTAxNzY6LjE2OTc0MzQxNjg.*_ga_5RMPXG14TE*MTY5NzU4NzEwOS4yLjEuMTY5NzU4NzI2Ni42MC4wLjA."
        termsOfServiceUrl="https://bullsclub.xyz/terms-and-conditions"
        privacyPolicyUrl="https://bullsclub.xyz/privacy-policy"
      />
      <div>
        <Container>
          <div className="token-card bg-white dark:bg-black sm:justify-between p-4 md:p-8 lg:p-12">
            <div>
              <div alt="Token Logo" className="token-logo">
                {theme === 'light' ? (
                  <img src={BearToken} width="100" height="100" alt="bulls logo" />
                ) : (
                  <img src={BearToken} width="100" height="100" alt="bulls logo" />
                )}
              </div>
            </div>
            <div className="token-balance">
              BEARS-BULLS<Trans> BALANCE </Trans> 
              <p>
                <b className="heading text-blue dark:text-white">
                  {tokenBalance?.value
                    ? (parseFloat(tokenBalance.value) / 1e18).toFixed(3)
                    : ''}
                </b>{' '}
                {tokenBalance?.symbol}
              </p>
            </div>
            <button className="claim-button" onClick={handleSendButtonClick}>
              <img src={send} alt="Send" /> <Trans>SEND</Trans> 
            </button>
            <Container>
              <Link to="/Wallet">
                <img
                  src={logo3}
                  style={{ width: '40px', height: '40px', float: 'right' }}
                  alt="Bear Token"
                />
              </Link>
            </Container>
          </div>
          <div>
          </div>
        </Container>
      </div>
      {showTransferModal && (
        <Container>
          <div className="modal-overlay1">
            <div className="modal-content1">
              <TransferBear onClose={() => setShowTransferModal(false)} />
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
}

export default BearWallet

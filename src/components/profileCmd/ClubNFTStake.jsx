import React, { useEffect, useState } from "react";
import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
  darkTheme
} from "@thirdweb-dev/react";
import { NFTCard } from "../../components";
import { os, logo11, logo3 } from "../../assets";
import { useTheme } from "next-themes";
import { Spacer } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";

const ClubNFTStake = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract("0x617e2b0cE5AE1C5b93Acbd4181F10A6fbc225905");
  const { contract: tokenContract } = useContract("0x9608F9182e896c534C74b8D93D4C8B22a5b2cf3D");
  const { contract, isLoading: stakingContractIsLoading } = useContract("0x953012Ec85e65Eef98765066615d85CA5f67aC7D");
  const { data: ownedNFTs } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState();
  const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [address]);
  const { theme, setTheme } = useTheme();

  const getTraitValue = (attributes, traitName) => {
    const attribute = attributes?.find((attribute) => attribute.trait_type === traitName);
    return attribute ? attribute.value : "N/A";
  };

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      try {
        const stakeInfo = await contract.call("getStakeInfo", [address]);
        setClaimableRewards(stakeInfo[1]);
      } catch (error) {
        console.error("Error loading claimable rewards:", error);
      }
    }

    loadClaimableRewards();
  }, [address, contract]);

  const stakeNft = async (id) => {
    try {
      if (!address) {
        await nftDropContract.setApprovalForAll(
          "0x953012Ec85e65Eef98765066615d85CA5f67aC7D",
          true
        );
      }

      // Use await for the stake operation as well
      await contract.call("stake", [[id]]);

      // Optionally, you can perform additional actions after staking
      // For example, update UI or state
    } catch (error) {
      console.error("Error staking NFT:", error);
      // Handle the error appropriately (e.g., display a message to the user)
    }
  };

  if (stakingContractIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container heading text-black dark:text-white">
      <hr />
      {!address ? (
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
          modalTitleIconUrl={
            "https://black-legal-fowl-39.mypinata.cloud/ipfs/Qmb88mTnG46V3ibXz1vQ7nk1vPYcYcdDznqrpLkqFLyajd?_gl=1*xltrif*_ga*NjQ5OTAxNzY2LjE2OTc0MzQxNjg.*_ga_5RMPXG14TE*MTY5NzU4NzEwOS4yLjEuMTY5NzU4NzI2Ni42MC4wLjA."
          }
          termsOfServiceUrl={
            "https://bullsclub.xyz/terms-and-conditions"
          }
          privacyPolicyUrl={
            "https://bullsclub.xyz/privacy-policy"
          }
        />
      ) : (
        <>
          <div className="tokenSection">
            <p className="heading text-black dark:text-white">
             <Trans> Legacy Member NFT Staked generate an annual yield of 835,000
              BEARS tokens</Trans>
            </p>
            <div className="tokenGrid">
              <div className="tokenItem">
                <h3 className="heading text-black dark:text-white">
                <Trans> Claimable Rewards</Trans>
                </h3>
                <p>
                  <b className="heading text-black dark:text-white">
                    {!claimableRewards
                      ? "Loading..."
                      : claimableRewards.toString()}
                  </b>{" "}
                  BEARS
                </p>
              </div>
              <div className="tokenItem">
                <h3 className="heading text-black dark:text-white">
                  BEARS<Trans> Balance</Trans>
                </h3>
                <p>
                  <b className="heading text-black dark:text-white">
                    {tokenBalance?.displayValue}
                  </b>{" "}
                  {tokenBalance?.symbol}
                </p>
              </div>
              <Web3Button
                action={(contract) => contract.call("claimRewards")}
                contractAddress={"0x953012Ec85e65Eef98765066615d85CA5f67aC7D"}
              >
              <Trans>  Claim Rewards</Trans>
              </Web3Button>
            </div>
          </div>

          <div className="stakedNftsSection">
            <div>
              <div className="nftRowGrid">
                {stakedTokens &&
                  stakedTokens[0]?.map((stakedToken, index) => (
                    <NFTCard
                      key={`stakedToken-${index}`}
                      tokenId={stakedToken.toNumber()}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="unstakedNftsSection" style={{ padding: "20px" }}>
            <div className="nftRowGrid">
              {ownedNFTs?.map((nft, index) => (
                <div key={`ownedNFT-${index}`}>
                    <ThirdwebNftMedia metadata={nft.metadata} />
                  <h3 className="heading text-black dark:text-white">
                    {getTraitValue(nft.metadata.attributes, "Name")} -{getTraitValue(nft.metadata.attributes,"Family")}
                  </h3>
                  <h3 className="heading text-black dark:text-white">{getTraitValue(nft.metadata.attributes,"Zodiac")}</h3>
                  <Web3Button
                    contractAddress={"0x953012Ec85e65Eef98765066615d85CA5f67aC7D"}
                    action={() => stakeNft(nft.metadata.id)}
                  >
                   <Trans> Send to Work</Trans>
                  </Web3Button>
                  <div>
                    <Spacer />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};




















export default ClubNFTStake;

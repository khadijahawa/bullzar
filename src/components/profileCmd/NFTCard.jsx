import React from "react";
import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import { Trans } from "@lingui/macro";

const nftDropContractAddress ="0x617e2b0cE5AE1C5b93Acbd4181F10A6fbc225905"
const stakingContractAddress = "0x344AaC0dC560fA3bdFf97DA0296C785EF4Bd3186";

const NFTCard = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

  return (
    <div  className="stakedNftsSection">
      {nft && (
         <div className="nftRowGrid" style={{ padding: '5px' }}>
         <div className="nft-card">
          {nft.metadata && (
            <ThirdwebNftMedia
              metadata={nft.metadata}
            />
          )}
          <h3>{nft.metadata.name}</h3>
          <Web3Button
            action={(contract) =>
              contract?.call("withdraw", [nft.metadata.id, 1])
            }
            contractAddress={stakingContractAddress}
          >
           <Trans> Withdraw</Trans>
          </Web3Button>
        </div>
        </div>
      )}
    </div>
  );
}

export default NFTCard;
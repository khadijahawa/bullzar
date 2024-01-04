import React from "react";
import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import { Trans } from "@lingui/macro";
import {nftDropContractAddress, stakingContractAddress721} from "../../constants/contractAddresses"


const NFTCard = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

  // Function to get the "Name" trait value from metadata attributes
  const getTraitValue = (traitType) => {
    const trait = nft.metadata.attributes.find((attribute) => attribute.trait_type === traitType);
    return trait ? trait.value : "";
  };

  return (
    <div className="unstakedNftsSection">
      {nft && (
          <div className="nftRowGrid" style={{ padding: '5px' }}>
            <div className="nft-card">
            {nft.metadata && (
              <ThirdwebNftMedia metadata={nft.metadata} />
            )}
            <h3 className="heading text-black">{getTraitValue("Name")}-{getTraitValue("Family")}</h3>
            <Web3Button
              action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
              contractAddress={stakingContractAddress721}
            >
             <Trans> REST</Trans>
            </Web3Button>
          </div>
          </div>
      )}
    </div>
  );
};

export default NFTCard;
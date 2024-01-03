import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import {Container, NFTGrid, SaleInfo} from "../../../components";
import { nftDropContractAddress } from "../../../constants/contractAddresses";
import tokenPageStyles from "../../../styles/Token.module.css";
import { NFT as NFTType } from "@thirdweb-dev/sdk";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Trans } from "@lingui/macro";
import { profile2 } from "../../../assets";




interface Attribute {
  trait_type: string;
  value: string;
}

const getTraitValue = (attributes: Attribute[] | undefined, traitName: string): string => {
  const attribute = attributes?.find(
    (attribute) => attribute.trait_type === traitName
  );
  return attribute ? attribute.value : "N/A";
};



export default function Sell() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(nftDropContractAddress);
  const address = useAddress();
  const { data, isLoading } = useOwnedNFTs(contract, address);

  const [selectedNft, setSelectedNft] = useState<NFTType>();




  




  return (
    <div>
      
      <div style={{ display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg">
      <div style={{ display: "flex", alignItems: "center" }}>
      <Link className="transfer-button2" to="/Market">
   <Button>
     <Trans>MEMBERS</Trans>
   </Button>
 </Link>
 <Link to="/Profile" >
   <img src={profile2} alt="address" />
 </Link>
 </div>
      {!selectedNft ? (
        <>
          <p style={{ padding: 10 }}>Select which Member you&rsquo;d like to sell below.</p>
          <NFTGrid
            data={data}
            isLoading={isLoading}
            overrideOnclickBehavior={(nft) => {
              setSelectedNft(nft);
            }}
            emptyText={
              "Looks like you don't own any MEMBERS. Get one from NFT Page!"
            }
          />
        </>
      ) : (
        <div className={tokenPageStyles.container} style={{ marginTop: 10 }}>
          <div className={tokenPageStyles.metadataContainer}>
            <div className={tokenPageStyles.imageContainer}>
              <ThirdwebNftMedia
                metadata={selectedNft.metadata}
                className={tokenPageStyles.image}
              />
              <button
                onClick={() => {
                  setSelectedNft(undefined);
                }}
                className={tokenPageStyles.crossButton}
              >
                X
              </button>
            </div>
          </div>






          <div className={tokenPageStyles.listingContainer}>
            <p>You&rsquo;re about to list the following item for sale.</p>
            <h1 className={tokenPageStyles.title}>
              {selectedNft.metadata.name}
            </h1>


            <h1 className={tokenPageStyles.title}>
  {getTraitValue(selectedNft.metadata.attributes as Attribute[] | undefined, "Name")}
</h1>
<h1 className={tokenPageStyles.title}>Zodiac Sign :
  {getTraitValue(selectedNft.metadata.attributes as Attribute[] | undefined, "Zodiac")}
</h1>

           

            <div className={tokenPageStyles.pricingContainer} style={{ padding: 10 }}>
              <SaleInfo nft={selectedNft} />
            </div>
          </div>
        </div>
      )}
    </Container>
      </div>
    </div>
  )
}



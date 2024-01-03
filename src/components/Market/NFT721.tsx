import {
    ThirdwebNftMedia,
    useContract,
    useValidDirectListings,
    useValidEnglishAuctions,
  } from "@thirdweb-dev/react";
  import { NFT } from "@thirdweb-dev/sdk";
  import React from "react";
  import {
    MARKETPLACE_ADDRESS,
    nftDropContractAddress,
  } from "../../constants/contractAddresses";
  import {Skeleton} from "../../components";
  import styles from "../../styles/NFT.module.css";
  
  
  type Props = {
    nft: NFT;
  };
  
  export default function NFTComponent({ nft }: Props) {
    const { contract: marketplace, isLoading: loadingContract } = useContract(
      MARKETPLACE_ADDRESS,
      "marketplace-v3"
    );
  
    // 1. Load if the NFT is for direct listing
    const { data: directListing, isLoading: loadingDirect } =
      useValidDirectListings(marketplace, {
        tokenContract: nftDropContractAddress,
        tokenId: nft.metadata.id,
      });
  
    // 2. Load if the NFT is for auction
    const { data: auctionListing, isLoading: loadingAuction } =
      useValidEnglishAuctions(marketplace, {
        tokenContract: nftDropContractAddress,
        tokenId: nft.metadata.id,
      });
  

      

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



    return (
      <>
        <ThirdwebNftMedia metadata={nft.metadata} className={styles.nftImage} />
  
       
        <p className={styles.nftName}>
  {getTraitValue(nft.metadata.attributes as Attribute[] | undefined, "Name")}
</p>

        <p className={styles.nftName}>{nft.metadata.name}</p>
  
        <div className={styles.priceContainer}>
          {loadingContract || loadingDirect || loadingAuction ? (
            <Skeleton width="100%" height="100%" />
          ) : directListing && directListing[0] ? (
            <div className={styles.nftPriceContainer}>
              <div>
                <p className={styles.nftPriceLabel}>Price</p>
                <p className={styles.nftPriceValue}>
                  {`${directListing[0]?.currencyValuePerToken.displayValue}
            ${directListing[0]?.currencyValuePerToken.symbol}`}
                </p>
              </div>
            </div>
          ) : auctionListing && auctionListing[0] ? (
            <div className={styles.nftPriceContainer}>
              <div>
                <p className={styles.nftPriceLabel}>Minimum Bid</p>
                <p className={styles.nftPriceValue}>
                  {`${auctionListing[0]?.minimumBidCurrencyValue.displayValue}
            ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`}
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.nftPriceContainer}>
              <div>
                <p className={styles.nftPriceLabel}>Price</p>
                <p className={styles.nftPriceValue}>Not for sale</p>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
import React from "react";
import { useParams } from "react-router-dom";
import {
  MediaRenderer,
  ThirdwebNftMedia,
  useContract,
  useContractEvents,
  useValidDirectListings,
  useValidEnglishAuctions,
  Web3Button,
} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import randomColor from "../utils/randomColor";
import { Skeleton } from "../components";
import toast, { Toaster } from "react-hot-toast";
import toastStyle from "../utils/toastConfig";
import { Container } from "../components";
import styles from "../styles/Token.module.css";
import { Button } from "@chakra-ui/react";


import {
  ETHERSCAN_URL,
  MARKETPLACE_ADDRESS,
  NETWORK,
  nftDropContractAddress,
} from "../constants/contractAddresses";




const [randomColor1, randomColor2] = [randomColor(), randomColor()];

function NFTDetails() {
  const { id } = useParams();
  //   const { tokenId } = useParams();
  const [bidValue, setBidValue] = useState();
  const [nft, setNft] = useState(null);
  const [contractMetadata, setContractMetaData] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state


  const getTraitValue = (traitType) => {
    console.log("nft.metadata.attributes:", nft?.metadata?.attributes);
    return nft?.metadata?.attributes?.[traitType] || "";
  };
  


  
  // Connect to marketplace smart contract
  const { contract: marketplace, isLoading: loadingContract } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

  const { contract: nftCollection } = useContract(nftDropContractAddress);
  //   const sdk = new ThirdwebSDK(NETWORK, {
  //     secretKey: process.env.TW_SECRET_KEY,
  //   });
  //   console.log("sdk", sdk);

  useEffect(() => {
    // Fetch NFT data based on contractAddress and tokenId
    const fetchNFTData = async () => {
      try {
        const sdk = new ThirdwebSDK(NETWORK, {
          secretKey: process.env.TW_SECRET_KEY,
        });
        const contract = await sdk.getContract(nftDropContractAddress);
        const nftss = await contract.erc721.get(id);
        let contractMetadataa = await contract.metadata.get();

        console.log("nnnnn", nftss);
        setNft(nftss);
        setContractMetaData(contractMetadataa);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NFT data:", error.message);
        setLoading(false);
      }
    };

    setLoading(true); // Set loading to true when starting to fetch data
    fetchNFTData();
  }, [id]);

  console.log("state", nft);
  const { data: directListing, isLoading: loadingDirect } =
    useValidDirectListings(marketplace, {
      tokenContract: nftDropContractAddress,
      id: nft?.metadata?.id,
    });

  const { data: auctionListing, isLoading: loadingAuction } =
    useValidEnglishAuctions(marketplace, {
      tokenContract: nftDropContractAddress,
      id: nft?.metadata?.id,
    });

  const { data: transferEvents, isLoading: loadingTransferEvents } =
    useContractEvents(nftCollection, "Transfer", {
      queryFilter: {
        filters: {
          id: nft?.metadata?.id,
        },
        order: "desc",
      },
    });

  async function createBidOrOffer() {
    let txResult;
    if (!bidValue) {
      toast(`Please enter a bid value`, {
        icon: "❌",
        style: toastStyle,
        position: "bottom-center",
      });
      return;
    }

    if (auctionListing?.[0]) {
      txResult = await marketplace?.englishAuctions.makeBid(
        auctionListing[0].id,
        bidValue
      );
    } else if (directListing?.[0]) {
      txResult = await marketplace?.offers.makeOffer({
        assetContractAddress: nftDropContractAddress,
        tokenId: nft.metadata.id,
        totalPrice: bidValue,
      });
    } else {
      throw new Error("No valid listing found for this NFT");
    }

    return txResult;
  }

  async function buyListing() {
    let txResult;

    if (auctionListing?.[0]) {
      txResult = await marketplace?.englishAuctions.buyoutAuction(
        auctionListing[0].id
      );
    } else if (directListing?.[0]) {
      txResult = await marketplace?.directListings.buyFromListing(
        directListing[0].id,
        1
      );
    } else {
      throw new Error("No valid listing found for this NFT");
    }
    return txResult;
  }

  return (
    // <div>hey</div>
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>

          <Toaster position="bottom-center" reverseOrder={false} />
          <Container maxWidth="lg">
          <Link className="transfer-button2" to="/Market">
   <Button>
     ALL MEMBERS
   </Button>
 </Link>

            <div className={styles.container}>
              
              <div className={styles.metadataContainer}>
                <ThirdwebNftMedia
                  metadata={nft?.metadata}
                  className={styles.image}
                />

                <div className={styles.descriptionContainer}>
                  <h3 className={styles.descriptionTitle}>Description</h3>
                  <p className={styles.description}>
                    {nft?.metadata?.description}
                  </p>

                  <h3 className={styles.descriptionTitle}>Traits</h3>

                  <div className={styles.traitsContainer}>
  <div className={styles.traitContainer}>
    <p className="traitName heading text-black dark:text-white">Name</p>
    <p className={styles.traitValue}>{getTraitValue("Name")}</p>
  </div>
  <div className={styles.traitContainer}>
    <p className="traitName heading text-black dark:text-white">Family</p>
    <p className={styles.traitValue}>{getTraitValue("Family")}</p>
  </div>
  <div className={styles.traitContainer}>
    <p className="traitName heading text-black dark:text-white">Zodiac</p>
    <p className={styles.traitValue}>{getTraitValue("Zodiac")}</p>
  </div>
  <div className={styles.traitContainer}>
    <p className="traitName heading text-black dark:text-white">Lucky Token</p>
    <p className={styles.traitValue}>{getTraitValue("Crypto")}</p>
  </div>
 
</div>



                  <h3 className={styles.descriptionTitle}>History</h3>

                  <div className={styles.traitsContainer}>
                  {[

    ...transferEvents?.slice(-3),   // Take the last 4 events
  ].map((event, index) => (
                      <div
                        key={event.transaction.transactionHash}
                        className={styles.eventsContainer}
                      >
                        <div className={styles.eventContainer}>
                          <p className="traitName heading text-black dark:text-white">Event</p>
                          <p className="traitValue heading text-black dark:text-white">
                            {
                              // if last event in array, then it's a mint
                              index === transferEvents.length - 1
                                ? "Mint"
                                : "Transfer"
                            }
                          </p>
                        </div>

                        <div className={styles.eventContainer}>
                          <p className="traitName heading text-black dark:text-white">From</p>
                          <p className="traitValue heading text-black dark:text-white">
                            {event.data.from?.slice(0, 4)}...
                            {event.data.from?.slice(-2)}
                          </p>
                        </div>

                        <div className={styles.eventContainer}>
                          <p className="traitName heading text-black dark:text-white">To</p>
                          <p className="traitValue heading text-black dark:text-white">
                            {event?.data?.to?.slice(0, 4)}...
                            {event?.data?.to?.slice(-2)}
                          </p>
                        </div>

                        <div className={styles.eventContainer}>
                          <Link
                            className={styles.txHashArrow}
                            to={`${ETHERSCAN_URL}/tx/${event.transaction.transactionHash}`}
                            target="_blank"
                          >
                            ↗
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.listingContainer}>
                {contractMetadata && (
                  <div className={styles.contractMetadataContainer}>
                    
                    <p className={styles.collectionName}>
                      {contractMetadata?.name}
                    </p>
                  </div>
                )}
                
                <h1 className={styles.title}>{nft?.metadata?.name}</h1>

                <h3 className="heading text-black dark:text-white">{getTraitValue("Name")}</h3>
                <p className={styles.collectionName}>
                  Token ID #{nft?.metadata?.id}
                </p>

               
                <div  className={styles.nftOwnerContainer}
                >
                  {/* Random linear gradient circle shape */}
                  <div
                    className={styles.nftOwnerImage}
                    style={{
                      background: `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`,
                    }}
                  />
                  <div className={styles.nftOwnerInfo}>
                    <p className="label heading text-black dark:text-white">Current Owner</p>
                    <p className="nftOwnerAddress heading text-black dark:text-white"  >
                      {nft?.owner?.slice(0, 8)}...{nft?.owner?.slice(-4)}
                    </p>
                  </div>
                  </div>

                <div className={styles.pricingContainer}>
                  {/* Pricing information */}
                  <div className={styles.pricingInfo}>
                    <p className="label heading text-black dark:text-white">Price</p>
                    <div className="pricingValue heading text-black dark:text-white">
                      {loadingContract || loadingDirect || loadingAuction ? (
                        <Skeleton width="120" height="24" />
                      ) : (
                        <>
                          {directListing && directListing[0] ? (
                            <>
                              {
                                directListing[0]?.currencyValuePerToken
                                  .displayValue
                              }
                              {" " +
                                directListing[0]?.currencyValuePerToken.symbol}
                            </>
                          ) : auctionListing && auctionListing[0] ? (
                            <>
                              {
                                auctionListing[0]?.buyoutCurrencyValue
                                  .displayValue
                              }
                              {" " +
                                auctionListing[0]?.buyoutCurrencyValue.symbol}
                            </>
                          ) : (
                            "Not for sale"
                          )}
                        </>
                      )}
                    </div>

                    <div>
                      {loadingAuction ? (
                        <Skeleton width="120" height="24" />
                      ) : (
                        <>
                          {auctionListing && auctionListing[0] && (
                            <>
                              <p
                                className={styles.label}
                                style={{ marginTop: 12 }}
                              >
                                Bids starting from
                              </p>

                              <div className={styles.pricingValue}>
                                {
                                  auctionListing[0]?.minimumBidCurrencyValue
                                    .displayValue
                                }
                                {" " +
                                  auctionListing[0]?.minimumBidCurrencyValue
                                    .symbol}
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {loadingContract || loadingDirect || loadingAuction ? (
                  <Skeleton width="100%" height="164" />
                ) : (
                  <>
                    <Web3Button
                      contractAddress={MARKETPLACE_ADDRESS}
                      action={async () => await buyListing()}
                      className={styles.btn}
                      onSuccess={() => {
                        toast(`Purchase success!`, {
                          icon: "✅",
                          style: toastStyle,
                          position: "bottom-center",
                        });
                      }}
                      onError={(e) => {
                        toast(`Purchase failed! Reason: ${e.message}`, {
                          icon: "❌",
                          style: toastStyle,
                          position: "bottom-center",
                        });
                      }}
                    >
                      Buy at asking price
                    </Web3Button>

                    <div
                      className={`${styles.listingTimeContainer} ${styles.or}`}
                    >
                      <p className={styles.listingTime}>or</p>
                    </div>

                    <input
                      className={styles.input}
                      defaultValue={
                        auctionListing?.[0]?.minimumBidCurrencyValue
                          ?.displayValue || 0
                      }
                      type="number"
                      step={0.000001}
                      onChange={(e) => {
                        setBidValue(e.target.value);
                      }}
                    />

                    <Web3Button
                      contractAddress={MARKETPLACE_ADDRESS}
                      action={async () => await createBidOrOffer()}
                      className={styles.btn}
                      onSuccess={() => {
                        toast(`Bid success!`, {
                          icon: "✅",
                          style: toastStyle,
                          position: "bottom-center",
                        });
                      }}
                      onError={(e) => {
                        console.log(e);
                        toast(`Bid failed! Reason: ${e.message}`, {
                          icon: "❌",
                          style: toastStyle,
                          position: "bottom-center",
                        });
                      }}
                    >
                      Place bid
                    </Web3Button>
                  </>
                )}
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
}

export default NFTDetails;

import {
  MediaRenderer,
  ThirdwebNftMedia,
  useContract,
  useContractEvents,
  useValidDirectListings,
  useValidEnglishAuctions,
  Web3Button,
} from "@thirdweb-dev/react";
import { GetStaticProps, GetStaticPaths } from "next";
import { NFT, ThirdwebSDK } from "@thirdweb-dev/sdk";
import React, { useState, useEffect } from "react";
import {  useNavigate, useParams  } from "react-router-dom";
import { back } from "../../assets"
import { Trans } from "@lingui/macro";
import styles from "../../../styles/Token.module.css";
import {
  ETHERSCAN_URL,
  MARKETPLACE_ADDRESS,
  NETWORK,
  nftDropContractAddress,
} from "../../constants/contractAddresses";
import { Link } from "react-router-dom";
import randomColor from "../../utils/randomColor";
import {Skeleton} from "../../components";
import toast, { Toaster } from "react-hot-toast";
import toastStyle from "../../utils/toastConfig";




type Props = {
  nft: NFT;
  contractMetadata: any;
};
const [randomColor1, randomColor2] = [randomColor(), randomColor()];







export default function NFTDetail (   ) {





  const [bidValue, setBidValue] = useState<string>();
  // Connect to marketplace smart contract
  const { contract: marketplace, isLoading: loadingContract } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );
    const { contract: nftCollection } = useContract(nftDropContractAddress);










    // const { data: directListing, isLoading: loadingDirect } =
   //  useValidDirectListings(marketplace, {
    // tokenContract: nftDropContractAddress,
    // tokenId: nft.metadata.id,
   //  });


// 2. Load if the NFT is for auction
    // const { data: auctionListing, isLoading: loadingAuction } =
    // useValidEnglishAuctions(marketplace, {
    // tokenContract: nftDropContractAddress  ,
    // tokenId: nft.metadata.id,
    //  });

// Load historical transfer events: TODO - more event types like sale
    // const { data: transferEvents, isLoading: loadingTransferEvents } =
    // useContractEvents(nftCollection, "Transfer", {
    // queryFilter: {
    // filters: {
    //  tokenId: nft.metadata.id,
    //  },
    // order: "desc",
    // },
    //   });



   // async function createBidOrOffer() {
   //  let txResult;
   //  if (!bidValue) {
   //    toast(`Please enter a bid value`, {
   //     icon: "❌",
   //     style: toastStyle,
   //     position: "bottom-center",
   //   });
   //   return;
   // }
  
   // if (auctionListing?.[0]) {
   //  txResult = await marketplace?.englishAuctions.makeBid(
   //    auctionListing[0].id,
   //   bidValue
   //  );
   //  } else if (directListing?.[0]) {
   //    txResult = await marketplace?.offers.makeOffer({
   //     assetContractAddress: NFT_COLLECTION_ADDRESS,
   //     tokenId: nft.metadata.id,
   //    totalPrice: bidValue,
   //  });
   // } else {
   //   throw new Error("No valid listing found for this NFT");
   // }
  
   //  return txResult;
   // }
  
   //  async function buyListing() {
   //    let txResult;
  
   //    if (auctionListing?.[0]) {
   //      txResult = await marketplace?.englishAuctions.buyoutAuction(
   //        auctionListing[0].id
   //     );
   //   } else if (directListing?.[0]) {
   //     txResult = await marketplace?.directListings.buyFromListing(
   //       directListing[0].id,
   //       1
   //     );
   //   } else {
   //     throw new Error("No valid listing found for this NFT");
   //   }
   //   return txResult;
   //   }




  return (






    <div> 
      detail nft page
    </div>






  );
}










export const getStaticProps: GetStaticProps = async (context) => {
  const tokenId = context.params?.tokenId as string;
  const sdk = new ThirdwebSDK(NETWORK, {
    secretKey: process.env.REACT_APP_TEMPLATE_CLIENT_ID,
  });
  const contract = await sdk.getContract(nftDropContractAddress);
  const nft = await contract.erc721.get(tokenId);
  let contractMetadata;

  try {
    contractMetadata = await contract.metadata.get();
  } catch (e) {}

  return {
    props: {
      nft,
      contractMetadata: contractMetadata || null,
    },
    revalidate: 1, // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sdk = new ThirdwebSDK(NETWORK, {
    secretKey: process.env.REACT_APP_TEMPLATE_CLIENT_ID,
  });

  const contract = await sdk.getContract(nftDropContractAddress);
  const nfts = await contract.erc721.getAll();
  const paths = nfts.map((nft) => {
    return {
      params: {
        contractAddress: nftDropContractAddress,
        tokenId: nft.metadata.id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
};

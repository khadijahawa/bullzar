import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { os, logo3, logo11 } from "../../assets";
import { MediaRenderer} from "@thirdweb-dev/react";
import { Trans } from "@lingui/macro";
import { useTheme } from "next-themes";


const Card = ({ nft }) => (  
  <div className="nft-card">
      {/* <Link href={`/NFTDetail/${nft.id} ` }> */}
      {console.log("nffffttt", nft)}
      <div className="card-image">
        <MediaRenderer src={nft.image} alt={nft.name} />
      </div>
      <div className="card-details">
        <h2>{nft.name}</h2>
      </div>
  </div>
);


const OwnedNFT = () => {
  const { theme } = useTheme();
  const { address } = useParams();
  const [Prods, setProds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const getSimpleHash = async (owner) => {
    const apiKey = "bullsclub_sk_22165387-689b-4bdd-aea4-dd13179bfa51_2d5oq0c55iwiavd7";
    const url = `https://api.simplehash.com/api/v0/nfts/owners?chains=base&wallet_addresses=${owner}&limit=5`;
  
    try {
      const response = await fetch(url, {
        headers: {
          accept: "application/json",
          "X-API-KEY": apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      const simpleHashNFTs = data.nfts.map((item) => ({
        id: item.token_id,
        image: item.extra_metadata.image_original_url
          ? item.extra_metadata.image_original_url.replace("ipfs://", "https://ipfs.io/ipfs/")
          : null,
        address: item.contract_address,
        expiredate: "",
        name: item.collection.name + " " + item.token_id,
        stock: "1",
        owners: [
          {
            id: "1",
            name: "",
            image: "assets/images/seller/collector-1.png",
            verified: false,
            profileLink: "/",
          },
        ],
      }));
  
      setProds(simpleHashNFTs);
      setLoading(true);
    } catch (error) {
      setError(error);
      console.error("Error fetching NFT data", error);
    }
  };
  
  useEffect(() => {
    const checkAndLoadNFTs = async () => {
      if (window.ethereum && window.ethereum.selectedAddress) {
        try {
          await getSimpleHash(window.ethereum.selectedAddress);
        } catch (error) {
          setError(error);
        }
      } else {
        setProds([]); // If wallet is not connected, clear the NFTs
        setLoading(true);
      }
    };
  
    checkAndLoadNFTs();
  }, [window.ethereum?.selectedAddress]);





  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-blue-500 text-center">
        <Trans>BASE NFTs</Trans> 
        </h1>
      </div>
      
      {error ? (
        <p>Error: {error.message}</p>
      ) : loading ? (
        <div className="nft-container">
          {Prods.length > 0 ? (
            Prods.map((nft) => <Card key={nft.id} nft={nft} />)
          ) : (
            <p><Trans>No NFTs found. Mint an NFT</Trans> </p>
          )}
        </div>
      ) : (
        <p><Trans>Loading...</Trans> </p>
      )}
      <div style={{ display: 'flex' }}>
    <a href='https://opensea.io/collection/bull-wokers-1' target='_blank' rel="noreferrer">
        <img src={os} width="90" height="90" alt="opensea" />
    </a>
    <a href="https://bullmart.bullsclub.space" target="_blank" rel="noreferrer">
        {theme === "light" ? (
            <img src={logo3} width="100" height="100" alt="bull logo2" />
        ) : (
            <img src={logo11} width="100" height="100" alt="bull logo" />
        )}
    </a>
</div>


    </div>
    
  );
};

export default OwnedNFT

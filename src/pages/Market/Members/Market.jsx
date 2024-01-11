import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import { NFTGrid, Container } from "../../../components";
import { nftDropContractAddress } from "../../../constants/contractAddresses";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Trans } from "@lingui/macro";

export default function Market() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(nftDropContractAddress);
  const { data, isLoading } = useNFTs(contract);

  return (
    <div>
      <Container maxWidth="lg">
        <Link className="transfer-button2" to="/Sell">
          <Button>
            <Trans>SELL</Trans>
          </Button>
        </Link>

        <h1 style={{ padding: 10 }}> Browse BULLSCLUB Legacy MEMBERS</h1>
        <NFTGrid
          data={data}
          isLoading={isLoading}
          emptyText={
            "Looks like there are no NFTs in this collection, Try refresh"
          }
        />
      </Container>
    </div>
  );
}

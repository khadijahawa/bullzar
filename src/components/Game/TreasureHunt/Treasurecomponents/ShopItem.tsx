import {
  ThirdwebNftMedia,
  useActiveClaimCondition,
  Web3Button,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { EditionDrop, NFT } from "@thirdweb-dev/sdk";
import React from "react";
import styles from "../../../../styles/Theme.module.css"
import {Worker1155} from "../../../../constants/contractAddresses"
import { Trans } from "@lingui/macro";

type Props = {
  pickaxeContract: EditionDrop;
  item: NFT;
};

export default function ShopItem({ item, pickaxeContract }: Props) {
  const { data: claimCondition } = useActiveClaimCondition(
    pickaxeContract,
    item.metadata.id
  );
  
  return (
    <div className={styles.nftBox} key={item.metadata.id.toString()}>
      <ThirdwebNftMedia
        metadata={item.metadata}
        className={`${styles.nftMedia} ${styles.spacerTop}`}
        height="64"
      />
      <h3>{item.metadata.name}</h3>
      <p>
       <Trans> Price:</Trans>{" "}
        <b>
          {claimCondition && ethers.utils.formatUnits(claimCondition?.price)}{" "}
          BEAR
        </b>
      </p>

      <div className={styles.smallMargin}>
        <Web3Button
          theme="dark"
          contractAddress={Worker1155}
          action={(contract) => contract.erc1155.claim(item.metadata.id, 1)}
          onSuccess={() => alert("Purchased!")}
          onError={(error) => alert(error)}
        >
        <Trans>  Buy </Trans>
        </Web3Button>
      </div>
    </div>
  );
}
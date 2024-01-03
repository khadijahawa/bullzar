import React from 'react'
import {
  ThirdwebNftMedia,
  useAddress,
  useOwnedNFTs,
  Web3Button
} from "@thirdweb-dev/react";
import { EditionDrop, SmartContract } from "@thirdweb-dev/sdk";
import {LoadingSection} from "../../../../components";
import styles from "../../../../styles/Theme.module.css"
import {  MiningContractAddress1155} from "../../../../constants/contractAddresses"
import { Trans } from "@lingui/macro";


type Props = {
  pickaxeContract: EditionDrop;
  miningContract: SmartContract<any>;
};


/**
 * This component shows the:
 * - Pickaxes the connected wallet has
 * - A stake button underneath each of them to equip it
 */



export default function OwnedCones ({ pickaxeContract, miningContract }: Props) {
  const address = useAddress();
  const { data: ownedPickaxes, isLoading } = useOwnedNFTs(
    pickaxeContract,
    address
  );

  if (isLoading) {
    return <LoadingSection />;
  }
    

    
  async function equip(id: string) {
    if (!address) return;

    const hasApproval = await pickaxeContract.isApproved(
      address,
      MiningContractAddress1155
    );

    if (!hasApproval) {
      await pickaxeContract.setApprovalForAll(MiningContractAddress1155, true);
    }

    await miningContract.call("stake", [id]);

    // Refresh the page
    window.location.reload();
  }



  
  return (
    <>
    <div className={styles.nftBoxGrid}>
      {ownedPickaxes?.map((p) => (
        <div className={styles.nftBox} key={p.metadata.id.toString()}>
          <ThirdwebNftMedia
            metadata={p.metadata}
            className={`${styles.nftMedia} ${styles.spacerTop}`}
            height={"64"}
          />
          <h3>{p.metadata.name}</h3>

          <div className={styles.smallMargin}>
            <Web3Button
              theme="dark"
              contractAddress={MiningContractAddress1155}
              action={() => equip(p.metadata.id)}
            >
             <Trans> Send To Work</Trans>
            </Web3Button>
          </div>
        </div>
      ))}
    </div>
  </>
);
}
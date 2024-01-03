import React from "react";
import {
  ThirdwebNftMedia,
  useAddress,
  useContractRead,
  useMetadata,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { SmartContract, Token } from "@thirdweb-dev/sdk";
import {ApproxRewards} from '../../../../components'
import { MiningContractAddress1155 } from "../../../../constants/contractAddresses";
import { ethers } from "ethers";

type Props = {
  miningContract: SmartContract<any>;
  tokenContract: Token;
};

/**
 * This component shows the:
 * - Metadata of the token itself (mainly care about image)
 * - The amount this wallet holds of this wallet
 * - The amount this user can claim from the mining contract
 */
export default function Rewards({ miningContract, tokenContract }: Props) {
  const address = useAddress();

  const { data: tokenMetadata } = useMetadata(tokenContract);
  const { data: currentBalance } = useTokenBalance(tokenContract, address);
  const { data: unclaimedAmount } = useContractRead(
    miningContract,
    "calculateRewards",
    [address]
  );
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p>
        FOUND <b>BULL</b>
      </p>
      <p>
        Balance: <b>{currentBalance?.displayValue}</b>
      </p>
      <p>
        Unclaimed:{" "}
        <b>{unclaimedAmount && ethers.utils.formatUnits(unclaimedAmount)}</b>
      </p>
      <ApproxRewards miningContract={miningContract} />
      <div className="smallMargin">
      <Web3Button
          contractAddress={MiningContractAddress1155}
          action={(contract) => {
            contract.call("claim")
          }}
        >
          claim
        </Web3Button>
      </div>
    </div>
  )
}



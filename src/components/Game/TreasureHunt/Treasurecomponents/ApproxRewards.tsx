import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useAddress,  SmartContract } from "@thirdweb-dev/react";
import ContractMappingResponse from "../../../../utils/ContractMappingResponse"
import { Trans } from "@lingui/macro";

type Props = {
  miningContract: SmartContract<any>;
};

// This component gives a very rough estimation of how many tokens have been earned in the current session
// Assuming there is a block every 2.1 seconds on Polygon, and the rewards of gwei is 20_000_000 per block
// The total amount of tokens earned is:
// 10_000_000_000_000 * 2.1 * blocks_in_session
// This is a rough estimation of how many tokens have been earned in the current session



export default function ApproxRewards({ miningContract }: Props) {
  const address = useAddress();

  // We can kick off a timer when this component is mounted
  // Each 2.1 seconds, we can update the amount of tokens earned
  // This is a rough estimation of how many tokens have been earned in the current session

  const everyMillisecondAmount = parseInt(
    (10_000_000_000_000 / 2.1).toFixed(0)
  );

  const [amount, setAmount] = useState<number>(0);

  const [multiplier, setMultiplier] = useState<number>(0);

  useEffect(() => {
    (async () => {
      if (!address) return;

      const p = (await miningContract.call("playerPickaxe", [
        address,
      ])) as ContractMappingResponse;

      if (p.isData) {
        setMultiplier(p.value.toNumber() + 1);
      } else {
        setMultiplier(0);
      }
    })();
  }, [address, miningContract]);

  useEffect(() => {
    // set interval counter
    const interval = setInterval(() => {
      // update the amount of tokens earned
      setAmount(amount + everyMillisecondAmount);
    }, 100);
    // clear interval when component unmounts
    return () => clearInterval(interval);
  }, [amount, everyMillisecondAmount]);

  return (
    <p style={{ width: 370, overflow: "hidden" }}>
     <Trans> Earned this session:</Trans>{" "}
      <b>
        {ethers.utils.formatEther((amount * multiplier).toFixed(0)) ||
          "Error..."}
      </b>
    </p>
  );
}
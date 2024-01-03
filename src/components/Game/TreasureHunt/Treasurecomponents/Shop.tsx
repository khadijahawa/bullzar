import {  useNFTs } from "@thirdweb-dev/react";
import { EditionDrop } from "@thirdweb-dev/sdk";
import React from "react";
import { ShopItem } from '../../../../components';


type Props = {
  pickaxeContract: EditionDrop;
};


export default function Shop({ pickaxeContract }: Props) {
  const { data: availablePickaxes } = useNFTs(pickaxeContract);

  return (
    <>
      <div className="nftBoxGrid">
        {availablePickaxes?.slice(0, 3).map((p) => ( // Limit to the first 3 items
            <ShopItem
            pickaxeContract={pickaxeContract}
            item={p}
            key={p.metadata.id.toString()}
          />
        ))}
      </div>
    </>
  );
}
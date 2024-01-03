import React from "react";
import {
    stackBulls,
    BearToken, base, base1, nft1} from '../../../../assets' // Make sure to provide the correct image path
import { Trans } from "@lingui/macro";

function GoldGem() {
  return (
    <div className="slide">
      <img src={BearToken} alt="Bears" height="48" width="48" />
    </div>
  );
}
function GoldGem1() {
    return (
      <div className="slide">
        <img src={stackBulls} alt="Bears" height="48" width="48" />
      </div>
    );
  }
  function GoldGem2() {
    return (
      <div className="slide">
        <img src={base} alt="Bears" height="48" width="48" />
      </div>
    );
  }
  
  function GoldGem4() {
    return (
      <div className="slide">
        <img src={nft1} alt="Bears" height="48" width="48" />
      </div>
    );
  }
  function GoldGem5() {
    return (
      <div className="slide">
        <img src={base1} alt="thirdweb" height="48" width="48" />
      </div>
    );
  }

function GameplayAnimation({ pickaxe }) {
  if (!pickaxe) {
    return <div style={{ marginLeft: 10 }}><Trans>I Need a Worker!</Trans></div>;
  }

  return (
    <div className="slider">
      <div className="slideTrack">
        <GoldGem2 />
        <GoldGem1 />
        <GoldGem />
        <GoldGem />
        <GoldGem />
        <GoldGem4 />
        <GoldGem />
        <GoldGem />
        <GoldGem1 />
        <GoldGem />
        <GoldGem1 />
        <GoldGem />
        <GoldGem />
        <GoldGem5 />
        <GoldGem />
        <GoldGem2 />
        <GoldGem1 />
        <GoldGem />
        <GoldGem />
        <GoldGem />
        <GoldGem />
        <GoldGem />
        <GoldGem />
        <GoldGem4 />
        <GoldGem />
        <GoldGem />
        <GoldGem2 />
        <GoldGem />
        <GoldGem />
        <GoldGem />
        <GoldGem />
        <GoldGem />
        <GoldGem5 />
        <GoldGem />
        <GoldGem />
        <GoldGem />
      </div>
    </div>
  );
}

export default GameplayAnimation;

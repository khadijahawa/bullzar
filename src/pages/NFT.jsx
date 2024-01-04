/* eslint-disable */
import React from "react";
import { renderPaperCheckoutLink } from "@paperxyz/js-client-sdk";
import { profile2, base1 } from "../assets";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Trans } from "@lingui/macro";
import { Passminter, Memberminter, Intro, OtherChainNFT } from "../components";

const NFT = () => {
  const openCheckout = () =>
    renderPaperCheckoutLink({
      checkoutLinkUrl:
        "https://payments.thirdweb.com/checkout/6369e1e5-bdb1-429d-bcce-12df15701845",
    });
  const iframeStyle = {
    maxWidth: "100%",
  };
  const originalConsoleWarn = console.warn;
  console.warn = function () {
    // Check the warning message and take action if needed
    if (
      arguments[0] &&
      arguments[0].includes("The library is being loaded multiple times")
    ) {
      // Suppress the specific warning
      return;
    }
    // For other warnings, call the original console.warn
    originalConsoleWarn.apply(console, arguments);
  };
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link className="transfer-button2" to="/Market">
          <Button>
            <Trans>MEMBERS</Trans>
          </Button>
        </Link>
        <Link className="transfer-button2" to="/CreateNft">
          <Button style={{ marginRight: "20px" }}>
            <Trans>Create BULL Friend / Q4-2024</Trans>
          </Button>
        </Link>
        <Link to="/Profile">
          <img src={profile2} alt="address" />
        </Link>
      </div>
      <hr />
      <div className="container">
        <div className="token-card1">
          <Intro />
        </div>
        <div className="flex-2 flex flex-col items-center text-black dark:text-white space-y-4 sm:text-left">
          <Trans>PASS are free, limited PASSES</Trans>
          <p className="text-black dark:text-white">
            <Trans>LEGACY MEMBER FEE </Trans> 0.00314 ETH-BASE
          </p>
        </div>
        <div
          className="token-card3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          <Memberminter />
          <Passminter />
        </div>
        <div className="flex-2 flex flex-col items-center space-y-4 sm:text-center">
          <div>
            <hr />
          </div>
          <div className="token-card1">
            <p className="text-black dark:text-white">
              <Trans>
                "Brave members, handpicked for a groundbreaking cloning ritual
                to power our club's future expeditions. Mint one of the chosen
                few, and you'll enjoy a thrilling return of 314,000 $BEARS &
                31415 $BULL! Mint a Royalty, your destiny awaits with a majestic
                bounty 1,300,000$BEARS & 131,000 $BULL. Join the adventure now!"
              </Trans>
            </p>
            <p className="text-black dark:text-white">
              <Trans>
                Found the EYE of Ra?! Recieve 314000 BULL & 5 MIL BEARS, only
                133 unique members "Legacy Phase"
              </Trans>
            </p>
          </div>
          <p>
            <Trans>Get Member with Debit/Credit Card @thirdweb</Trans>
          </p>
          <Button className="text-black dark:text-white" onClick={openCheckout}>
            <img src={base1} alt="paper" width={"20%"} />
          </Button>
        </div>
        <div>
          <div className="container rounded-[15px] items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40"></div>
        </div>
      </div>
      <div style={{ margin: "30p" }}>
        <OtherChainNFT />
      </div>
    </div>
  );
};

export default NFT;

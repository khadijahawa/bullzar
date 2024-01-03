/* eslint-disable */
import React from "react";
import { idea, any, party, travel } from "../../assets";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";

const imageArray = [idea, any, party, travel];
const randomIndex = Math.floor(Math.random() * imageArray.length);
const randomImage = imageArray[randomIndex];

export default function Raise() {
  return (
    <div className="bg-white dark:bg-black">
      <section className="container rounded-[15px] items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
        <div className="flex-1 space-y-4 sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold text-blue-500 text-center">
            <Trans>BASE-MAINNET DAPP</Trans>
          </h1>
          <h1 className="text-4xl font-bold text-yellow-500 text-center">
            <Trans> Create A Fundraiser</Trans>
          </h1>
          <p className="max-w-xl leading-relaxed text-black dark:text-white sm:mx-auto lg:ml-0 text-center">
            <Trans> Raise WEB3 fund for any occasion,</Trans>
          </p>
          <p className="max-w-xl leading-relaxed text-black dark:text-white sm:mx-auto lg:ml-0 text-center">
            <Trans>
              {" "}
              Happy Event, Travel, Education, Party, Game or Any Idea you may
              have
            </Trans>
          </p>
          <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link
              to="/CreateCampaign"
              className="block px-6 py-2 text-center text-white bg-blue-600 rounded-md"
            >
              {" "}
              Create Campaigns
            </Link>
            <p className="max-w-xl leading-relaxed text-black dark:text-white sm:mx-auto lg:ml-0">
              <Trans> must have </Trans>
              <span className="text-blue"> 
              
                <a  href="https://bridge.base.org/deposit" target="_blank" >
                  Ether-Base
                </a>
              </span>{" "}
              <Trans>in your wallet to interact with our DAPP</Trans>
            </p>
          </div>
        </div>
        <div>
          <img src={randomImage} style={{ width: "400px", height: "350px" }} />
        </div>
      </section>
    </div>
  );
}

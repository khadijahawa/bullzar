/* eslint-disable */
import React, { useState } from "react";
import { bridge2, address, market, flipcoin } from "../../assets";
import { Link } from "react-router-dom";

export default function Extras() {
  return (
    <div className="bg-white dark:bg-black">
      <section className="container rounded-[15px] items-center justify-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
        <div className="flex-1 flex flex-col items-center space-y-4 sm:text-center lg:text-left">
          <div className="items-center space-y-3 sm:space-x-6 sm:space-y-0 text-black dark:text-white sm:flex lg:justify-center">
            {
              <Link to="/Bridge">
                <img src={bridge2} alt="bridge" />
              </Link>
            }
            {
              <Link to="/BullFlip">
                <img src={flipcoin} width={100} alt="FlipCoin" />
              </Link>
            }
            {
              <Link to="/Addressbook">
                <img src={address} alt="address" />
              </Link>
            }
          </div>
        </div>
      </section>
    </div>
  );
}

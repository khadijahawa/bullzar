/* eslint-disable */
import React, { useState } from "react";
import {  portal2, market2 } from "../../assets";
import { Link } from "react-router-dom";

export default function Extras2() {
  return (
    <div className="bg-white dark:bg-black">
      <section className="container rounded-[15px] items-center justify-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
        <div className="flex-1 flex flex-col items-center space-y-4 sm:text-center lg:text-left">
          <div className="items-center space-y-3 sm:space-x-6 sm:space-y-0 text-black dark:text-white sm:flex lg:justify-center">
          {
              <Link to="/Portal">
                <img src={portal2} alt="portal" />
              </Link>
            }
            
            {
              <Link to="/Sell">
                <img src={market2} alt="sell" />
              </Link>
            }
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";
import { Campaigns} from "../../components";


const Campagins = () => {
  return (
    <div>
       <hr />
       <div className="bg-white dark:bg-black">
        <section
          className="container rounded-[15px] items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40"
          style={{ padding: "20px" }}
        >
          <div className="flex-1 space-y-4 ">
            <p className=" text-black dark:text-white text-center">
             <Trans>"Whether it's an adventurous journey, an educational dream, a celebration, or a game-changing idea, turn your dreams into reality with fundraising."</Trans>
            </p>
            <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <Link
                to="/CreateCampaign"
                className="block px-6 py-2 text-center text-white bg-blue-600 rounded-md"
              >
               <Trans> Raise fund</Trans>
              </Link>
              <p className="max-w-xl leading-relaxed text-black dark:text-white sm:mx-auto lg:ml-0">
              <Trans> BRIDGE TO</Trans>{" "}
                <span className="text-blue">
                  <a href="https://bridge.base.org/deposit" target="_blank" rel="noreferrer">
                    Ether-Base
                  </a>
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
      <hr />


      <Campaigns title="All Campaigns" />
      
    </div>
  );
};
export default Campagins

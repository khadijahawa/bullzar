import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FundCard } from "../../components";
import { loader } from "../../assets";
import { Trans } from "@lingui/macro";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();
  const handleNavigate = (campaign) => {
    navigate(`/CampaignDetails/${campaign.title}`, { state: campaign });
    // console.log(campaign.title);
  };
  return (
    <div className="dark:bg-black">
      <h1 className="font-epilogue font-semibold text-[18px] text-black dark:text-white text-left">
        {title} ({campaigns.length})
      </h1>
      <div className="flex  mt-[20px] gap-[26px]" style={{ padding: "10px" }}>
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}
        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-black dark:text-white">
            <Trans> No Campaigns Found</Trans>
          </p>
        )}
        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={uuidv4()}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;

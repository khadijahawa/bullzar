import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { DisplayCampaigns } from "../../components";
import contractABI from "../../API/CrowdFunding.json";
import { createcampaginsContract } from "../../constants/contractAddresses";
import { Trans } from "@lingui/macro";

const Campaigns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    try {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
          // Handle the error if the user rejects the request
          console.error("User denied account access");
        }
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        createcampaginsContract,
        contractABI,
        provider
      );

      const campaignData = await contract.getAllCampaigns();
      const parsedCampaigns = campaignData.map((campaign, i) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: campaign.deadline.toNumber(),
        amountCollected: ethers.utils.formatEther(
          campaign.amountCollected.toString()
        ),
        amountCollectedERC20: ethers.utils.formatEther(
          campaign.amountCollectedERC20.toString()
        ),
        image: campaign.image,
        pId: i,
      }));
      setCampaigns(parsedCampaigns);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-black dark:text-white text-center">
        <Trans> ALL Fundraisers</Trans>
      </h1>
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </div>
  );
};
export default Campaigns;

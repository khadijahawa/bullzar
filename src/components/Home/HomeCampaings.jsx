import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { DisplayCampaigns } from "../../components";
import contractABI from "../../API/CrowdFunding.json";
import {createcampaginsContract} from "../../constants/contractAddresses"
import { Trans } from "@lingui/macro";



const HomeCampaings = () => {
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
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(
          createcampaginsContract,
          contractABI,
          provider
        );
        const campaignData = await contract.getAllCampaigns();

        // Get the last 4 campaigns
        const lastFourCampaigns = campaignData.slice(-3).map((campaign, i) => ({
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
          ), // Actual ERC20 donation amount
          image: campaign.image,
          pId: i
        }));

        setCampaigns(lastFourCampaigns);
      } else {
        // User is not connected
        console.log("User is not connected");
        setCampaigns([]); // Clear existing campaigns
      }
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
    <div className="bg-white dark:bg-black">
      <div className="token-card1 items-center" >
      <h1 className="text-4xl font-bold text-black dark:text-white text-right">
       <Trans> Active Fundraisers</Trans>
      </h1>
      <section className="container rounded-[15px] items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
        {campaigns.length > 0 ? (
          <DisplayCampaigns title=" " isLoading={isLoading} campaigns={campaigns} />
        ) : (
          <p className="text-center text-gray-500"></p>
        )}
      </section>
      </div>
    </div>
  );
};

export default HomeCampaings;
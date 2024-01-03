import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { DisplayCampaigns } from "../../components";
import { useAddress } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";
import contractABI from "../../API/CrowdFunding.json";
import {createcampaginsContract} from "../../constants/contractAddresses"
import { Trans } from "@lingui/macro";

const MyCampaigns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const address = useAddress();

  const fetchUserCampaigns = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        createcampaginsContract,
        contractABI,
        provider
      );
      const campaignData = await contract.getAllCampaigns();
      console.log("campaignDatacampaignData", campaignData);
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
          campaign.amountCollectedERC20.toString(),
          18
        ),
        image: campaign.image,
        pId: i
      }));

      // Filter campaigns for the current user
      const userCampaigns = parsedCampaigns.filter(
        (campaign) => campaign.owner === address
      );
      setCampaigns(userCampaigns);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      fetchUserCampaigns(); // Fetch only the user's campaigns
    }
  }, [address]);

  return (
    <div>
      <DisplayCampaigns
        title="My Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
       <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
        <Link
          to="/CreateCampaign"
          className="block px-6 py-2 text-center text-white bg-blue-600 rounded-md"
        >
          <Trans>Create Campaign</Trans>
        </Link>
      </div>
    </div>
  );
};
export default MyCampaigns;

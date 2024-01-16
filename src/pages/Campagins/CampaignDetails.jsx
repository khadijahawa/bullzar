/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { CountBox, Loader } from "../../components";
import { calculateBarPercentage, daysLeft } from "../../utils/Campaigns";
import {
  logo,
  lin,
  bull,
  suzy,
  steve,
  twins,
  temo,
  share,
  fb,
  email,
  twitter,
} from "../../assets";
import { useAddress, useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import { Button } from "react-bootstrap";
import contractABI from "../../API/CrowdFunding.json";
import { Trans } from "@lingui/macro";

const tagWords = ["Party", "Travel", "Game", "Education", "Fun", "Celebration"];
const randomIndex1 = Math.floor(Math.random() * tagWords.length);
const randomtagword = tagWords[randomIndex1];
const imageArray = [logo, suzy, bull, steve, twins, temo];
const randomIndex = Math.floor(Math.random() * imageArray.length);
const randomImage = imageArray[randomIndex];
const contractAddress = "0xa167AB1526B7792dbAFfA4b137E4b5cB455FC99B";

const ShareComponent = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="share-container">
      <img src={share} alt="Share" onClick={toggleDropdown} />
      {isDropdownOpen && (
        <div className="share-dropdown">
          <div
            class="fb-share-button"
            data-href="https://bullzar.bullsclub.space/Campagins"
            data-layout=""
            data-size=""
          >
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbullzar.bullsclub.space%2FCampagins"
              rel="noreferrer"
            >
              <img
                src={fb}
                alt="Facebook"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
          <a
            class="twitter-share-button"
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fbullzar.bullsclub.space%2FCampagins&text=Check%20out%20BULLZAR%20Campagins"
            target="blank"
          >
            <img
              src={twitter}
              alt="Twitter"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
          <a
            href="mailto:info@example.com?&subject=&cc=&bcc=&body=https://bullzar.bullsclub.space/Campagins%0ABULLZAR%20CAMPAINS"
            target="blank"
          >
            <img
              src={email}
              alt="Email"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </div>
      )}
    </div>
  );
};

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { contract, isReady } = useContract(contractAddress, contractABI);
  // const { donate, donateErc20  } = useContractWrite(contract);
  const address = useAddress();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [amountBull, setAmountBull] = useState("");
  const [donators, setDonators] = useState([]);
  const remainingDays = daysLeft(state.deadline);




  useEffect(() => {
    const fetchData = async () => {
      if (isReady && contract) {
        try {
          await fetchDonators();
        } catch (error) {
          console.error("Error fetching donators:", error);
        }
      }
    };
    fetchData();
  }, [isReady, contract]);
  const getDonations = async (pId) => {
    const donations = await contract.call("getDonators", [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  const fetchDonators = async () => {
    try {
      const campaignId = state.pId;
      const data = await getDonations(campaignId);

      const addresses = data[0];
      const amounts = data[1];

      const parsedDonations = addresses.map((donator, index) => ({
        donator,
        donation: ethers.utils.formatEther(amounts[index].toString()),
      }));

      setDonators(parsedDonations);
    } catch (error) {
      console.error("Error fetching donators:", error);
    }
  };




  const handleDonateETH = async () => {
    setIsLoading(true);
    try {
      if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        console.error("Invalid amount:", amount);
        throw new Error("Please enter a valid donation amount.");
      }

      const data = await contract.call("donateToCampaign", [state.pId], {
        value: ethers.utils.parseEther(amount),
      });
      console.info("ETH donation success", data);
    } catch (error) {
      console.error("ETH donation failed", error);
    } finally {
      setIsLoading(false);
    }
  };




  const handleDonateBull = async () => {
    setIsLoading(true);
    try {
      if (!amountBull || isNaN(amountBull) || parseFloat(amountBull) <= 0) {
        console.error("Invalid amount:", amountBull);
        throw new Error("Please enter a valid donation amount.");
      }

      // const parsedAmount = ethers.utils.parseEther(amount);
      const parsedAmountBull = ethers.utils.parseEther(amountBull);
      const campaignId = state.pId;

      const data = await contract.call("donateERC20ToCampaign", [
        campaignId,
        parsedAmountBull,
      ]);
      console.info("Bull donation success", data);
    } catch (error) {
      console.error("Bull donation failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-black">
      {isLoading && <Loader />}
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px] text-black dark:text-white">
        <div className="flex-1 flex-col">
          <img
            src={state.image}
            alt="campaign"
            className="w-full h-[410px] object-cover rounded-xl"
          />
          <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
            <div
              className="absolute h-full bg-[#4acd8d]"
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[10px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox
            title={`Raised of ${state.target}`}
            value={state.amountCollected}
          />
          <CountBox title="BULL Raised" value={state.amountCollectedERC20} />
          {console.log("amountCollectedERC20", state.amountCollectedERC20)}
        </div>
      </div>

      <ShareComponent />

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5 text-black dark:text-white">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h1 className="font-epilogue font-semibold text-[18px] text-black dark:text-white uppercase">
              {state.title}
            </h1>
            <h4 className="font-epilogue font-semibold text-[18px] text-black dark:text-white uppercase">
              <Trans> Creator </Trans>
            </h4>
            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img
                  src={randomImage}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>

              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-black dark:text-white break-all">
                  {state.owner}
                </h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">
                  {randomtagword}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-black dark:text-white uppercase">
              <Trans> Story </Trans>
            </h4>
            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                {state.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-black dark:text-white uppercase">
              <Trans> Donators </Trans>
            </h4>

            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.donator}-${index}`}
                    className="flex justify-between items-center gap-4"
                  >
                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">
                      {index + 1}. {item.donator}
                    </p>
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">
                      {item.donation}
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                  <Trans> Anonymous! </Trans>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
            <Trans> Fund </Trans>
          </h4>

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              <Trans> Donate to campaign </Trans>
            </p>
            <div className="mt-[30px]">
              <input
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <input
                type="number"
                placeholder="BULL 10"
                step="10"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value={amountBull}
                onChange={(e) => setAmountBull(e.target.value)}
              />
              <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
                  <Trans> Support the cause, just because you want to.</Trans>
                </p>
                <Button className="transfer-button1" onClick={handleDonateETH}>
                  <Trans> Donate </Trans> ETH
                </Button>

                <Button className="transfer-button2" onClick={handleDonateBull}>
                  Donate BULL
                </Button>
              </div>

              <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                <p>donation didnt go through?</p>
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
                  <Trans> Need Support ! </Trans>
                </h4>
                <a
                  href="mailto:support@bullsclub.space"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  @📬📦📮📧
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CampaignDetails;

/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { money } from "../../assets";
import { FormField, Loader } from "../../components";
import { checkIfImage } from "../../utils/Campaigns";
import contractABI from "../../API/CrowdFunding.json";
import { createcampaginsContract } from "../../constants/contractAddresses";
import { Trans } from "@lingui/macro";
import { Link } from "react-router-dom";
import { Web3Button } from "@thirdweb-dev/react";


const CreateCampaign = async (args) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await window.ethereum.enable();
  const signer = provider.getSigner();
  const userAddress = await signer.getAddress();
  const contract = new ethers.Contract(
    createcampaginsContract,
    contractABI,
    signer
  );
  try {
    const gasLimit = await contract.estimateGas.createCampaign(...args);
    // const transaction = await contract.createCampaign(...args);
    const transaction = await contract.createCampaign(...args, {
      gasLimit: gasLimit.mul(2), // You can adjust the multiplier as needed
    });
    await transaction.wait();
    return "Campaign created successfully.";
  } catch (error) {
    console.error("Contract call error:", error);
    throw error;
  }
};

const CreateCampain = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        try {
          if (typeof window.ethereum !== "undefined") {
            const data = await CreateCampaign([
              form.title, // title
              form.description, // description
              ethers.utils.parseUnits(form.target, 18),
              new Date(form.deadline).getTime(), // deadline
              form.image,
            ]);
            console.log("contract call success", data);
            navigate("/Campaigns");
          } else {
            console.error(
              "MetaMask (or another Ethereum wallet) is not installed."
            );
          }
        } catch (error) {
         
          setIsLoading(false);
          // Handle the error gracefully, e.g., show an error message to the user
          alert("Failed to create campaign. Please try again."); // Show an error message to the user
        }
      } else {
        alert("Provide a valid image URL");
        setForm({ ...form, image: "" });
      }
    });
  };

  return (
    <div className="bg-[#ffffff] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 dark:bg-black">
      {isLoading && <Loader />}

      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[ #38cf2d] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-black dark:text-white">
          <Trans> Create a Fundraiser</Trans>
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px] text-black dark:text-white"
      >
        <div className="flex flex-wrap gap-[40px] text-black dark:text-white">
          <FormField
            className="text-black dark:text-white"
            labelName="Creator Name*"
            placeholder="BULL THE BULL"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            className="text-black dark:text-white"
            labelName="Title *"
            placeholder="Give us a title "
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
        </div>

        <FormField
          labelName="The Story *"
          placeholder="Tell your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="0.1 ETH"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />
        </div>

        <FormField
          labelName="Fundraiser Image *"
          placeholder="Place image URL of your Campaign"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange("image", e)}
        />

        <div className="flex justify-center items-center mt-[40px]">
         
         
        <Web3Button
  contractAddress="0xa167AB1526B7792dbAFfA4b137E4b5cB455FC99B"
  action={(contract) => {
    contract.call("createCampaign", [
      form.title,
      form.description,
      ethers.utils.parseUnits(form.target, 18),
      new Date(form.deadline).getTime(),
      form.image,
    ]);
  }}
>
  Create
</Web3Button>
       
       
       
       
        </div>

        <div className="w-full flex justify-start items-center p-4 bg-[#291182] dark:bg-[#7e6eba] h-[120px] rounded-[10px]">
          <img
            src={money}
            alt="money"
            className="w-[40px] h-[40px] object-contain"
          />
          <div className="flex flex-col justify-center">
            <h4 className="font-epilogue font-bold text-[25px] text-white dark:text-black ml-[20px]">
              <Trans> Receive 100% of Your Raised Funds</Trans>
            </h4>
          </div>
        </div>
        <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
                  <Trans>Support ! </Trans>
                </h4>
                <a
                  href="mailto:support@bullsclub.space"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  @📬📦📮📧 support@bullsclub.space
                </a>
              
        <Link
          to="/Campagins"
          className="block px-6 py-2 text-center text-white bg-blue-600 rounded-md"
        >
          {" "}
          ALL Campaigns
        </Link>
        </div>
        <p className="font-epilogue font-bold text-[18px] text-black dark:text-white ml-[20px]">
          Free creation for All, limited time. Members only Access to create @Q4-24
        </p>
      </form>
    </div>
  );
};

export default CreateCampain;

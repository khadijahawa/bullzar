import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Radio, LngSwitch } from "..";
import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import {
  logo,
  bull,
  suzy,
  steve,
  twins,
  temo,
  logo1,
  base,
} from "../../assets";
import { i18n } from "@lingui/core";
import { navlinks } from "../../constants/Navlinks";

const imageArray = [logo, suzy, bull, steve, twins, temo];
const randomIndex = Math.floor(Math.random() * imageArray.length);
const randomImage = imageArray[randomIndex];

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name
        ? "bg-[rgba(44, 47, 50, 0.5)]"
        : "bg-transparent"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/1 h-1/1" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/1 h-1/1 ${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const onLanguageChange = (languageKey) => {
    i18n.activate(languageKey);
    setSelectedLanguage(languageKey);
  };

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 dark:bg-black">
      <div>
        <LngSwitch
          language={selectedLanguage}
          onChangeLangage={onLanguageChange}
        />

        <Radio />
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <a href="https://base.org/" target="blank">
          <Icon styles="bg-transparent" imgUrl={base} />
        </a>
        <ConnectWallet
          theme={darkTheme({
            colors: {
              modalBg: "#000000",
              dropdownBg: "#000000",
            },
          })}
          btnTitle={"Login"}
          modalTitle={"BULLZAR-BASE"}
          auth={{ loginOptional: false }}
          switchToActiveChain={true}
          modalSize={"wide"}
          welcomeScreen={{
            img: {
              src: "https://black-legal-fowl-39.mypinata.cloud/ipfs/QmNo6MGVvkWPPPUK4BVADCutzm2hxnXkS4bCcVwu5UrZLR/5.png",
              width: 150,
              height: 150,
            },
          }}
          modalTitleIconUrl={
            "https://black-legal-fowl-39.mypinata.cloud/ipfs/Qmb88mTnG46V3ibXz1vQ7nk1vPYcYcdDznqrpLkqFLyajd?_gl=1*xltrif*_ga*NjQ5OTAxNzY2LjE2OTc0MzQxNjg.*_ga_5RMPXG14TE*MTY5NzU4NzEwOS4yLjEuMTY5NzU4NzI2Ni42MC4wLjA."
          }
          termsOfServiceUrl={"https://bullsclub.xyz/terms-and-conditions"}
          privacyPolicyUrl={"https://bullsclub.xyz/privacy-policy"}
        />
        <NavLink to="" onClick={toggleDrawer}>
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img
              src={randomImage}
              alt="user"
              className="w-[80%] h-[75%] object-contain"
            />
          </div>
        </NavLink>
      </div>
      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div
          className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer"
          onClick={toggleDrawer}
        >
          <img
            src={logo1}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
        {showDrawer && (
          <div className="absolute top-0 right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4">
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${
                    isActive === link.name && "bg-[#3a3a43]"
                  }`}
                  onClick={() => {
                    setIsActive(link.name);
                    setShowDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <img
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${
                      isActive === link.name ? "grayscale-0" : "grayscale"
                    }`}
                  />
                  <p
                    className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                      isActive === link.name
                        ? "text-[#1dc071]"
                        : "text-[#808191]"
                    }`}
                  >
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex mx-4">
              <ConnectWallet
                theme={darkTheme({
                  colors: {
                    modalBg: "#000000",
                    dropdownBg: "#000000",
                  },
                })}
                btnTitle={"Login"}
                modalTitle={"BULLZAR-BASE"}
                auth={{ loginOptional: false }}
                switchToActiveChain={true}
                modalSize={"wide"}
                welcomeScreen={{
                  img: {
                    src: "https://black-legal-fowl-39.mypinata.cloud/ipfs/QmNo6MGVvkWPPPUK4BVADCutzm2hxnXkS4bCcVwu5UrZLR/5.png",
                    width: 150,
                    height: 150,
                  },
                }}
                modalTitleIconUrl={
                  "https://black-legal-fowl-39.mypinata.cloud/ipfs/Qmb88mTnG46V3ibXz1vQ7nk1vPYcYcdDznqrpLkqFLyajd?_gl=1*xltrif*_ga*NjQ5OTAxNzY2LjE2OTc0MzQxNjg.*_ga_5RMPXG14TE*MTY5NzU4NzEwOS4yLjEuMTY5NzU4NzI2Ni42MC4wLjA."
                }
                termsOfServiceUrl={"https://bullsclub.xyz/terms-and-conditions"}
                privacyPolicyUrl={"https://bullsclub.xyz/privacy-policy"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

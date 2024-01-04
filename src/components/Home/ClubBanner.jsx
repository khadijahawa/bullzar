/* eslint-disable */
import React from "react";
import {
  base,
  base1,
  js,
  logo11,
  logo3,
  freename,
  BullPass,
  bull,
  steve,
  suzy,
} from "../../assets";
import { useTheme } from "next-themes";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/macro";

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

const ClubBanner = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-white dark:bg-black">
      <div className="token-card1 items-center">
        <Container>
          <div
            className="flex-1 flex flex-col items-center space-y-4 sm:text-center lg:text-left"
            style={{ padding: "20px" }}
          >
            {" "}
            <h2 className="text-4xl font-bold text-blue-500 ">
              <Trans> BULL PASS & MEMBERS </Trans>
            </h2>
          </div>
          <section className="container rounded-[15px] items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
            <div className="flex-1 space-y-8 sm:text-center lg:text-left">
              <Link to="/NFT">
                <img src={BullPass} />
              </Link>
            </div>
          </section>
          <div className="container rounded-[15px] items-center justify-center flex flex-wrap px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
            <div className="w-1/3 text-center">
              <Link to="/NFT">
                <img src={suzy} style={{ width: "100%", height: "auto" }} />
              </Link>
            </div>
            <div className="w-1/3 text-center">
              <Link to="/NFT">
                <img src={bull} style={{ width: "100%", height: "auto" }} />
              </Link>
            </div>
            <div className="w-1/3 text-center">
              <Link to="/NFT">
                <img src={steve} style={{ width: "100%", height: "auto" }} />
              </Link>
            </div>
            <div className="flex flex-wrap">
              <a href="https://thirdweb.com/" target="blank">
                <Icon
                  styles="bg-transparent w-[100px] h-[100px]"
                  imgUrl={base1}
                />
              </a>
              <a href="https://base.org/" target="blank">
                <Icon
                  styles="bg-transparent w-[105px] h-[105px]"
                  imgUrl={base}
                />
              </a>
              <a href="https://bullsclub.space/" target="blank">
                {theme === "light" ? (
                  <Icon
                    styles="w-[115px] h-[115px] bg-[#ffffff]"
                    imgUrl={logo3}
                  />
                ) : (
                  <Icon
                    styles="w-[115px] h-[115px] bg-transparent"
                    imgUrl={logo11}
                  />
                )}
              </a>
              <a href="https://www.jsmastery.pro/" target="blank">
                <Icon styles="bg-transparent w-[105px] h-[105px]" imgUrl={js} />
              </a>
              <a
                href="https://freename.io/discover/xn--blockchain-0oa"
                target="blank"
              >
                <Icon
                  styles="bg-[#1c1c24] w-[101px] h-[101px]"
                  imgUrl={freename}
                />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ClubBanner;

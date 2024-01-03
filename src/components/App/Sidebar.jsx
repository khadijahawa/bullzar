import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navlinks } from "../../constants/Navlinks";
import { useTheme } from "next-themes";
import { sun,
  moon1,
  logo,
  logo11,
  suzy,
  bull,
  steve,
  twins,
  temo,
  logo1,
} from "../../assets";

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

const imageArray = [logo, suzy, bull, steve, twins, temo];
const randomIndex = Math.floor(Math.random() * imageArray.length);
const randomImage = imageArray[randomIndex];



const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    // Toggle between 'light' and 'dark' themes
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh] ">
      <a href="https://bullsclub.space/">
        {theme === "light" ? (
          <Icon styles="w-[52px] h-[52px] bg-[#ffffff]" imgUrl={logo1} />
        ) : (
          <Icon styles="w-[52px] h-[52px] bg-transparent" imgUrl={logo11} />
        )}
      </a>
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
        <div></div>
        <div>
          <span>
            <span onClick={toggleTheme}>
              {theme === "light" ? (
                <img src={sun} alt="Sun" />
              ) : (
                <img src={moon1} alt="Moon" width={45} />
              )}
            </span>
          </span>
        </div>

        <a href="https://bullsclub.xyz/" target="blank">
          <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={randomImage} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

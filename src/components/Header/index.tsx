import { useState } from "react";

import instagramImg from "../../assets/instagram.svg";
import twitterImg from "../../assets/twitter.svg";
import tiktokImg from "../../assets/tiktok.svg";

import { itemsMenu } from "./constants";
import HeaderListItem from "./HeaderListItem";

export default function Header() {
  const [selectedMenu, setSelectedMenu] = useState<number>(0);

  const handleSelectMenu = (index: number) => {
    setSelectedMenu(index);
  };

  return (
    <div className="bg-[#FCEBE9] h-[138px] w-auto flex flex-col items-center justify-center">
      <div className="h-[74px] w-[73.5rem] flex items-center justify-between">
        <div className="h-[1.67rem] w-[7.8125rem] flex justify-between">
          <a href="https://www.instagram.com/belkitsune/" target="_blank">
            <img src={instagramImg} alt="" />
          </a>
          <a href="https://www.tiktok.com/@belkitsune" target="_blank">
            <img src={tiktokImg} alt="" />
          </a>
          <a href="https://twitter.com/belkitsune" target="_blank">
            <img src={twitterImg} alt="" />
          </a>
        </div>
        <div>
          <h1 className="font-nickainley text-[3.584375rem] text-darkpurple">
            BelKitsune
          </h1>
        </div>
        <div>
          <ul className="text-[24px] font-comfortaa font-medium flex space-x-[3rem] text-lightpink">
            {itemsMenu.map(({ itemName, itemValue }) => (
              <HeaderListItem
                handleSelect={handleSelectMenu}
                menuItem={itemValue}
                selected={itemValue == selectedMenu}
                itemName={itemName}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

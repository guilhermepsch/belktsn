import instagramImg from "../../assets/instagram.svg";
import twitterImg from "../../assets/twitter.svg";
import tiktokImg from "../../assets/tiktok.svg";

export default function Header() {
  return (
    <div className="bg-[#FCEBE9] h-[138px] w-auto flex flex-col items-center justify-center">
      <div className="h-[74px] w-[73.5rem] flex items-center justify-between">
        <div className="h-[1.67rem] w-[7.8125rem] flex justify-between">
          <img src={instagramImg} alt="" />
          <img src={tiktokImg} alt="" />
          <img src={twitterImg} alt="" />
        </div>
        <div>
          <h1 className="font-nickainley text-[3.584375rem] text-darkpurple">
            BelKitsune
          </h1>
        </div>
        <div>
          <ul className="text-[1.5rem] font-comfortaa font-bold flex space-x-[3rem] text-lightpink">
            <li>sobre</li>
            <li>portfólio</li>
            <li>parcerias</li>
            <li>contato</li>
            <li>mídia kit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

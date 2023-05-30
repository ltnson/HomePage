import FrameSVG from "../../../assets/SVGServices/FrameSVG";
import Image86SVG from "../../../assets/SVGServices/Image86SVG";
import image86 from "../../../assets/SVGServices/image86.svg";
import image87 from "../../../assets/SVGServices/image87.svg";
import F360F from "../../../assets/SVGServices/360F.svg";
import AIA from "../../../assets/SVGServices/AIA.svg";
import AmInsurance from "../../../assets/SVGServices/AmInsurance.svg";
import FWB from "../../../assets/SVGServices/FWB.svg";
import IAG from "../../../assets/SVGServices/IAG.svg";
import OCBCBank from "../../../assets/SVGServices/OCBCBank.svg";
import PWC from "../../../assets/SVGServices/PWC.svg";
import Prudential from "../../../assets/SVGServices/Prudential.svg";
import UOB from "../../../assets/SVGServices/UOB.svg";

const Services = () => {
  return (
    <div className="">
      <div className=" px-28 pt-20 pb-8 max-[1023px]:px-6">
        <div className=" flex items-center">
          <div className="md:w-7/12 w-full">
            <p className="lg:text-5xl font-bold  md:text-4xl text-3xl">
              Custom Blockchain Development Services
            </p>
            <p className="lg:text-2xl text-xl">
              Expert Blockchain Development Services for Secure and
              Decentralized Blockchain Technology
            </p>
          </div>
          <div className="hidden md:block md:w-5/12">
            <FrameSVG />
          </div>
        </div>
        <div className="flex gap-3 pt-8">
          {/* <Image86SVG /> */}
          <div className=" w-[104px] h-[104px] inline-block">
            <img src={image86} />
          </div>
          <div className=" w-[104px] h-[104px] inline-block">
            <img src={image87} />
          </div>
        </div>
      </div>
      <div className="flex items-center py-6 flex-col gap-10">
        <p className="px-8 text-center">
          Our clients include 150 Global Brands, Silicon Valley Founders
        </p>
        <div className="w-full flex justify-evenly items-center gap-8">
          <a className=" w-[112px] h-[50px] inline-block" href="">
            <img src={AmInsurance} />
          </a>
          <a className=" w-[110px] h-[30px] inline-block" href="">
            <img src={UOB} />
          </a>
          <a className=" w-[103px] h-[46px] inline-block" href="">
            <img src={IAG} />
          </a>
          <a className=" w-[100px] h-[50px] inline-block" href="">
            <img src={FWB} />
          </a>
        </div>
        <div className="w-full flex justify-evenly items-center gap-8">
          <a className=" w-[121px] h-[51px] inline-block" href="">
            <img src={Prudential} />
          </a>
          <a className=" w-[81px] h-[62px] inline-block" href="">
            <img src={PWC} />
          </a>
          <a className=" w-[55px] h-[58px] inline-block" href="">
            <img src={AIA} />
          </a>
          <a className=" w-[172px] h-[37px] inline-block" href="">
            <img src={OCBCBank} />
          </a>
          <a className=" w-[89px] h-[39px] inline-block" href="">
            <img src={F360F} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

import FrameSVG from "../../../assets/SVGServices/FrameSVG";
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
import { Typography } from "@mui/material";

const Services = () => {
  return (
    <div className=" flex justify-center">
      <div className="w-full  max-w-[1280px]">
        <div className=" pt-20 pb-8 px-4 md:px-6 lg:px-16 xl:px-24 flex flex-col justify-between">
          <div className=" flex justify-between ">
            <div className="md:w-[400px] lg:w-[680px] block">
              <Typography className="title">
                Custom Blockchain Development Services
              </Typography>

              <Typography className="intro" sx={{ fontWeight: "400" }}>
                Expert Blockchain Development Services for Secure and
                Decentralized Blockchain Technology
              </Typography>
            </div>
            <div className="hidden md:block self-center">
              <FrameSVG />
            </div>
          </div>
          <div className="flex gap-3 pt-8">
            <div className=" w-[104px] h-[104px] block">
              <img src={image86} />
            </div>
            <div className=" w-[104px] h-[104px] block">
              <img src={image87} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-8 px-4 md:px-6 lg:px-16 xl:px-24 text-center">
          <Typography className="content">
            Our clients include 150 Global Brands, Silicon Valley Founders
          </Typography>

          <div className="flex flex-nowrap  sm:flex-wrap md:w-[760px] lg:w-[820px] justify-evenly gap-12 sm:gap-8 px-8  pt-12">
            <a className="md:ml-16 w-[112px] h-[50px] sm:block" href="">
              <img src={AmInsurance} />
            </a>
            <a className=" w-[110px] h-[30px] block" href="">
              <img src={UOB} />
            </a>
            <a className=" w-[103px] h-[46px] block" href="">
              <img src={IAG} />
            </a>
            <a className="md:mr-16 w-[100px] h-[50px] block" href="">
              <img src={FWB} />
            </a>
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
    </div>
  );
};

export default Services;

// style="transform: ; "

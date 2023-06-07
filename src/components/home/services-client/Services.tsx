import FrameSVG from "../../../assets/SVGServices/FrameSVG";
import image86 from "../../../assets/SVGServices/image86.svg";
import image87 from "../../../assets/SVGServices/image87.svg";
import { Typography } from "@mui/material";
import Clients from "./ClientsService/Clients";

const Services = () => {
  return (
    <div className=" flex justify-center">
      <div className="w-full  max-w-[1280px]">
        <div className=" pt-20 pb-8 px-4 md:px-6 lg:px-16 xl:px-24 flex flex-col justify-between">
          <div className=" flex justify-between ">
            <div className="md:w-[400px] lg:w-[680px]">
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
            <div className=" w-[104px] h-[104px] ">
              <img src={image86} />
            </div>
            <div className=" w-[104px] h-[104px] ">
              <img src={image87} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-8 px-4 md:px-6 lg:px-16 xl:px-24 text-center relative sm:static">
          <Typography className="content">
            Our clients include 150 Global Brands, Silicon Valley Founders
          </Typography>
          <Clients />
        </div>
      </div>
    </div>
  );
};

export default Services;

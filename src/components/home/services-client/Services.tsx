import FrameSVG from "../../../assets/SVGServices/FrameSVG";
import Image86SVG from "../../../assets/SVGServices/Image86SVG";

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
          <Image86SVG />
          <Image86SVG />
        </div>
      </div>
      <div className="flex items-center py-6 flex-col gap-10">
        <p className="px-8 text-center">
          Our clients include 150 Global Brands, Silicon Valley Founders
        </p>
        <div className="w-full flex justify-evenly items-center gap-8">
          <a className=" w-[112px] h-[50px] inline-block" href="">
            <img
              src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/aminsurance.png"
              alt="Aminsurance"
            />
          </a>
          <a className=" w-[110px] h-[30px] inline-block" href="">
            <img
              src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/uob.png"
              alt="UOB"
            />
          </a>
          <a className=" w-[103px] h-[46px] inline-block" href="">
            <img
              src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/IAG.png"
              alt="IAG"
            />
          </a>
          <a className=" w-[100px] h-[50px] inline-block" href="">
            <img
              src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/FWD.png"
              alt="FWD"
            />
          </a>
        </div>
        <div className="w-full flex justify-evenly items-center gap-8">
          <a className=" w-[121px] h-[51px] inline-block" href="">
            <img
              src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/prudential.png"
              alt="Prudential"
            />
          </a>
          <a className=" w-[81px] h-[62px] inline-block" href="">
            <img
              src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/pwc.png"
              alt="PWC"
            />
          </a>
          <a className=" w-[55px] h-[58px] inline-block" href="">
            <img
              src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/AIA.png"
              alt="AIA"
            />
          </a>
          <a className=" w-[172px] h-[37px] inline-block" href="">
            <img
              src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/ocbc.png"
              alt="OCBC"
            />
          </a>
          <a className=" w-[89px] h-[39px] inline-block" href="">
            <img
              src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/360f.png"
              alt="360F"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

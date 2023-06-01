import footerBG from "../../assets/footerBG.svg";

const Footer = () => {
  return (
    <div className="">
      {/* <div className="w-full h-auto">
        <img src={footerBG} />
      </div> */}
      <div
        className="flex flex-col items-end gap-8 h-[590px]"
        style={{
          backgroundImage: `url(${footerBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div
        className="bg-red-500 h-[210px] grid sm:grid-cols-3 font-semibold "
        style={{ background: "#e21a22" }}
      >
        <div className="sm:col-span-2 col-span-1"></div>
        <div className="flex flex-col justify-center text-white col-span-2 sm:col-span-1 items-center sm:items-start">
          <p className="text-2xl font-bold pb-4">Visit us</p>
          <p>j28 Sin Ming Lane #03-137,</p>
          <p>Midview City,</p>
          <p>Singapore 573972</p>
        </div>
      </div>
      <div
        className="col-span-3 flex justify-between py-2"
        style={{ background: "#991217" }}
      >
        <p className="pl-20 pr-10 text-white">
          Copyright © 2023 Vinova Pte. Ltd. All rights reserved.
        </p>
        <div className="flex gap-2 pr-20">
          <a href="" className="w-[12px] h-[22px]">
            <img
              src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/faceBook.png"
              alt=""
            />
          </a>
          <a href="" className="w-[24px] h-[22px]">
            <img
              src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/twitter.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

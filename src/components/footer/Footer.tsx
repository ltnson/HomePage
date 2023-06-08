import {Button} from '@mui/material';

const Footer = () => {
  return (
    <>
      <div className="bg-footer">
        <p className="font-bold px-1 sm:px-0 ">BEGIN YOUR JOURNEY WITH US</p>
        <p className="font-normal px-1 sm:px-0">
          We'd love to see how we can help you.
        </p>
        <Button className="btnFooter">GET IN TOUCH</Button>
      </div>
      <div className="bg-red flex justify-center">
        <div className=" h-[210px] grid sm:grid-cols-3 font-semibold max-w-[1280px]">
          <div className="sm:col-span-2 col-span-1"></div>
          <div className="flex flex-col justify-center text-white col-span-2 sm:col-span-1 items-center sm:items-start">
            <p className="text-2xl font-bold pb-4">Visit us</p>
            <p>j28 Sin Ming Lane #03-137,</p>
            <p>Midview City,</p>
            <p>Singapore 573972</p>
          </div>
        </div>
      </div>
      <div className="bg-red-dark flex justify-center">
        <div className="flex justify-between items-center py-2 max-w-[1280px] w-full">
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
    </>
  );
};

export default Footer;

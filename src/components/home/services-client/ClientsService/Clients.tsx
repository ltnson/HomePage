import F360F from "../../../../assets/SVGServices/360F.svg";
import AIA from "../../../../assets/SVGServices/AIA.svg";
import AmInsurance from "../../../../assets/SVGServices/AmInsurance.svg";
import FWB from "../../../../assets/SVGServices/FWB.svg";
import IAG from "../../../../assets/SVGServices/IAG.svg";
import OCBCBank from "../../../../assets/SVGServices/OCBCBank.svg";
import PWC from "../../../../assets/SVGServices/PWC.svg";
import Prudential from "../../../../assets/SVGServices/Prudential.svg";
import UOB from "../../../../assets/SVGServices/UOB.svg";
import { useEffect, useState } from "react";

const Clients = () => {
  const [numb, setNumb] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setNumb((numb + 1) % 9);
    }, 5000);
  }, [numb]);

  const logo1 = (
    <a className="min-w-[112px] h-[50px] mr-6" href="">
      <img src={AmInsurance} />
    </a>
  );
  const logo2 = (
    <a className="min-w-[110px] h-[30px] mr-6" href="">
      <img src={UOB} />
    </a>
  );
  const logo3 = (
    <a className="min-w-[103px] h-[46px] mr-6" href="">
      <img src={IAG} />
    </a>
  );
  const logo4 = (
    <a className="min-w-[100px] h-[50px] mr-6" href="">
      <img src={FWB} />
    </a>
  );
  const logo5 = (
    <a className="min-w-[121px] h-[51px] mr-6" href="">
      <img src={Prudential} />
    </a>
  );
  const logo6 = (
    <a className="min-w-[81px] h-[62px] mr-6" href="">
      <img src={PWC} />
    </a>
  );
  const logo7 = (
    <a className="min-w-[55px] h-[58px] mr-6" href="">
      <img src={AIA} />
    </a>
  );
  const logo8 = (
    <a className="min-w-[172px] h-[37px] mr-6" href="">
      <img src={OCBCBank} />
    </a>
  );
  const logo9 = (
    <a className="min-w-[89px] h-[39px] mr-6" href="">
      <img src={F360F} />
    </a>
  );

  let x;
  if (numb === 0) {
    x = 0;
  }
  if (numb === 1) {
    x = 136;
  }
  if (numb === 2) {
    x = 270;
  }
  if (numb === 3) {
    x = 397;
  }
  if (numb === 4) {
    x = 521;
  }
  if (numb === 5) {
    x = 666;
  }
  if (numb === 6) {
    x = 771;
  }
  if (numb === 7) {
    x = 850;
  }
  if (numb === 8) {
    x = 1046;
  }

  return (
    <div
      className="sm:px-8 block pt-12 h-[110px] top-16 sm:h-auto 
      flex overflow-hidden w-11/12 flex-nowrap
      sm:flex-col sm:gap-8 items-center"
    >
      <div
        className="flex items-center sm:hidden"
        style={{
          transform: `translateX(-${x}px)`,
          transition: "transform 0.25s ease-out",
        }}
      >
        {logo1}
        {logo2}
        {logo3}
        {logo4}
        {logo5}
        {logo6}
        {logo7}
        {logo8}
        {logo9}
        {logo1}
        {logo2}
        {logo3}
        {logo4}
      </div>
      <div className="hidden sm:flex flex-wrap xl:gap-12 sm:gap-1 sm:gap-y-8 lg:gap-6 items-center justify-evenly">
        {logo1}
        {logo2}
        {logo3}
        {logo4}
      </div>
      <div className="hidden sm:flex flex-wrap xl:gap-12 sm:gap-1 sm:gap-y-8 lg:gap-6 items-center justify-evenly md:flex-nowrap">
        {logo5}
        {logo6}
        {logo7}
        {logo8}
        {logo9}
      </div>
    </div>
  );
};

export default Clients;

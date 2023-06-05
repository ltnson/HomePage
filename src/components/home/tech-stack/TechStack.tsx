import AWS from "../../../assets/SVGTech-stack/AWS.svg";
import Azue from "../../../assets/SVGTech-stack/Azue.svg";
import GCP from "../../../assets/SVGTech-stack/GCP.svg";
import Docker from "../../../assets/SVGTech-stack/Docer.svg";
import Kubernetes from "../../../assets/SVGTech-stack/Kubernetes.svg";
import Cardano from "../../../assets/SVGTech-stack/Cardano.svg";
import Ethereum from "../../../assets/SVGTech-stack/Ethereum.svg";
import Agular from "../../../assets/SVGTech-stack/Agular.svg";
import ECK from "../../../assets/SVGTech-stack/ECR.svg";
import Golang from "../../../assets/SVGTech-stack/Golang.svg";
import Hyperleader from "../../../assets/SVGTech-stack/Hyperleader.svg";
import Java from "../../../assets/SVGTech-stack/Java.svg";
import JavaScript from "../../../assets/SVGTech-stack/JavaScript.svg";
import NodeJs from "../../../assets/SVGTech-stack/NodeJs.svg";
import Polkadot from "../../../assets/SVGTech-stack/Polkadot.svg";
import React from "../../../assets/SVGTech-stack/React.svg";
import Solana from "../../../assets/SVGTech-stack/Solana.svg";
import Tezoz from "../../../assets/SVGTech-stack/Tezoz.svg";

const TechStack = () => {
  return (
    <div className="  max-w-[1100px]">
      <div className="flex flex-col items-center gap-8 pt-16 px-4 md:px-6 lg:px-16">
        <p className="lg:text-5xl font-bold  md:text-4xl text-3xl">
          Technology Stack We Use
        </p>
        <p className="text-xl lg:w-4/6   lg:text-2xl">
          Our blockchain developers provide you the quality you need and the
          flexibility you want using the following tech stacks:
        </p>
        <div className="grid xl:grid-cols-2 gap-x-10">
          <div className="flex flex-col gap-8 items-center py-8">
            <p className="text-xl">Cloud & Containerization</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 sm:w-[535px] ">
              <div className="flex flex-col items-center">
                <div className="inline-block min-w-[52px] h-[52px]">
                  <img src={AWS} />
                </div>
                <p className="text-gray-400 text-sm">AWS</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Azue} />
                </div>
                <p className="text-gray-400 text-sm">Azure</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={GCP} />
                </div>
                <p className="text-gray-400 text-sm">GCP</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Docker} />
                </div>
                <p className="text-gray-400 text-sm">Docker</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Kubernetes} />
                </div>
                <p className="text-gray-400 text-sm">Kubernetes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={ECK} />
                </div>
                <p className="text-gray-400 text-sm">ECK/ECR</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center py-8">
            <p className="text-xl">Platforms & Blockchains</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 sm:w-[535px] ">
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Ethereum} />
                </div>
                <p className="text-gray-400 text-sm">Ethereum</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Solana} />
                </div>
                <p className="text-gray-400 text-sm">Solana</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Tezoz} />
                </div>
                <p className="text-gray-400 text-sm">Tezos</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Polkadot} />
                </div>
                <p className="text-gray-400 text-sm">PolkaDot</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Cardano} />
                </div>
                <p className="text-gray-400 text-sm">Cardano</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Hyperleader} />
                </div>
                <p className="text-gray-400 text-sm">Hyperledger</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center py-8">
            <p className="text-xl">Languages</p>
            <div className="grid grid-cols-4 sm:grid-cols-7 sm:w-[535px] ">
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Solana} />
                </div>
                <p className="text-gray-400 text-sm">Solana</p>
              </div>
              <div className="flex flex-col items-center col-span-2 sm:col-span-1">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Agular} />
                </div>
                <p className="text-gray-400 text-sm">Angular</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Golang} />
                </div>
                <p className="text-gray-400 text-sm">GoLang</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={Java} />
                </div>
                <p className="text-gray-400 text-sm">Java</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={JavaScript} />
                </div>
                <p className="text-gray-400 text-sm">Javascript</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={NodeJs} />
                </div>
                <p className="text-gray-400 text-sm">Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-block w-[52px] h-[52px]">
                  <img src={React} />
                </div>
                <p className="text-gray-400 text-sm">React.js</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center py-8">
            <p className="text-xl">Standards we Follow</p>
            <div className="grid grid-cols-4 sm:grid-cols-8 sm:w-[535px] gap-2">
              <div className="flex items-center justify-center h-[65px] border-2 border-slate-400 rounded-md">
                <p className="text-sm font-semibold"> ST20</p>
              </div>
              <div className="flex items-center justify-center h-[65px] border-2 border-slate-400 rounded-md">
                <p className="text-sm font-semibold"> EC20</p>
              </div>
              <div className="flex items-center justify-center h-[65px] border-2 border-slate-400 rounded-md">
                <p className="text-sm font-semibold"> ERC721</p>
              </div>
              <div className="flex items-center justify-center h-[65px] border-2 border-slate-400 rounded-md">
                <p className="text-sm font-semibold"> ERC1559</p>
              </div>
              <div className="flex items-center justify-center h-[65px] border-2 border-slate-400 rounded-md">
                <p className="text-sm font-semibold"> AML</p>
              </div>
              <div className="flex items-center justify-center h-[65px] border-2 border-slate-400 rounded-md">
                <p className="text-sm font-semibold"> KYC</p>
              </div>
              <div className="flex items-center justify-center h-[65px] border-2 border-slate-400 rounded-md">
                <p className="text-sm font-semibold"> GDPR</p>
              </div>

              <div className="flex items-center justify-center h-[65px] border-2 border-slate-400 rounded-md">
                <p className="text-sm font-semibold"> PSI DSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

import AWS from '../../../assets/SVGTech-stack/AWS.svg';
import Azure from '../../../assets/SVGTech-stack/Azue.svg';
import GCP from '../../../assets/SVGTech-stack/GCP.svg';
import Docker from '../../../assets/SVGTech-stack/Docer.svg';
import Kubernetes from '../../../assets/SVGTech-stack/Kubernetes.svg';
import Cardano from '../../../assets/SVGTech-stack/Cardano.svg';
import Ethereum from '../../../assets/SVGTech-stack/Ethereum.svg';
import Agular from '../../../assets/SVGTech-stack/Agular.svg';
import ECK from '../../../assets/SVGTech-stack/ECR.svg';
import Golang from '../../../assets/SVGTech-stack/Golang.svg';
import Hyperleader from '../../../assets/SVGTech-stack/Hyperleader.svg';
import Java from '../../../assets/SVGTech-stack/Java.svg';
import JavaScript from '../../../assets/SVGTech-stack/JavaScript.svg';
import NodeJs from '../../../assets/SVGTech-stack/NodeJs.svg';
import Polkadot from '../../../assets/SVGTech-stack/Polkadot.svg';
import React from '../../../assets/SVGTech-stack/React.svg';
import Solana from '../../../assets/SVGTech-stack/Solana.svg';
import Tezoz from '../../../assets/SVGTech-stack/Tezoz.svg';
import {Typography} from '@mui/material';
import {dataLogo, dataString} from '../../../models';

const TechStack = () => {
  const dataStand: dataString = [
    'ST20',
    'EC20',
    'ERC721',
    'ERC1559',
    'AML',
    'KYC',
    'GDPR',
    'PSI DSS',
  ];

  const dataCloud: dataLogo = [
    {logo: AWS, name: 'AWS'},
    {logo: Azure, name: 'Azure'},
    {logo: GCP, name: 'GCP'},
    {logo: Docker, name: 'Docker'},
    {logo: Kubernetes, name: 'Kubernetes'},
    {logo: ECK, name: 'ECK/ECR'},
  ];
  const dataPlatf: {logo: string; name: string}[] = [
    {logo: Ethereum, name: 'Etherum'},
    {logo: Solana, name: 'Solana'},
    {logo: Tezoz, name: 'Tezos'},
    {logo: Polkadot, name: 'Polkadot'},
    {logo: Cardano, name: 'Cardano'},
    {logo: Hyperleader, name: 'Hyperleader'},
  ];
  const dataLang: {logo: string; name: string}[] = [
    {logo: Solana, name: 'Solana'},
    {logo: Agular, name: 'Agular'},
    {logo: Golang, name: 'Golang'},
    {logo: Java, name: 'Java'},
    {logo: JavaScript, name: 'Javascript'},
    {logo: NodeJs, name: 'Node.js'},
    {logo: React, name: 'React.js'},
  ];

  return (
    <div className=" flex justify-center">
      <div className="flex flex-col items-center gap-8 pt-16 px-4 md:px-6 lg:px-16 text-center  max-w-[1280px] py-8 pb-12">
        <Typography className="title">Technology Stack We Use</Typography>
        <div className="md:w-3/4 ">
          <Typography className="intro">
            Our blockchain developers provide you the quality you need and the
            flexibility you want using the following tech stacks:
          </Typography>
        </div>

        <div className="grid xl:grid-cols-2 gap-x-10">
          <div className="flex flex-col gap-8 items-center py-8">
            <Typography className="content2">
              Cloud & Containerization
            </Typography>
            <div className="grid grid-cols-3 sm:grid-cols-6 sm:w-[535px] gap-8 sm:gap-0">
              {dataCloud.map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="inline-block min-w-[52px] h-[52px]">
                    <img src={data.logo} />
                  </div>
                  <p className="text-gray-400 text-sm">{data.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center py-8">
            <Typography className="content2">
              Platforms & Blockchains
            </Typography>
            <div className="grid grid-cols-3 sm:grid-cols-6 sm:w-[535px] gap-8 sm:gap-0">
              {dataPlatf.map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="inline-block w-[52px] h-[52px]">
                    <img src={data.logo} />
                  </div>
                  <p className="text-gray-400 text-sm">{data.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center py-8">
            <Typography className="content2">Languages</Typography>
            <div className="grid grid-cols-4 sm:grid-cols-7 sm:w-[535px] gap-8 sm:gap-0">
              {dataLang.map((data, index) => (
                <div
                  key={index}
                  className={`flex gap-y-4 flex-col items-center ${
                    data.name === 'Golang' && 'pr-12 sm:pr-0'
                  } ${data.name === 'Solana' && 'pl-12 sm:pl-0'} ${
                    data.name === 'Agular' && 'col-span-2 sm:col-span-1'
                  }`}>
                  <div className="inline-block w-[52px] h-[52px] ">
                    <img src={data.logo} />
                  </div>
                  <p className="text-gray-400 text-sm">{data.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center py-8">
            <Typography className="content2">Standards we Follow</Typography>
            <div className="grid grid-cols-4 sm:grid-cols-8 sm:w-[535px] gap-2">
              {dataStand.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-[65px] border-2 border-slate-400 rounded-md">
                  <p className="text-sm font-semibold"> {data}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

import {Typography, Button} from '@mui/material';
import Item from './itemsOfList/Item';
import {dataDevServ} from '../../../models';

const ServicesDev = () => {
  const dataDevServ: dataDevServ = [
    {
      title: 'Cryptocurrency & NFTs',
      option: [
        'Crypto Wallets Development',
        'NFT Marketplace Development',
        'Smart Contract Development',
        'ICO and IEO Development',
      ],
    },
    {
      title: 'Decentralized Solutions',
      option: [
        'Centralized / Decentralized Exchange Development',
        'Hyperledger Solutions',
        'DeFi Solution Development',
        'Decentralized App (dApp) Development',
      ],
    },
    {
      title: 'Blockchain Solutions',
      option: [
        'Dedicated Blockchain Development',
        'End-to-end Blockchain Development',
        'POC Development',
        'Blockchain Consultation',
        'Blockchain Staff Augmentation',
      ],
    },
  ];
  return (
    <>
      <div className=" flex justify-center">
        <div className="gap-10 py-40 px-4 md:px-6 lg:px-16 xl:px-24 leading-10  max-w-[1280px]">
          <div className="w-5/6 py-10 sm:text-center md:text-start">
            <Typography className="title">
              Blockchain Development Services
            </Typography>

            <Typography className="intro">
              We offer futuristic Blockchain development solutions to help
              clients grow in this thriving market. We provide services in areas
              like
            </Typography>
          </div>
          <div className="flex flex-col items-center md:inline">
            <div>
              {dataDevServ.map((data, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-12 gap-2 py-8 border-b border-gray-200 grid-cols-1">
                  <div className="md:col-span-4">
                    <Typography className="title2">{data.title}</Typography>
                  </div>
                  <div className="md:col-span-8 ">
                    <ul>
                      {data.option.map((op, index) => (
                        <Item op={op} key={index} />
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className=" flex gap-2 items-center py-10 flex-col text-white w-full h-[364px] md:h-[325px]"
        style={{backgroundColor: '#FF1C03', color: 'white'}}>
        <Typography
          className="title"
          sx={{color: 'white', textAlign: 'center'}}>
          50+ projects delivered
        </Typography>
        <Typography
          sx={{
            color: 'white',
            textAlign: 'center',
            fontSize: '25px',
            fontWeight: '300',
            padding: '0 16px',
          }}>
          Our highly experienced team have delivered ....
        </Typography>

        <Button className="button2">Get in Touch</Button>
      </div>
    </>
  );
};

export default ServicesDev;

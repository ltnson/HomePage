import Item from "./itemsOfList/Item";

type Options = string[];

const ServicesDev = () => {
  const options1: Options = [
    "Crypto Wallets Development",
    "NFT Marketplace Development",
    "Smart Contract Development",
    "ICO and IEO Development",
  ];
  const options2: Options = [
    "Centralized / Decentralized Exchange Development",
    "Hyperledger Solutions",
    "DeFi Solution Development",
    "Decentralized App (dApp) Development",
  ];
  const options3: Options = [
    "Dedicated Blockchain Development",
    "End-to-end Blockchain Development",
    "POC Development",
    "Blockchain Consultation",
    "Blockchain Staff Augmentation",
  ];
  return (
    <>
      <div className="  max-w-[1280px]">
        <div className="gap-10 py-40 px-4 md:px-6 lg:px-16 xl:px-24 leading-10">
          <div className="w-5/6 py-10 text-center md:text-start">
            <p className="lg:text-5xl font-bold  md:text-4xl text-3xl">
              Blockchain Development Services
            </p>
            <p className="lg:text-2xl text-xl">
              We offer futuristic Blockchain development solutions to help
              clients grow in this thriving market. We provide services in areas
              like
            </p>
          </div>
          <div className="flex flex-col items-center md:inline">
            <div>
              <div>
                <div className="grid md:grid-cols-8 gap-2 py-8 border-b border-gray-200 grid-cols-1">
                  <p className="lg:text-3xl font-bold leading-tight md:col-span-3 text-2xl">
                    Cryptocurrency & NFTs
                  </p>
                  <div className="md:col-span-5 ">
                    <ul>
                      {options1.map((op, index) => (
                        <Item op={op} key={index} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid md:grid-cols-8 gap-2 py-8 border-b border-gray-200 grid-cols-1">
                  <p className="lg:text-3xl font-bold leading-tight md:col-span-3 text-2xl ">
                    Decentralized Solutions
                  </p>
                  <div className="md:col-span-5">
                    <ul>
                      {options2.map((op, index) => (
                        <Item op={op} key={index} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid md:grid-cols-8 gap-2 py-8 border-b border-gray-200 grid-cols-1">
                  <p className="lg:text-3xl font-bold leading-tight md:col-span-3 text-2xl ">
                    Blockchain Solutions
                  </p>
                  <div className="md:col-span-5">
                    <ul>
                      {options3.map((op, index) => (
                        <Item op={op} key={index} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" flex gap-2 items-center py-10 flex-col text-white w-full"
        style={{ backgroundColor: "#FF1C03", color: "white" }}
      >
        <p className="lg:text-5xl font-bold leading-tight md:text-4xl text-3xl text-center">
          50+ projects delivered
        </p>
        <p className="lg:text-2xl md:text-xl text-lg px-4 text-center">
          Our highly experienced team have delivered ....
        </p>
        <button
          className="bg-white rounded-md md:w-72 md:h-16 w-64 h-12 md:text-2xl text-xl font-bold mt-10"
          style={{ color: "#FF1C03" }}
        >
          <p className="pt-3">Get in Touch</p>
        </button>
      </div>
    </>
  );
};

export default ServicesDev;

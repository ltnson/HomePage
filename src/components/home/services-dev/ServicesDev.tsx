import Item from "./itemsOfList/Item";

const ServicesDev = () => {
  return (
    <>
      <div className="">
        <div className="gap-10  px-28 py-40 max-[1023px]:px-6 leading-10 ">
          <div className="w-5/6 py-10">
            <p className="lg:text-5xl font-bold  md:text-4xl text-3xl">
              Blockchain Development Services
            </p>
            <p className="lg:text-2xl text-xl">
              We offer futuristic Blockchain development solutions to help
              clients grow in this thriving market. We provide services in areas
              like
            </p>
          </div>
          <div className="">
            <div className="grid md:grid-cols-8 gap-2 py-8 border-bottom border-gray-200 grid-cols-1">
              <p className="lg:text-3xl font-bold leading-tight md:col-span-3 text-2xl ">
                Cryptocurrency & NFTs
              </p>
              <div className="md:col-span-5">
                <ul>
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-8 gap-2 py-8 border-bottom border-gray-200 grid-cols-1">
              <p className="lg:text-3xl font-bold leading-tight md:col-span-3 text-2xl ">
                Decentralized Solutions
              </p>
              <div className="md:col-span-5">
                <ul>
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-8 gap-2 py-8 border-bottom border-gray-200 grid-cols-1">
              <p className="lg:text-3xl font-bold leading-tight md:col-span-3 text-2xl ">
                Blockchain Solutions
              </p>
              <div className="md:col-span-5">
                <ul>
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" flex gap-2 items-center py-10 flex-col text-white"
        style={{ backgroundColor: "#FF1C03", color: "white" }}
      >
        <p className="lg:text-5xl font-bold leading-tight md:text-4xl text-3xl">
          50+ projects delivered
        </p>
        <p className="lg:text-2xl md:text-xl text-lg px-4 text-center">
          Our highly experienced team have delivered ....
        </p>
        <button
          className="bg-white rounded-md md:w-72 md:h-16 w-64 h-12 md:text-2xl text-xl  font-bold mt-10"
          style={{ color: "#FF1C03" }}
        >
          Get in Touch
        </button>
      </div>
    </>
  );
};

export default ServicesDev;

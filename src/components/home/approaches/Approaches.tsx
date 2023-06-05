import {
  Ellipse1,
  Ellipse2,
  Ellipse3,
} from "../../../assets/SVGApproaches/ApproachesSVG";

const Approaches = () => {
  return (
    <div className=" max-w-[1100px]">
      <div className="flex flex-col items-center gap-8 my-16 px-4 md:px-6 lg:px-16 xl:px-24">
        <p className="lg:text-5xl font-bold  md:text-4xl text-3xl text-center">
          Approaches to Blockchain
        </p>
        <p className="lg:text-2xl text-xl lg:w-4/6  text-gray-600">
          Our world-class team, of course, suggests which Blockchain approach
          would best fit your business. But, we let you have the last word
          before we get things rolling for you. Here are the Blockchain
          approaches we think can transform your business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
          <div className="flex flex-col items-center p-2">
            <div className="flex flex-col gap-4 items-center">
              <div className="rounded-full bg-red-50 p-4">
                <Ellipse1 />
              </div>

              <p className="font-bold text-2xl">Public</p>
              <p className="text-center  text-gray-600">
                Permission-less and non-restrictive, public blockchains work
                best when maintaining large user bases where any member of the
                shared network can verify records, do proof-of-work, or engage
                in mining.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:border-x md:border-l p-2 ">
            <div className="flex flex-col gap-4 items-center">
              <div className="rounded-full bg-red-50 p-4">
                <Ellipse2 />
              </div>

              <p className="font-bold text-2xl">Private</p>
              <p className="text-center  text-gray-600">
                When confidentiality is vital, private blockchains are the best.
                Private blockchains allow access to data to only those
                participants who matter, letting data out on a need-to-know
                basis.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-2">
            <div className="flex flex-col gap-4 items-center">
              <div className="rounded-full bg-red-50 p-4">
                <Ellipse3 />
              </div>

              <p className="font-bold text-2xl">Hybrid</p>
              <p className="text-center  text-gray-600">
                Hybrid blockchains are a blend of both private and public
                blockchains. In this model, users can share data with the public
                and keep things confidential if needed, making the ecosystem
                super flexible.
              </p>
            </div>
          </div>
        </div>
        <button
          className="text-white rounded-md w-72 h-16 text-2xl font-bold mt-10 text-center"
          style={{ backgroundColor: "#FF1C03" }}
        >
          <p className="pt-3">Get in Touch</p>
        </button>
      </div>
    </div>
  );
};

export default Approaches;

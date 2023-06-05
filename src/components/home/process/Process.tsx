import { Typography } from "@mui/material";

const Process = () => {
  return (
    <div className=" flex justify-center">
      <div className=" max-w-[1280px]">
        <div className=" my-16 px-4 md:px-6 lg:px-16 xl:px-24 ">
          <div className="md:w-1/2 pb-32">
            <Typography className="title">
              Our Blockchain Development Process
            </Typography>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 md:grid-cols-2 grid-cols-1 ">
            <div className="lg:col-span-2 md:col-span-1 flex flex-col gap-4 lg:max-w-[680px] xl:max-w-[750px] md:max-w-[600px]">
              <Typography className="title3">
                <span style={{ color: "#FF1C03" }}>01</span> Discovery Stage
              </Typography>
              <Typography className="content">
                We look at your project requirements at this stage. We try to
                get a sense of what blockchain solutions you need. Each
                blockchain network (public, private, and hybrid) has distinct
                pluses and minuses.
              </Typography>
              <Typography className="content">
                So, we decide which one will best drive your goals. In short, we
                gather all requirements at this stage and form an initial
                workflow based on that
              </Typography>
            </div>
            <div className="md:col-span-1 hidden sm:flex  w-auto justify-end items-end">
              <img
                src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/Discovery-Stage.jpg"
                alt="Discovery Stage"
              />
            </div>
            <div className="lg:col-span-2 md:col-span-1 flex flex-col gap-4 relative lg:max-w-[670px]">
              <div className="absolute h-10 border rounded-md border-red-500 -top-11 max-[1050px]:hidden"></div>
              <Typography className="title3">
                <span style={{ color: "#FF1C03" }}>02 </span> Product
                Feasibility Study
              </Typography>
              <Typography className="content">
                Next, we do a theoretical build-up of your blockchain app or
                website, outlining the architecture, frameworks, consensus
                mechanism, tech stacks, mockups, designs, and feasibility.
              </Typography>
              <Typography className="content">
                Once our stakeholders approve the prototype and our
                Proof-of-Concept (POC), we proceed with the development work.
              </Typography>
            </div>
            <div className="md:col-span-1 hidden sm:flex  w-auto justify-end items-end">
              <img
                src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/Product-Feasibility-Study.jpg"
                alt="Product Feasibility Study"
              />
            </div>
            <div className="lg:col-span-2 md:col-span-1 flex flex-col gap-4 relative lg:max-w-[670px] ">
              <div className="absolute h-10 border rounded-md border-red-500 -top-11 max-[1050px]:hidden"></div>
              <Typography className="title3">
                <span style={{ color: "#FF1C03" }}>03</span> Product Development
              </Typography>
              <Typography className="content">
                At this point, we focus on the blockchain platforms, programming
                languages, UI/UX, databases, APIs, and the middleware that
                connects the external systems with the blockchain.
              </Typography>
              <Typography className="content">
                Our developers test and release an alpha version to spot issues.
                Once we fix all gaps and find the product doing well in the
                market, we add more complex features down the road.
              </Typography>
            </div>
            <div className="md:col-span-1 hidden sm:flex  w-auto justify-end items-end">
              <img
                src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/Product-Development.jpg"
                alt="Product Development"
              />
            </div>
            <div className="lg:col-span-2 md:col-span-1 flex flex-col gap-4 relative lg:max-w-[670px]">
              <div className="absolute h-10 border rounded-md border-red-500 -top-11 max-[1050px]:hidden"></div>
              <Typography className="title3">
                <span style={{ color: "#FF1C03" }}>04</span> Support and
                Maintenance
              </Typography>
              <Typography className="content">
                Our job doesn’t end with just the product launch. We offer
                post-launch support too. We closely monitor the transactions
                executed in blockchain and keep a regular watch to remove
                bugs/glitches (if any).
              </Typography>
              <Typography className="content">
                We even handle feature upgrades from time to time to ensure your
                product is always up to date and functions flawlessly throughout
                its lifetime.
              </Typography>
            </div>
            <div className="md:col-span-1 hidden sm:flex  w-auto justify-end items-end">
              <img
                src="https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/Support-Maintenance.jpg"
                alt="Support and Maintenance"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

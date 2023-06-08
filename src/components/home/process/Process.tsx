import {Typography} from '@mui/material';
import {dataProcess} from '../../../models';

const Process = () => {
  const dataProcess: dataProcess = [
    {
      title: 'Discovery Stage',
      option: [
        'We look at your project requirements at this stage. We try to get a sense of what blockchain solutions you need. Each blockchain network (public, private, and hybrid) has distinct pluses and minuses.',
        'So, we decide which one will best drive your goals. In short, we gather all requirements at this stage and form an initial workflow based on that',
      ],
      imageUrl: {
        src: 'https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/Discovery-Stage.jpg',
        alt: 'Discovery Stage',
      },
    },
    {
      title: 'Product Feasibility Study',
      option: [
        ' Next, we do a theoretical build-up of your blockchain app or website, outlining the architecture, frameworks, consensus mechanism, tech stacks, mockups, designs, and feasibility.',
        'Once our stakeholders approve the prototype and our Proof-of-Concept (POC), we proceed with the development work.',
      ],
      imageUrl: {
        src: 'https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/Product-Feasibility-Study.jpg',
        alt: 'Product Feasibility Study',
      },
    },
    {
      title: 'Product Development',
      option: [
        'At this point, we focus on the blockchain platforms, programming languages, UI/UX, databases, APIs, and the middleware that connects the external systems with the blockchain.',
        'Our developers test and release an alpha version to spot issues. Once we fix all gaps and find the product doing well in the market, we add more complex features down the road.',
      ],
      imageUrl: {
        src: 'https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/Product-Development.jpg',
        alt: 'Product Development',
      },
    },
    {
      title: 'Support and Maintenance',
      option: [
        'We even handle feature upgrades from time to time to ensure your product is always up to date and functions flawlessly throughout its lifetime.',
        'Our job doesn’t end with just the product launch. We offer post-launch support too. We closely monitor the transactions executed in blockchain and keep a regular watch to remove bugs/glitches (if any).',
      ],
      imageUrl: {
        src: 'https://vinova.sg/wp-content/themes/Divi/assetsBlockchainV2/img/Support-Maintenance.jpg',
        alt: 'Support and Maintenance',
      },
    },
  ];

  return (
    <div className=" flex justify-center">
      <div className="layout-component ">
        <div>
          <div className="md:w-1/2 pb-32">
            <Typography className="title">
              Our Blockchain Development Process
            </Typography>
          </div>
          {dataProcess.map((data, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 lg:gap-10 md:justify-between mb-20 lg:mb-16">
              <div className=" flex flex-col gap-4 justify-between relative md:w-[560px] lg:w-[720px]">
                {index !== 0 && (
                  <div className="absolute h-10 border rounded-md border-red -top-11 hidden lg:block" />
                )}
                <Typography className="title3">
                  <span className="text-red">0{index + 1}</span> {data.title}
                </Typography>
                {data.option.map((op, index) => (
                  <Typography key={index} className="content2">
                    {op}
                  </Typography>
                ))}
              </div>
              <div className="hidden sm:block h-full w-auto md:self-end sm:self-center">
                <img src={data.imageUrl.src} alt={data.imageUrl.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;

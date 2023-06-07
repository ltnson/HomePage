import { Button, Typography } from "@mui/material";
import {
  Ellipse1,
  Ellipse2,
  Ellipse3,
} from "../../../assets/SVGApproaches/ApproachesSVG";
import { dataAppbroaches } from "../../../models";

const Approaches = () => {
  const dataApproaches: dataAppbroaches = [
    {
      ellipse: <Ellipse1 />,
      title: "Public",
      content:
        "Permission-less and non-restrictive, public blockchains work best when maintaining large user bases where any member of the shared network can verify records, do proof-of-work, or engage in mining.",
    },
    {
      ellipse: <Ellipse2 />,
      title: "Private",
      content:
        "When confidentiality is vital, private blockchains are the best. Private blockchains allow access to data to only those participants who matter, letting data out on a need-to-know basis.",
    },
    {
      ellipse: <Ellipse3 />,
      title: "Hybrid",
      content:
        "Hybrid blockchains are a blend of both private and public blockchains. In this model, users can share data with the public and keep things confidential if needed, making the ecosystem super flexible.",
    },
  ];
  return (
    <div
      className=" flex justify-center"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className=" flex flex-col items-center gap-8 my-16 px-4 md:px-6 lg:px-16 xl:px-24 text-center max-w-[1280px] py-8">
        <Typography className="title">Approaches to Blockchain</Typography>
        <Typography className="intro">
          Our world-class team, of course, suggests which Blockchain approach
          would best fit your business. But, we let you have the last word
          before we get things rolling for you. Here are the Blockchain
          approaches we think can transform your business.
        </Typography>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
          {dataApproaches.map((data, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 ${
                data.title === "Private" && "lg:border-x md:border-l"
              }`}
            >
              <div className="flex flex-col gap-4 items-center">
                <div className="rounded-full bg-red-50 p-4">{data.ellipse}</div>

                <Typography className="title3">{data.title}</Typography>
                <Typography className="content">{data.content}</Typography>
              </div>
            </div>
          ))}
        </div>
        <Button className="button1">Get in Touch</Button>
      </div>
    </div>
  );
};

export default Approaches;

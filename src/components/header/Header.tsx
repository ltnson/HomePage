import { AppBar, Button, IconButton } from "@mui/material";
import VinovaSVG from "../../assets/VinovaSVG";
import { useState } from "react";
import { Dehaze } from "@mui/icons-material";
import { dataString } from "../../models";

const Header = () => {
  const [hidden, setHidden] = useState<Boolean>(false);

  const buttons: dataString = [
    "HOME",
    "SERVICES",
    "BLOCKCHAIN",
    "BLOG",
    "JOB",
    "ABOUT",
    "TESTIMONIAL",
    "CONTACT",
  ];

  return (
    <div className="flex flex-col items-center sm:border-b sm:border-gray-200">
      <AppBar position="static">
        <div className="flex lg:justify-evenly items-center justify-between lg:px-6 px-8 max-[1023px]:py-2">
          <VinovaSVG />
          <div className="h-20 w-12 hidden lg:block"></div>
          <div className="">
            <div className="hidden lg:flex">
              {buttons.map((name, index) => (
                <Button key={index}>{name}</Button>
              ))}
            </div>
            {hidden && (
              <div
                className="flex flex-col p-4 absolute top-16 right-4 bg-white border
               lg:sticky lg:flex-row lg:border-none text-sm"
              >
                {buttons.map((name, index) => (
                  <Button key={index}>{name}</Button>
                ))}
              </div>
            )}
          </div>
          <div className=" lg:hidden">
            <IconButton size="large" onClick={() => setHidden(!hidden)}>
              <Dehaze />
            </IconButton>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;

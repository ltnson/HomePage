import { AppBar, Button, IconButton } from "@mui/material";
import VinovaSVG from "../../assets/VinovaSVG";
import { useState } from "react";
import { Dehaze } from "@mui/icons-material";

const Header = () => {
  const [hidden, setHidden] = useState<Boolean>(false);

  return (
    <div className="">
      <AppBar position="static">
        <div className="lg:px-6 px-8 sm:py-2 lg:py-4">
          <div className="flex lg:justify-evenly items-center justify-between">
            <VinovaSVG />
            <div className="">
              <div className="hidden lg:flex">
                <Button>HOME</Button>
                <Button>SERVICES</Button>
                <Button>BLOCKCHAIN</Button>
                <Button>BLOG</Button>
                <Button>JOB</Button>
                <Button>ABOUT</Button>
                <Button>TESTIMONIAL</Button>
                <Button>CONTACT</Button>
              </div>
              {hidden && (
                <div
                  className="flex flex-col p-4 absolute top-16 right-4 bg-white border
               lg:sticky lg:flex-row lg:border-none"
                >
                  <Button>HOME</Button>
                  <Button>SERVICES</Button>
                  <Button>BLOCKCHAIN</Button>
                  <Button>BLOG</Button>
                  <Button>JOB</Button>
                  <Button>ABOUT</Button>
                  <Button>TESTIMONIAL</Button>
                  <Button>CONTACT</Button>
                </div>
              )}
            </div>
            <div className=" lg:hidden">
              <IconButton size="large" onClick={() => setHidden(!hidden)}>
                <Dehaze />
              </IconButton>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;

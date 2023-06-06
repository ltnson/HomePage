import { Typography } from "@mui/material";
const Hire = () => {
  return (
    <div
      className=" flex justify-center"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className=" max-w-[1280px] pt-12">
        <div className="flex flex-col items-center gap-8 py-16  md:px-6 lg:px-16 xl:px-24 text-center ">
          <Typography className="title">
            WHY HIRE <span style={{ color: "#FF1C03" }}>VINOVA</span> ?
          </Typography>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 py-4 px-4 md:px-6 lg:px-16 xl:px-24 grid-cols-1 text-center  pb-28">
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="w-20 h-20 rounded-full bg-gray-100"></div>
            <Typography className="title3">We Match Your Needs</Typography>
            <Typography className="content2">
              By partnering with Capital Numbers, you'll get access to our 700+
              in-house developers and will be able to fill any role immediately.
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="w-20 h-20 rounded-full bg-gray-100"></div>
            <Typography className="title3">
              World-class Coding Standards
            </Typography>
            <Typography className="content2">
              By partnering with Capital Numbers, you'll get access to our 700+
              in-house developers and will be able to fill any role immediately.
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="w-20 h-20 rounded-full bg-gray-100"></div>
            <Typography className="title3">Work with Experts</Typography>
            <Typography className="content2">
              By partnering with Capital Numbers, you'll get access to our 700+
              in-house developers and will be able to fill any role immediately.
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="w-20 h-20 rounded-full bg-gray-100"></div>
            <Typography className="title3">ISO Certified</Typography>
            <Typography className="content2">
              By partnering with Capital Numbers, you'll get access to our 700+
              in-house developers and will be able to fill any role immediately.
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="w-20 h-20 rounded-full bg-gray-100"></div>
            <Typography className="title3">Transparency</Typography>
            <Typography className="content2">
              By partnering with Capital Numbers, you'll get access to our 700+
              in-house developers and will be able to fill any role immediately.
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="w-20 h-20 rounded-full bg-gray-100"></div>
            <Typography className="title3">Top of the line</Typography>
            <Typography className="content2">
              By partnering with Capital Numbers, you'll get access to our 700+
              in-house developers and will be able to fill any role immediately.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;

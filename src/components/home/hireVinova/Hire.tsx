import {Typography} from '@mui/material';
import {dataHire} from '../../../models';
const Hire = () => {
  const dataHire: dataHire = [
    {
      title: 'We Match Your Needs',
      content:
        "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
    {
      title: 'World-class Coding Standards',
      content:
        "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
    {
      title: 'Work with Experts',
      content:
        "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
    {
      title: 'ISO Certified',
      content:
        "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
    {
      title: 'Transparency',
      content:
        "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
    {
      title: 'Top of the line',
      content:
        "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
  ];
  return (
    <div className=" flex justify-center bg-gray">
      <div className="layout-component text-center pt-16 px-8">
        <Typography className="title">
          WHY HIRE <span className="text-red ">VINOVA</span> ?
        </Typography>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:py-4  grid-cols-1 text-center  pb-28">
          {dataHire.map((data, index) => (
            <div className="flex flex-col items-center gap-2 px-4" key={index}>
              <div className="w-20 h-20 rounded-full bg-gray-100"></div>
              <Typography className="title3">{data.title}</Typography>
              <Typography className="content2">{data.content}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hire;

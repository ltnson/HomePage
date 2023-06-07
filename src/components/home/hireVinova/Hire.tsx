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
    <div className=" flex justify-center" style={{backgroundColor: '#FAFAFA'}}>
      <div className=" max-w-[1280px] pt-12">
        <div className="flex flex-col items-center gap-8 py-16  md:px-6 lg:px-16 xl:px-24 text-center ">
          <Typography className="title">
            WHY HIRE <span style={{color: '#FF1C03'}}>VINOVA</span> ?
          </Typography>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 py-4 px-4 md:px-6 lg:px-16 xl:px-24 grid-cols-1 text-center  pb-28">
          {dataHire.map((data, index) => (
            <div className="flex flex-col items-center gap-2 p-4" key={index}>
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

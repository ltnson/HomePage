import { SvgIcon, SvgIconProps } from "@mui/material";

export const PlushSVG = (props: SvgIconProps) => {
  return (
    <SvgIcon
      role="img"
      viewBox="0 0 17 18"
      fill="none"
      {...props}
      sx={{
        width: "17px",
        height: "18px",
      }}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M7.6219 8.14644H0V9.85356H7.6219V17.5H9.3781V9.85356H17V8.14644H9.3781V0.5H7.6219V8.14644Z"
        fill="#FF1C03"
      />
    </SvgIcon>
  );
};

export const XcharSVG = (props: SvgIconProps) => {
  return (
    <SvgIcon
      role="img"
      viewBox="0 0 14 14"
      fill="none"
      {...props}
      sx={{
        width: "14px",
        height: "14px",
      }}
    >
      <path
        d="M6.61396 5.7755L1.22447 0.386006L0.0173535 1.59312L5.40685 6.98262L0 12.3895L1.24182 13.6313L6.64867 8.22444L12.0382 13.6139L13.2453 12.4068L7.85578 7.01732L13.2626 1.61047L12.0208 0.368652L6.61396 5.7755Z"
        fill="#666666"
      />
    </SvgIcon>
  );
};

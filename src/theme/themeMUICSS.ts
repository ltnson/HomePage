import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          boxShadow: "none",
          "@media (max-width: 620px)": {
            justifyContent: "space-between",
          },
          maxWidth: "1280px",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: "space-evenly",
          "@media (max-width: 1000px)": {
            justifyContent: "space-between",
            padding: "0",
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          gap: "0px",
          "@media (max-width: 1000px)": {
            display: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000000",
          "&:hover": {
            color: "#991217",
            backgroundColor: "white",
          },
          "&.button1": {
            width: "282px",
            height: "70px",
            fontSize: "25px",
            fontWeight: "700",
            "@media (max-width: 1023px)": {
              width: "260px",
              height: "65px",
              fontSize: "20px",
            },
            color: "white",
            backgroundColor: "#FF1C03",
            "&:hover": {
              color: "#FF1C03",
              backgroundColor: "white",
              border: "4px solid #FF1C03",
            },
          },
          "&.button2": {
            width: "282px",
            height: "70px",
            fontSize: "25px",
            fontWeight: "700",
            "@media (max-width: 1023px)": {
              width: "260px",
              height: "65px",
              fontSize: "20px",
            },
            marginTop: "26px",
            color: "#FF1C03",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#FF1C03",
              color: "white",
              border: "4px solid white",
            },
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#000000",
          "&.title": {
            fontWeight: "700",
            lineHeight: "60px",
            fontSize: "48px",
            "@media (max-width: 1023px)": {
              lineHeight: "43.75px",
              fontSize: "35px",
            },
          },
          "&.intro": {
            lineHeight: "37.5px",
            fontSize: "25px",
            "@media (max-width: 1023px)": {
              lineHeight: "25px",
              fontSize: "20px",
            },
          },
          "&.content": {
            color: "#000000",
            fontWeight: "300",
            lineHeight: "27px",
            fontSize: "18px",
          },
          "&.title2": {
            fontWeight: "700",
            fontSize: "35px",
            lineHeight: "52.5px",
            "@media (max-width: 1023px)": {
              lineHeight: "43.75px",
              fontSize: "35px",
            },
          },
          "&.intro2": {
            lineHeight: "30px",
            fontSize: "20px",
            "@media (max-width: 1023px)": {
              lineHeight: "27px",
              fontSize: "18px",
            },
          },
          "&.title3": {
            fontWeight: "700",
            fontSize: "22px",
            lineHeight: "33px",
          },
          "&.content2": {
            color: "#000000",
            fontWeight: "400",
            lineHeight: "27px",
            fontSize: "18px",
          },
        },
      },
    },
  },
});

export default theme;

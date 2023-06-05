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
          maxWidth: "1100px",
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
          fontSize: "14px",
          ":hover": {
            border: "none",
            color: "FF1C03",
            background: "none",
          },
          border: "none",
          color: "#000000",
          "&.button-1": {},
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.title": {
            backgroundColor: "#004744",
            color: "green",
          },
        },
      },
    },
  },
});

export default theme;

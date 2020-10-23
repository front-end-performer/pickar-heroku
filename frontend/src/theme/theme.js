import { createMuiTheme } from "@material-ui/core/styles";

const black = "#363A3E";
const white = "#ffffff";
const pink = "#FF4F54";
const lightBlue = "#EEF4F7";
const inputBg = "#EFF0F0";
const transparent = "rgba(0,0,0,0.2)";

export default createMuiTheme({
  palette: {
    primary: {
      main: `${black}`
    },
    secondary: {
      main: `${white}`
    },
    error: {
      main: `${pink}`
    },
    action: {
      hover: `${pink}`
    },
    common: {
      lightBlue: `${lightBlue}`,
      inputBg: `${inputBg}`,
      pink: `${pink}`,
      transparent: `${transparent}`
    }
  },
  typography: {
    h1: {
      fontWeight: "bold",
      fontSize: 40,
      lineHeight: "47px"
    },
    body2: {
      fontWeight: "bold",
      fontSize: "1rem",
      lineHeight: "19px",
      textTransform: "none"
    },
    span: {
      fontWeight: "normal",
      fontSize: "1.25rem",
      lineHeight: "23px",
      textTransform: "none"
    }
  },
  maxWidth: {
    maxWidth: 1280,
    width: "100%",
    margin: "0 auto"
  }
});

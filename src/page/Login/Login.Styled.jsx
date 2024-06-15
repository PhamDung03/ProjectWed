import { Box, styled } from "@mui/material";

const StyledLogin = styled(Box)(({ theme }) => ({
  ".img": {
    img: {
      width: 700,
    },
  },
  ".Login__content": {
    marginTop: 10,
    h1: {
      color: " #3ac6e1",
      fontSize: 30,
      fontWeight: 600,
    },
    h2: {
      fontSize: 30,
      fontWeight: 600,
      margin: "2px 0",
    },
    p: {
      fontSize: 15,
      fontWeight: 500,
      color: "#c0c0c0",
    },
    h5: {
      textAlign: "center",
    },
    a: {
      textAlign: "center",
    },
    button: {
      width: "100%",
      height: 40,
      borderRadius: 40,
      backgroundImage: "linear-gradient(to right, #5bdffa, #36cbe9, #5bdffa )",
      backgroundSize: "200%",
      color: "#fff",
    },
    form:{
      h5:{
          a:{
              color: "#000",
              textDecoration: "none", 
          }, 
          "a:hover":{
              color: "#44D2EF", 
          }
      }
  }, 
    ".Login__content--inner": {
      padding: "5px 10px 20px 10px",
      a: {
        textAlign: "right",
        fontSize: 14,
        textDecoration: "none",
        color: "unset",
        fontWeight: 600,
      },
    },
  },

  [theme.breakpoints.down("md")]: {
    ".img": {
      img: {
        display: "none",
      },
    },
    ".Login__content": {
      h2: {
        fontSize: 25,
        fontWeight: 600,
      },
    },
  },

  [theme.breakpoints.between("md" , "lg")]:{
    ".img": {
      img: {
        width: 700, 
      },
    },
   
  },
}));

export default StyledLogin;

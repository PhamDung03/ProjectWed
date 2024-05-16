import { Box, styled } from "@mui/material";

const StyledFooter = styled(Box)({
  display: "block",
  zIndex: 100,
  ".footer_top": {
    marginTop: 50,
    borderTop: "1px solid #b6b4b4",
    padding: 30,
    h4: {
      fontSize: 14,
      fontWeight: 500,
      margin: "0 0 14px 0",
      textTransform: "uppercase",
    },
    span: {
      width: 25,
      height: 25,
      background: "#e52c25",
      textAlign: "center",
      color: "#fff",
      borderRadius: "100%",
      svg: {
        fontSize: 12,
      },
    },
    h3: {
      padding: "0 0 4px 16px",
      fontSize: 26,
      fontWeight: 500,
    },
    p: {
      fontSize: 12,
      marginTop: 5,
    },
    input: {
      background: "#fff",
      height: 36,
      width: "65%",
      fontSize: 15,
      colot: "#333",
      outline: "none",
      border: "1px solid #d0d0d0",
      padding: "0 10px",
    },
    button: {
      background: "#000",
      color: "#fff",
      height: 37,
      padding: "5px 10px",
      border: "none",
    },
    ".icon": {
      fontSize: 32,
    },
  },

  ".footer_bottom": {
    background: "#F1F1F1",
    ".footer_bottom-main": {
      h3: {
        margin: "20px 0",
        fontSize: 18,
        fontWeight: 500,
        textTransfrom: "uppercase",
      },
      ul: {
        li: {
          listStyle: "none",
          padding: "0 0 20px 0",
          width: "100%",
          fontSize: 14,
        },
      },
      i: {
        fontWeight: 700,
      },
    },
  },
});

export default StyledFooter;

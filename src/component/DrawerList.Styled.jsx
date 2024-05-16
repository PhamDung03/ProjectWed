import { Box, styled } from "@mui/material";

const StyledDrawerList = styled(Box)({
  position: "fixed",
  backgroundColor: "rgba(128, 128, 128, 0.6)",
  top: 0,
  right: 0,
  zIndex: 1,
  width: "100vw",
  height: "100vh",
  minHeight: "100vh",
  ".wapper": {
    overflowY: "auto",
    transition: " width 2s, height 2s, transform 2s",
    height: "100vh",
    width: 480,
    float: "right",
    background: "#fff",
    ".content": {
      padding: "60px 30px 100px",
      ".cartSide": {
        marginTop: 6,
        borderBottom: "1px dotted #bcbcbc",
        paddingBottom: 15,
      },
      td: {
        padding: "10px 10px 10px 0",
      },
      ".image": {
        width: 110,
        textAlign: "center",
        float: "left",
        img: {
          maxWidth: 100,
        },
      },
      ".product_name": {
        fontSize: 14,
        float: "left",
      },
      ".product_price": {
        float: "left",
        fontWeight: 400,
      },
      ".btn_delete": {
        border: "1px solid #ededed",
        padding: 5,
        display: "inline-block",
        fontSize: 12,
        width: 50,
      },
      ".line": {
        width: "100%",
        borderTop: "2px solid #000000",
        margin: "10px 0",
      },
      ".total": {
        b: {
          textTransform: "uppercase",
          fontSize: 14,
        },
        ".btn_add": {
          padding: "10px 30px",
          width: "100%",
          whiteSpace: "nowrap",
          float: "left",
          background: "black",
          color: "white",
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
          border: "none",
        },
        ".LinkProductDetail": {
          marginTop: 20,
        },
      },
    },
  },
});

export default StyledDrawerList;

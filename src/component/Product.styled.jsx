import { styled, Box } from "@mui/material";

const StyledProduct = styled(Box)({
  marginBottom: 40,
  border: "1px solid #fff",
  height: "96%",
  background: "transparent",
  textAlign: "center",
  position: "relative",
  ".product_list": {
    ".product": {
      cursor: "pointer",

      ".product_pic": {
        maxwidth: "100%",
        height: 340,
        backgroundSize: "cover",
        textAlign: "center",
        padding: "10px 0 4px 0 ",
        objectFit: "contain",
      },

      ".product_text": {
        height: 70,
      },
      ".product_text_name": {
        fontSize: 14,
        fontWeight: "normal",
      },
      ".product_text_price": {
        fontWeight: 600,
        fontSize: 16,
        color: "#000",
      },

      ".product_button": {
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        textAlign: "center",
        width: "50%",
        padding: "14px 10px",
        fontSize: 13,
        cursor: "pointer",
      },

      ".product_icon_information": {
        borderLeft: "1px solid #fff",
      },
      ".info": {
        width: "100%",
        left: 0,
        bottom: -26,
        position: "absolute",
        visibility: "hidden",
        padding: "7px 0",
      },
    },
  },

  ".product_list:hover": {
    border: "1px solid #DEDEDE",
    borderBottom: "none",
    ".info": {
      visibility: "visible",
    },
  },
});

export default StyledProduct;

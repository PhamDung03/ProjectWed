import { Box, styled } from "@mui/material";

const StyledDialogProduct = styled(Box)({
  padding: "30px 15px",

  ".thumbnails": {
    ".small-img": {
      margin: "0 0 10px 0",
      borderRadius: 0,
      cursor: "pointer",
      textAlign: "center",
      padding: 5,
      lineHeight: 1.42857143,
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      img: {
        borderRadius: 0,
        margin: 0,
        display: "inline-block",
        border: "none",
        padding: 0,
        width: "100%",
      },
    },
  },

  ".css-mhc70k-MuiGrid-root": {
    width: "calc(90% + 16px)",
  },
  ".slide-image": {
    margin: "0 auto",
    textAlign: "center",
    background: "#fff",
    overflow: "hidden",
    ".slide-image-item": {
      padding: "0 20px",
      img: {
        width: "100%",
      },
    },
  },

  ".product_title": {
    padding: "0 0 10px",
    borderBottom: "1px dotted #dfe0e1",
    h2: {
      fontSize: 18,
      fontWeight: 700,
      margin: "0 0 10px",
      lineHeight: "initial",
    },
    ".statusProduct": {
      color: "#000",
      fontWeight: "bold",
    },
  },
  ".product_price": {
    padding: "10px 0",
    fontSize: 16,
    fontWeight: "bold",
  },
  ".form_add-product": {
    ".select_size": {
      padding: "10px 0",
      ".select_size-header": {
        fontSize: 13,
        fontWeight: "bold",
        textTransform: "uppercase",
        lineHeight: "intial",
        marginBottom: 10,
      },
      ".select-swap": {
        span: {
          padding: "0 4px",
          border: "1px solid #d7d7d7",
          margin: "0 10px",
          minWidth: 40,
          height: 40,
          textAlign: "center",
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 500,
          color: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
  },
  ".button_add": {
    background: "#000",
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 15,
    width: "50%",
    minHeight: 50,
    boder: "none",
    padding: "8px 0",
    margin: "20px 0 40px 0",
  },
  ".product_description": {
    borderBottom: "1px solid #e7e7e7",
    paddingBottom: 10,
    marginBottom: 20,
    ".product_description-title": {
      fontSize: 13,
      color: "#111",
      textTransform: "uppercase",
    },
  },
  ".LinkProductDetail": {
    textAlign: "center",
    span: {
      cursor: "pointer",
    },
    "span:hover": {
      color: "#eb783a",
    },
  },
});

export default StyledDialogProduct;

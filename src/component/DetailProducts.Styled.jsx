import { styled, Box } from "@mui/material";

const StyledDetailProducts = styled(Box)({
  height: "160vh",
  ".product_img": {
    width: "100%",
  },
  ".box": {
    position: "relative",
    ".icon_look": {
      marginRight: 8,
    },
    p: {
      textAlign: "center",
      gap: 2,
    },
  },
  ".icon_next": {
    position: "absolute",
    top: "50%",
    right: "1%",
    fontSize: 60,
  },
  ".icon_pre": {
    position: "absolute",
    top: "50%",
    left: "1%",
    fontSize: 60,
  },
  ".product_title": {
    padding: " 0 0 10px",
    borderBottom: "1px dotted #dfe0e1",
    ".tp_product_detail_name": {
      fontSize: 16,
      fontWeight: 700,
      margin: "0 0 10px",
      lineHeight: "initial",
    },
    ".statusProduct": {
      color: "black",
      fontWeight: "bold",
    },
  },
  ".product-price": {
    padding: "10px 0",
    span: {
      fontSize: 22,
      fontWeight: "bold",
    },
  },
  ".add-item-form": {
    ".header_form": {
      margin: "0 0 10px 0",
      fontSize: 13,
      textAlign: "left",
      lineHeight: "initial",
      fontWeight: "bold",
      textTransform: " uppercase",
      float: "left",
      width: "100%",
    },
    ".guideSize": {
      marginLeft: 10,
      a: {
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: 12,
        fontWeight: "normal",
        textTransform: "capitalize",
      },
    },
    ".select-swap": {
      ".swatch-element": {
        display: "inline-block",
        marginRight: 8,
        verticalAlign: "bottom",
        position: "relative",
        label: {
          display: "block",
          minWidth: 40,
          padding: "0 3px",
          width: "auto",
          lineHeight: 2.7,
          marginBottom: 5,
          // border: "1.4px solid #000",
          margin: 0,
          background: "#fff",
          height: 40,
          fontSize: 14,
          fontWeight: 500,
          textAlign: "center",
          cursor: "pointer",
          color: "#000",
        },
      },
    },
    ".quantity-area": {
      ".qty-btn": {
        outline: "none",
        height: 40,
        width: 40,
        fontSize: 20,
        background: "#fff",
        border: "1px solid #e5e5e5",
        cursor: "pointer",
        fontWeight: "normal",
      },
      ".quantity-selector": {
        background: "#fff",
        height: 37,
        width: 60,
        border: "1px solid #e5e5e5",
        fontSize: 16,
        textAlign: "center",
        borderRight: "none",
        borderLeft: "none",
        cursor: "pointer",
      },
    },
    ".wrap-addcart": {
      ".btnAddToCart": {
        width: "47%",
        background: "#000",
        color: "#fff",
        fontSize: 15,
        textTransform: "uppercase",
        padding: "7px 0",
        minHeight: 50,
      },
    },
    ".wishlist": {
      color: "#545454",
      border: "1px solid #7b5450",
      textAlign: "center",
      padding: 10,
      textTransform: "uppercase",
      cursor: "pointer",
      width: "80%",
      margin: "16px auto 0",
      span: {
        fontSize: 14,
        color: "#4d4d4d",
        textTransform: "uppercase",
        fontWeight: "bold",
        letterSpacing: "0.09em",
      },
    },
    ".share": {
      fontSize: 16,
      textTransform: "uppercase",
      fontWeight: "bold",
      padding: "20px 0 0 0",
      a: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: "#ADADAD",
        color: "#fff",
        margin: "7px 10px",
        fontSize: 13,
        display: "inline-block",
        textAlign: "center",
        ".icon": {
          margin: "8px auto",
        },
      },
      span: {
        fontSize: 11,
        textAlign: "left",
        fontWeight: "normal",
      },
    },
  },
  ".sys-store": {
    border: "1px solid #eee",
    ".numberStore": {
      background: "#000",
      color: "#fff",
      width: "96%",
      textAlign: "center",
      fontSize: 18,
      borderRadius: "5px 5px 0 0",
      padding: 8,
    },
    ".select_cty": {
      ".form_control": {
        border: "1px solid #555",
        width: "96%",
        height: 28,
        color: "#555",
        background: "#fff",
        borderRadius: 4,
        fontSize: 14,
        margin: 8,
      },
    },
    ".form_group": {
      ".stock_box": {
        overflowY: "scroll",
        maxHeight: 200,
        color: "#333",
        fontWeight: "bold",
        borderColor: "#dcdbdb",
        overflowX: "hidden",
        padding: "0 0 15px 0",
        textAlign: "left",
        ".stock": {
          width: "100%",
          margin: "0 0 16px 16px",

          ".street": {
            fontWeight: "normal",
            paddingLeft: 20,
          },
          ".time_store": {
            fontWeight: "normal",
            paddingLeft: 20,
            strong: {
              color: "red",
            },
          },
        },
      },
    },
  },
  ".product_description": {
    borderBottom: "1px solid #e7e7e7",
    marginBottom: 10,
    paddingBottom: 10,
    color: "#797c7c",
    ".description-title": {
      h2: {
        textTransform: "uppercase",
        fontSize: 12,
        margin: 0,
      },
      span: {
        cursor: "pointer",
        fontSize: 12,
      },
    },
  },

  ".product_tags": {
    strong: {
      color: "#252a2b",
    },
    a: {
      display: "inline-block",
      padding: 5,
      border: "1px solid",
      textDecoration: "none",
      outline: "none",
      color: "#252a2b",
      fontWeight: 400,
    },
  },
});

export default StyledDetailProducts;

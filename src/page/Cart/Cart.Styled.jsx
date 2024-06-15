import { styled, Box } from "@mui/material";

const StyledCart = styled(Box)(({ theme }) => ({
  ".heading": {
    margin: "30px 0 15px 0",
    h1: {
      margin: 0,
      fontWeight: "bold",
      fontSize: 25,
      textTransform: "uppercase",
      display: "inline-block",
    },
    span: {
      padding: "8px 0",
    },
  },
  ".content_cart": {
    ".products": {
      td: {
        padding: "20px 0",
      },
      ".image": {
        borderBottom: "1px solid #dadbdd",
        width: 110,
        textAlign: "center",
        img: {
          maxWidth: 100,
        },
      },
      ".product_name": {
        padding: "0 0 0 16px",
        width: "40%",
        borderBottom: "1px solid #dadbdd",
        h3: {
          margin: " 0 0 5px",
          fontSize: 13,
          fontWeight: "normal",
          display: "inline",
        },
        button: {
          width: 40,
          background: "#fff",
          border: "1px solid #ededed",
          fontSize: 12,
          padding: 5,
        },
      },
      ".quantity": {
        borderBottom: "1px solid #dadbdd",
        ".add_action": {
          fontWeight: "bold",
          fontSize: 18,
          width: 20,
          textAlign: "center",
          cursor: "pointer",
          float: "left",
        },
        ".item_quantity": {
          background: "#ededed",
          fontWeight: 500,
          fontSize: 15,
          height: 25,
          padding: 0,
          textAlign: "center",
          width: 35,
          border: "1px solid #dadbdd",
          borderLeft: "none",
          borderRight: "none",
          borderRadius: 0,
          float: "left",
        },
      },
      ".product_price": {
        borderBottom: "1px solid #dadbdd",
      },
    },
  },
  ".boxRightCart": {
    background: "#F2F2F2",
    padding: 16,
    borderRadius: 5,
    ".titleInfoCart": {
      fontWeight: "bold",
      marginBottom: 10,
      textTransform: "uppercase",
    },
    ".summary-subtotal": {
      fontSize: 14,
      borderBottom: "1px dotted #bcbcbc",
      p: {
        marginBottom: 10,
      },
      ".sum_price": {
        marginBottom: 10,
        fontWeight: 700,
      },
    },
    ".note-subtotal": {
      fontSize: 14,
      float: "left",
      width: "100%",
      margin: "10px 0",
      color: "#252a2b",
    },
    ".cart_buttons": {
      button: {
        padding: "10px 30px",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 14,
        borderRadius: 5,
      },
      ".checkLimitCart": {
        background: "#000",
        color: "#fff",
        border: "none",
      },
      ".link_continue": {
        margin: "16px 0 0 0",
        background: "#fff",
        color: "#000",
        border: "1px solid #000",
        borderBottom: "2px solid #000",
      },
    },
  },
  ".breadcrumb_option": {
    marginBottom: 100,
    background: "#F3F2EE",
    padding: "40px 0",
    h3: {
      color: "#111",
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 8,
    },
    span: {
      fontSize: 15,
      cursor: "pointer",
    },
    p: {
      fontSize: 15,
      color: "#b7b7b7",
    },
  },
  [theme.breakpoints.down("lg")]: {
    ".heading": {
      display: "flex",
      flexDirection: "column",
      h1: {
        fontSize: 16,
      },
      span: {
        float: "left",
        width: "100%",
        fontSize: 12,
      },
    },
  },
}));

export default StyledCart;

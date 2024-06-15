import { styled, Box } from "@mui/material";

const StyledCheckOut = styled(Box)(({ theme }) => ({
  ".container": {
    padding: "0 100px",
  },
  ".main": {
    margin: "56px 0 0 0",
    paddingRight: "3%",
    ".main_header": {
      ".box_img": {
        maxWidth: "40%",
        img: {
          maxWidth: "100%",
        },
      },
      ul: {
        display: "flex",
        gap: 10,
        marginTop: 30,
        padding: "8px 15px",
        marginBottom: 20,
        listStyle: "none",
        backgroundColor: "#f5f5f5",
        borderRadius: 4,
      },
      svg: {
        marginTop: 5,
      },
      ".buy": {
        color: "#999",
      },
      ".cart": {
        color: "#ff1900",
      },
      margin: "0 0 28px 0",
    },
    ".main_content": {
      h2: {
        fontSize: 20,
        color: "#333",
        fontWeight: "normal",
        marginBottom: 20,
      },

      ".MuiFormControl-root": {
        marginBottom: 12,
      },
      ".fieldset": {
        "#outlined-email": {
          width: 302,
        },
        "#outlined-phone": {
          margin: "0 0 0 4px",
        },
      },
      ".select_form": {
        width: 270,
      },
      textarea: {
        width: "98%",
        padding: 5,
        borderRadius: 4,
        boxShadow: "0 0 0 1px #E0E0E0",
        transition: "all .2s ease-out",
        border: "1px solid #E0E0E0",
        height: 80,
      },
      ".content_box": {
        border: "1px solid #E0E0E0",
        width: "100%",
        borderRadius: 5,
        ".radio_check": {
          padding: 12,
          borderBottom: "1px solid #E0E0E0",
        },
        ".cod_description": {
          padding: 30,
          textAlign: "center",
          background: "#FAFAFA",
        },
      },
      ".back_cart": {
        margin: "20px 0 0 0",
        color: "#2B78A0",
        a: {
          textDecoration: "none",
        },
      },
    },
  },
  ".sidebar": {
    color: "#717171",
    background: "#FAFAFA",
    padding: "4em 0 0 4%",
    ".order_sections": {
      ".product_list": {
        paddingBottom: 20,
        table: {
          width: "100%",
        },
        ".product": {
          ".product_image": {
            img: {
              width: "4.6rem",
              height: "4.6rem",
              borderRadius: 8,
            },
          },
          ".product-description": {
            paddingLeft: "1em",
            span: {
              fontWeight: 400,
              color: "#4b4b4b",
              display: "block",
              fontSize: 15,
            },
            ".cart_remove": {
              cursor: "pointer",
              marginTop: 5,
              fontSize: 18,
              color: "#4b4b4b",
            },
            ".quantity_chagne": {
              fontSize: 18,
              width: 20,
              textAlign: "center",
              cursor: "pointer",
            },
            ".item-quantity": {
              background: "#ededed",
              fontSize: 16,
              height: 26,
              padding: 0,
              textAlign: "center",
              width: 36,
              border: "1px solid #dadbdd",
              borderRight: "none",
              borderLeft: "none",
            },
          },
          ".product-price": {
            paddingLeft: "1em",
          },
        },
      },
      ".order_sections-discount": {
        padding: "30px 0",
        borderTop: "1px solid #cdcdcd",
        ".MuiTextField-root ": {
          width: "69%",
        },
      },
      ".transprort_fee": {
        borderTop: "1px solid #cdcdcd",
        padding: "25px 0",
      },
      ".total": {
        borderTop: "1px solid #cdcdcd",
        padding: "25px 0",
        ".total_price": {
          fontSize: 22,
          fontWeight: "bold",
        },
      },
      ".note": {
        padding: 10,
        border: "1px solid #f77705",
        fontSize: 14,
        marginBottom: 30,
      },
    },
  },
  [theme.breakpoints.down("lg")]: {
    // padding: "0 1em",
    boxSizing: "border-box",
    width: "100%",
    // width: "100vw",
    ".container": {
      padding: 0,
    },
    ".main": {
      padding: 0,
      ".main_header": {
        ".box_img": {
          maxWidth: "100%",
        },
      },
      ".main_content": {
        paddingBottom: "1.5em",
      },
    },
  },
}));

export default StyledCheckOut;

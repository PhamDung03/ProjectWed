import { Box, styled } from "@mui/material";

const StyledCategories = styled(Box)(({ theme }) => ({
  padding: 150,
  background: "#f3f2ee",
  margin: "60px 0",
  ".categories_text": {
    h2: {
      margin: "16px 0",
      fontSize: 26,
      color: "#b7b7b7",
    },
    ".blur": {
      fontWeight: 700,
      color: "#000",
    },
  },
  ".categories_sale": {
    position: "relative",
    img: {
      maxWidth: "100%",
    },
    ".categories_sale-sticker": {
      position: "absolute",
      height: 78,
      width: 100,
      top: -36,
      right: 30,
      background: "#000",
      textAlign: "center",
      borderRadius: "50%",
      paddingTop: 22,
      span: {
        display: "block",
        color: "#fff",
        fontSize: 15,
        marginBottom: 4,
      },
      h5: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 700,
      },
    },
  },
  ".categories_countdown": {
    margin: "0 0 0 60px",
    ".categories_countdown-title": {
      color: "#e53637",
      fontSize: 18,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 3,
      marginBottom: 15,
    },
    h2: {
      color: "#111",
      fontWeight: 600,
      marginBottom: 25,
      lineHeight: 1.7,
      fontSize: 40,
    },
    ".countdown_timer": {
      marginLeft: -30,
      ".item": {
        width: "25%",
        textAlign: "center",
        span: {
          fontSize: 36,
          textAlign: "center",
          fontWeight: 700,
          marginBottom: 20,
        },
        ".item_after::after": {
          content: "':'",
          float: "right",
          fontSize: 20,
          margin: "12px 0",
        },
      },
    },
  },
  [theme.breakpoints.down("lg")]: {
    padding: 0,
    ".categories_countdown": {
      margin: 0,
    },
  },
}));

export default StyledCategories;

import { Stack, styled } from "@mui/material";

const StyledNavbar = styled(Stack)({
  margin: "0 0 30px 0",
  ".header_top": {
    background: "#000",
    padding: "10px 0",
    p: {
      color: "#fff",
      fontSize: 15,
    },
    ".header_top-right": {
      a: {
        color: "#ffffff",
        fontSize: 15,
        letterSpacing: 1.2,
        marginRight: 28,
        display: "inline-block",
        textDecoration: "none",
      },
    },
  },
  img: {
    maxWidth: 200,
  },
  ".header__list": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    li: {
      listStyle: "none",
      fontSize: 18,
      a: {
        position: "relative",
        textDecoration: "none",
        color: "#000",
        padding: "0 10px",
        letterSpacing: 0.5,
        "&.active": {
          color: "#d02020dd",
        },
      },
      "a::after": {
        content: "''",
        position: "absolute",
        backgroundColor: "#d02020dd",
        bottom: -10,
        width: "0",
        left: 0,
        height: 3,
        transition: "0.5s",
      },

      "a:hover::after": {
        width: "100%",
      },
    },
  },
});

export default StyledNavbar;

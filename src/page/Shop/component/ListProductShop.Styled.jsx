import { styled, Box } from "@mui/material";

const StyledListProductShop = styled(Box)({
  display: "block",
  zIndex: 8,
  margin: "100px 0",
  height: 1100,
  ".filter": {
    boxShadow: "0px 0px",
    ".filter_title": {
      fontSize: 16,
      color: "#111",
      textTransform: "uppercase",
      fontWeight: 700,
    },
    h5: {
      padding: "8px 0 8px 16px",
      fontSize: 15,
      cursor: "pointer",
    },
    ".action": {
      color: "#111",
    },
    ".unAction": {
      color: "#999",
    },

    ".c-1": {
      background: "#0B090C",
    },
    ".c-2": {
      background: "#20315F",
    },
    ".c-3": {
      background: "#F1AF4D",
    },
    ".c-4": {
      background: "#636068",
    },
    ".c-5": {
      background: "#57594D",
    },
    ".c-6": {
      background: "#E8BAC4",
    },
    ".c-7": {
      background: "#D6C1D7",
    },
    ".c-8": {
      background: "#ED1C24",
    },
    ".c-9": {
      background: "#FFFFFF",
    },

    span: {
      height: 30,
      width: 30,
      borderRadius: "50%",
      cursor: "pointer",
      border: "1px solid #999",
      position: "relavite",
      display: "inline-block",
      margin: "0 0 10px 12px",
      input: {
        visibility: "hidden",
        position: "absolute",
      },
    },
    a: {
      color: "#404040",
      fontSize: 13,
      fontWeight: 500,
      background: "#f1f5f8",
      padding: "5px 18px",
      display: "inline-block",
      textTransform: "uppercase",
      textDecoration: "none",
      margin: "0 10px 10px 0",
      transition: " all, 0.3s",
    },
    "a:hover": {
      background: "#000",
      color: "#fff",
    },
  },
  ".title_listShop": {
    paddingLeft: 24,
    color: "#111111",
    marginBottom: 45,
  },
});

export default StyledListProductShop;

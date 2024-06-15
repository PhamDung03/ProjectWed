import { styled, Box } from "@mui/material";

const StyledListProducts = styled(Box)({
  span: {
    fontWeight: "bold",
  },
  option: {
    fontSize: 16,
  },

  //   css Phần fillter
  ".groupFilterNew": {
    position: "relative",
    zIndex: 1,
    ".titleFilter": {
      ".fillter": {
        fontSize: 22,
        fontWeight: "normal",
      },
    },

    ".contentFilter": {
      position: "absolute",
      display: "none",
      top: 28,
      left: 70,
      width: 530,
      ".checkbox": {
        margin: "10px 0 0 0",
        ".checkbox_item": {
          padding: "0 36px 2px 16px",
          ".MuiSvgIcon-root": {
            fontSize: 22,
          },
          ".MuiCheckbox-root": {
            padding: "4px 8px",
          },
          ".MuiTypography-body1": {
            fontSize: 14,
          },
        },
      },
      background: "#fff",
    },
  },
  ".groupFilterNew:hover": {
    ".contentFilter": {
      display: "flex",
    },
  },

  ".sort-by": {
    border: "none",
    float: "left",
    outline: "none",
    background: "#fff",
    fontSize: 16,
    width: 90,
    margin: "0 0 0 10px",
    justifyContent: "center",
  },
});

export default StyledListProducts;

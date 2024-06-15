import { Box, styled } from "@mui/material";

const StyledDialogSuccess = styled(Box)({
  background: "rgba(128, 128, 128, 0.6)",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 1,
  minHeight: "100vh",
  ".wrapper": {
    width: "calc(100vw - 64px)",
    height: "calc(100vh - 64px)",
    padding: 32,
    ".content__box": {
      background: "#fff",
      padding: 24,
      width: "calc(100% - 48px)",
      maxWidth: 530,
      margin: "0 auto",
      maxHeight: 640,
      height: "fit-content",
      ".content__box--title": {
        img: {
          width: 120,
        },
        ".title": {
          color: "#04B976",
          padding: "24px 0",
        },
        ".content": {
          lineHeight: 2,
          color: "#333",
          textAlign: "center",
          marginBottom: 20,
        },
        ".wish": {
          color: "#0b6702",
        },
      },
      ".content__box--fotter": {
        marginTop: 30,
        button: {
          padding: "14px 10px",
          background: "#fff",
          borderRadius: 10,
        },
      },
    },
  },
});

export default StyledDialogSuccess;

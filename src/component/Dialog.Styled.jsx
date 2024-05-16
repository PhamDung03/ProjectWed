import { styled, Box } from "@mui/material";

const StyledDialog = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1,
  backgroundColor: "rgba(128, 128, 128, 0.6)",
  minHeight: "100vh",
  width: "100vw",
  height: "100vh",
  ".wrapper": {
    width: "calc(100vw - 64px)",
    height: "calc(100vh - 64px)",
    ".content_box": {
      width: "calc(100% - 48px)",
      backgroundColor: "white",
      margin: "0 auto",
      height: "fit-content",
      maxWidth: 520,
      maxHeight: 640,
      borderRadius: 8,
    },
  },
});

export default StyledDialog;
